import DeleteIcon from "@mui/icons-material/Delete";
import "../App.css";
import { deleteMessage } from "../Redux-toolkit/reducers";
import { useDispatch } from "react-redux";

function Message({ user, message, curr }) {
  const dispatch = useDispatch();
  return (
    <div className={` flex py-4 ${curr === "true" ? "w-fit" : "w-full"} `}>
      <strong
        className={` ${
          curr === "true"
            ? "text-cyan-700 bg-cyan-200"
            : " text-amber-700 bg-amber-200"
        } mr-2 rounded-full h-fit text-center px-4 py-1  mx-auto`}
      >
        {user}
      </strong>
      <div
        className={`break-all rounded-tl-none p-3 ${
          curr === "true"
            ? " text-violet-700 bg-violet-200"
            : "  text-rose-700 bg-rose-200"
        }   rounded-3xl shadow-lg`}
      >
        {message}
      </div>
      {curr === "true" && (
        <div
          onClick={() => dispatch(deleteMessage({ message }))}
          className="ml-2 self-end"
        >
          <DeleteIcon className="text-red-600 cursor-pointer" />
        </div>
      )}
    </div>
  );
}

export default Message;
