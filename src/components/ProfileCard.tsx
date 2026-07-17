import type { Person } from "../types";
import ProfileLink from "./ProfileLink";

interface ProfileCardProps {
  person: Person;
}

const ProfileCard = ({ person }: ProfileCardProps) => {
  return (
    <div className="bg-grey-800 max-w-[24rem] w-full rounded-xl p-6 md:p-10 flex flex-col gap-6 text-center">
      <img
        src={person.avatar}
        alt=""
        width="88"
        height="88"
        className="mx-auto rounded-full"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold leading-normal text-white">
          {person.name}
        </h1>
        <p className="text-sm font-bold leading-normal text-green">
          {person.location}
        </p>
      </div>
      <p className="text-sm font-normal leading-normal text-white before:content-(--content) after:content-(--content)">
        {person.bio}
      </p>
      <ul className="flex flex-col gap-4">
        {person.links.map((link) => (
          <ProfileLink key={link.url} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
