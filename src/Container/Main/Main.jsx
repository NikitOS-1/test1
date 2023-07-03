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
        <AllCustomers />
      </section>
    </main>
  );
};
export default Main;
