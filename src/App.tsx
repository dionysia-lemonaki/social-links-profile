import { person } from "./data";
import PersonProfile from "./components/PersonProfile";

const App = () => {
  return (
    <main className="min-h-screen flex justify-center items-center p-6">
      <PersonProfile person={person} />
    </main>
  );
};

export default App;
