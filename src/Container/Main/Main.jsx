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
        <AllCustomers />
      </section>
    </main>
  );
};
export default Main;
