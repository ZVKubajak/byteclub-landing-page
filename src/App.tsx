import { Outlet } from "react-router-dom";
import Header from "./ui/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
};

export default App;