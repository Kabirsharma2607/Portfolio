import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/Kabirsharma2607" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/kabirsharma2607" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@IsKabirCoding" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/iskabircoding" },
  { icon: <FaTwitter />, path: "https://www.x.com/dev_karan1" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
