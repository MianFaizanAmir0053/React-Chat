import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Mainscreen from "./components/Mainscreen";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, addUser } from "./Redux-toolkit/reducers";

function App() {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.chat.users);

  const handleLogin = () => {
    dispatch(addUser({ username: user }));
  };

  return users.length === 0 ? (
    <div className="bg2 w-screen h-screen">
      <Header />
      <div className="w-fit px-8 text-white rounded shadow-md m-auto absolute left-[calc(50%-9rem)] top-[calc(50%-12rem)] py-4">
        <h1 className="text-3xl font-semibold">Login</h1>
        <div className="py-4">
          <input
            className="px-4 bg-teal-50 text-teal-800 outline-none rounded py-4"
            type="text"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
            onKeyDown={(e) => e.code === "Enter" && handleLogin()}
          />
          <a
            onClick={handleLogin}
            className=" block cursor-pointer w-fit mt-4 bg-cyan-500 rounded px-4 py-2"
          >
            Submit
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-white bg h-full">
      <Header username={user} />
      <div className="flex flex-col  w-full">
        <Mainscreen />
      </div>
    </div>
  );
}

export default App;
