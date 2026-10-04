import type { Person } from "../types";
import SocialLink from "./SocialLink";

interface PersonProfileProps {
  person: Person;
}

const PersonProfile = ({ person }: PersonProfileProps) => {
  return (
    <div>
      <img src={person.avatar} alt="" width={88} height={88} />
      <div>
        <h1>{person.name}</h1>
        <p>{person.location}</p>
      </div>
      <p>{person.bio}</p>
      <ul>
        {person.links.map((link) => (
          <SocialLink key={link.url} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default PersonProfile;
