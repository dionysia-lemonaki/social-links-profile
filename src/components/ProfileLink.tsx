import type { Link } from "../types";

interface ProfileLinkProps {
  link: Link;
}

const ProfileLink = ({ link }: ProfileLinkProps) => {
  return (
    <li>
      <a
        href={link.url}
        target="_blank"
        className="block bg-grey-700 p-3 rounded-lg text-white text-sm font-bold leading-normal hover:bg-green hover:text-grey-700 focus-visible:outline-2 focus-visible:outline-green focus-visible:outline-dotted focus-visible:outline-offset-4"
      >
        {link.label}
        <span className="sr-only">(Opens in a new tab)</span>
      </a>
    </li>
  );
};

export default ProfileLink;
