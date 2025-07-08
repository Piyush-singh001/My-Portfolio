import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { FaArrowDown } from "react-icons/fa6";
import { Padding } from "@mui/icons-material";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
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
          <Button
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
            endIcon={<SendIcon />}
          >
            Contact Me
          </Button>
        </a>
      </div>
      <div className="mt-60 text-gray-500 flex">
        <MouseOutlinedIcon />
        Scroll Down <FaArrowDown className="ml-1 mt-1" />
      </div>
    </div>
  );
}
export default MyName;
