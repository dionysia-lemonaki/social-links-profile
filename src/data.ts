import type { Person } from "./types";
import avatarJessica from "./assets/images/avatar-jessica.jpeg";

const profileData: Person = {
  avatar: avatarJessica,
  name: "Jessica Randall",
  location: "London, United Kingdom",
  bio: "Front-end developer and avid reader.",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/",
    },
    {
      label: "Frontend Mentor",
      url: "https://www.frontendmentor.io/",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/feed/",
    },
    {
      label: "Twitter",
      url: "https://x.com/home",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/",
    },
  ],
};

export default profileData;
