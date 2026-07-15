import type { Person } from "../types";
import ProfileLink from "./ProfileLink";

interface ProfileCardProps {
  person: Person;
}

const ProfileCard = ({ person }: ProfileCardProps) => {
  return (
    <div>
      <img src={person.avatar} alt="" width="88" height="88" />
      <div>
        <h1>{person.name}</h1>
        <p>{person.location}</p>
      </div>
      <p>{person.bio}</p>
      <ul>
        {person.links.map((link) => (
          <ProfileLink key={link.url} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
