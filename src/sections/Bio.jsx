import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Bio = () => {
  return (
    <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md">
      <img
        src="/newphoto.jpg"
        alt="profile picture"
        className="h-32 w-32 rounded-full object-cover border border-gray-300 mx-auto md:mx-0"
      />
      <h1 className="text-lg md:text-2xl font-bold mt-3">Avik Nayak</h1>
      <p className="text-secondary-foreground py-2">
        Web Developer and Tech Enthusiast
      </p>
      <div className="flex flex-row justify-center md:justify-start gap-2 mt-2">
        <a
          href="https://www.linkedin.com/in/avik-nayak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={25}
            className="text-blue-400 hover:text-blue-500 cursor-pointer "
          />
        </a>
        <a
          href="mailto:nayakavik19@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail
            size={25}
            className="text-red-400 hover:text-red-500 cursor-pointer "
          />
        </a>
        <a
          href="https://github.com/AvikNayak22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={25}
            className="text-slate-500 hover:text-slate-700 cursor-pointer "
          />
        </a>
      </div>
    </section>
  );
};

export default Bio;
