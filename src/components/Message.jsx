import "../App.css";

function Message({ user, message, curr }) {
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
    </div>
  );
}

export default Message;
