import type { Link } from "../types";

interface SocialLinkProps {
  link: Link;
}

const SocialLink = ({ link }: SocialLinkProps) => {
  return (
    <li>
      <a
        href={link.url}
        target="_blank"
        className="bg-grey-700 block p-3 rounded-lg font-bold hover:bg-green hover:text-grey-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dotted focus-visible:outline-green"
      >
        {link.label} <span className="sr-only">(Opens in a new tab)</span>
      </a>
    </li>
  );
};

export default SocialLink;
