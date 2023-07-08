function Header({ username }) {
  return (
    <div className=" relative z-30  h-[5rem]  w-full text-center m-auto place-content-center flex">
      <div className="fixed flex-col flex justify-center py-4  backdrop-blur-md w-full h-fit">
        <div className="uppercase text-orange-500  text-3xl font-thin tracking-[0.4rem]">
          React Chat
        </div>
        {username && (
          <div className=" text-slate-800">
            Welcome
            <span className=" text-blue-500 uppercase font-semibold tracking-wider">
              {" "}
              {username}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
