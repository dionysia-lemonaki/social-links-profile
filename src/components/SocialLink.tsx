import type { Link } from "../types";

interface SocialLinkProps {
  link: Link;
}

const SocialLink = ({ link }: SocialLinkProps) => {
  return (
    <li>
      <a href={link.url} target="_blank">
        {link.label} <span className="sr-only">(Opens in a new tab)</span>
      </a>
    </li>
  );
};

export default SocialLink;
