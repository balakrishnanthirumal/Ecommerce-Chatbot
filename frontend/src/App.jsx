import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />

      <main className="py-[100px]">
        <Outlet />
      </main>
    </>
  );
};
export default App;
