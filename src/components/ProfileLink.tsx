import type { Link } from "../types";

interface ProfileLinkProps {
  link: Link;
}

const ProfileLink = ({ link }: ProfileLinkProps) => {
  return (
    <li>
      <a href={link.url} target="_blank">
        {link.label}
        <span className="sr-only">(Opens in a new tab)</span>
      </a>
    </li>
  );
};

export default ProfileLink;
