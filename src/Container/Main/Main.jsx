import { Route, Routes } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";
import AllCustomers from "../../Pages/AllCustomers";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <nav>
        <SideBar />
      </nav>
      <section>
        <h1>Hello Evano 👋🏼,</h1>
        <Routes>
          <Route path="/customers" element={<AllCustomers />} />
        </Routes>
      </section>
    </main>
  );
};
export default Main;
