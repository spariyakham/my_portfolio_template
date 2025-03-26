import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://docs.google.com/document/d/1Vetn4Tyli0WYHDT6A6oddMT9yaAs4l0ob56Lbcl7hBw/edit?usp=sharing" download="SAriyakham_Resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume