import type { Person } from "../types";
import SocialLink from "./SocialLink";

interface PersonProfileProps {
  person: Person;
}

const PersonProfile = ({ person }: PersonProfileProps) => {
  return (
    <div className="bg-grey-800 max-w-sm w-full p-6 md:p-10 flex flex-col gap-6 text-center rounded-xl">
      <img
        src={person.avatar}
        alt=""
        width={88}
        height={88}
        className="mx-auto rounded-full"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">{person.name}</h1>
        <p className="text-green font-bold">{person.location}</p>
      </div>
      <p className={`before:content-['"'] after:content-['"']`}>{person.bio}</p>
      <ul>
        {person.links.map((link) => (
          <SocialLink key={link.url} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default PersonProfile;
