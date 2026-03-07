import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import ActiveTask from "../Components/ActiveTask";

const Dashboard = () => {
  // Component logic and state hooks go here
  return (
    <div className="flex max-w-[1200px] mx-auto">
      <div className="w-full min-h-screen bg-[#0B1120] md:flex">
        <Header></Header>
        <div className="w-full">
          <SearchBar />
          <ActiveTask />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
