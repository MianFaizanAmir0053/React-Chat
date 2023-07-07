import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, updateMessages } from "../Redux-toolkit/reducers";
import { CircularProgress, Stack } from "@mui/material";
import "../App.css";

function Mainscreen({}) {
  const users = useSelector((state) => state.chat.users);
  const currentUser = useSelector((state) => state.chat.currentUser);
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const [noMsg, setNoMsg] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchMessages = () => {
      const msgs = localStorage.getItem("messages");
      const m = JSON.parse(msgs);
      m !== null && dispatch(updateMessages(m));
      m === null ? setNoMsg(true) : setNoMsg(false);
      m.length === 0 && setNoMsg(true);
    };
    // fetchMessages();
    const intervalId = setInterval(fetchMessages, 2000); // Call fetchMessages every 2 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);

  const sendMessage = () => {
    const { username } = currentUser;
    const m = { message: msg, username };
    dispatch(addMessage(m));
    setMsg("");
  };

  return (
    <div
      className={`relative pb-16 w-[100%] min-h-screen bg bg-cover max-w-2xl mx-auto`}
    >
      {messages.length !== 0 ? (
        messages.map((msg, i) => (
          <Message
            user={msg?.username}
            curr={currentUser?.username === msg?.username ? "true" : "false"}
            message={msg?.message}
            key={i}
          />
        ))
      ) : noMsg ? (
        <div className="text-lg text-red-600 mt-6 font-semibold">
          No messages found
        </div>
      ) : (
        <div>
          <Stack
            sx={{ color: "grey.500" }}
            className=" place-content-center pt-12"
            spacing={2}
            direction="row"
          >
            <CircularProgress size={70} color="success" />
          </Stack>
        </div>
      )}
      <div className="flex bottom-5 w-[fill-available] max-w-2xl items-center  fixed">
        <input
          className="w-full text-orange-800 p-3 bg-orange-200 rounded-full  outline-none"
          type="text"
          onChange={(e) => setMsg(() => e.target.value)}
          value={msg}
          onKeyDown={(e) => e.code === "Enter" && sendMessage()}
        />
        <div onClick={sendMessage}>
          <SendIcon className="ml-6 hover:text-orange-800 text-orange-400  " />
        </div>
      </div>
    </div>
  );
}

export default Mainscreen;
