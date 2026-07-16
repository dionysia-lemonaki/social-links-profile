import profileData from "./data";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <main className="font-inter bg-grey-900 min-h-dvh flex justify-center items-center p-6">
      <ProfileCard person={profileData} />
    </main>
  );
};

export default App;
