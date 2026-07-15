import profileData from "./data";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <main>
      <ProfileCard person={profileData} />
    </main>
  );
};

export default App;
