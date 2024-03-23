import "./App.css";
import { BaseLayout } from "./Containers/BaseLayout";
import { Nav } from "./Components/Nav";

function App() {
  return (
    <section className="max-w-[500px] bg-gray-50 bg-opacity-4">
      <Nav />
      <BaseLayout />
    </section>
  );
}

export default App;
