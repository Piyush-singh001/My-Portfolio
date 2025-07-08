import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function SocalMedia() {
  return (
    <div className="socal-media w-1/5 pt-40 h-full pl-20 flex flex-col space-y-10">
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link  text-gray-500 hover:text-black transition-all duration-700"
      >
        <LinkedInIcon />
      </a>
      <a
        href="
            https://github.com/Piyush-singh001"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <GitHubIcon className=" social-link text-gray-500 hover:text-black transition-all duration-700" />
      </a>
      <a
        href="https://www.instagram.com/piyush_.sengar/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <InstagramIcon className="social-link text-gray-500 hover:text-black transition-all duration-700" />
      </a>
    </div>
  );
}
export default SocalMedia;
