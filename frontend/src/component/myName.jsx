import { CiDesktopMouse1 } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
function MyName() {
  return (
    <div className="my-name w-2/5 h-full ">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        👋I'm <span>Piyush Singh</span>
      </h1>
      <h3 className="text-gray-500 text-xl">_________Web Developer.</h3>
      <p className="text-gray-500 mt-5">
        Building sleek interfaces. Writing clean code. MERN Developer | Always
        learning, always building.
      </p>
      <div className="mt-10 ">
        <a href="#contact">
          <button
            className=" bg-black text-white hover:bg-gray-800 transition-all duration-700 px-10 py-5 rounded-3xl flex items-center justify-center"
            sx={{
              borderRadius: "20px",
              backgroundColor: "gray",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                animationDuration: "1s",
              },
              padding: "10px 20px",
              fontSize: "16px",
            }}
            variant="contained"
          >
            Contact Me {<IoIosSend size={24} className="ml-4" />}
          </button>
        </a>
      </div>
      <div className="mt-60 text-gray-500 flex">
        <CiDesktopMouse1 size={24} />
        Scroll Down <FaArrowDown className="ml-1 mt-1" />
      </div>
    </div>
  );
}
export default MyName;
