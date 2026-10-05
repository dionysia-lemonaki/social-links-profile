import { person } from "./data";
import PersonProfile from "./components/PersonProfile";

const App = () => {
  return (
    <main>
      <PersonProfile person={person} />
    </main>
  );
};

export default App;
