import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();

  // List of paths where Navigation should not appear
  const noNavPaths = ["/login", "/signup"];

  return (
    <>
      {/* Show Navigation only if the current path is not in the noNavPaths */}
      {!noNavPaths.includes(location.pathname) && <Navigation />}
      <ToastContainer />

      <main className="py-[100px]">
        <Outlet />
      </main>
    </>
  );
};
export default App;
