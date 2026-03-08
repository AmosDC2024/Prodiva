import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import ActiveTask from "../Components/ActiveTask"; 
import  TodaysFocus  from "../Components/TodaysFocus"; 
import DesktopTodaysFocus from "../Components/DesktopFocus";
import Badges from "../Components/Badges"; 
import DateNavigator from "../Components/ActiveDate";
import UpcomingTasks from "../Components/UpcomingTask";


const Dashboard = () => {
  // Component logic and state hooks go here
  return (
    <div className="flex max-w-[1200px] mx-auto">
      <div className="w-full min-h-screen bg-[#0B1120] md:flex">
        <Header></Header>
        <div className="w-full">
          <SearchBar />
          <ActiveTask /> 
          <TodaysFocus /> 
          <span className="sm:hidden"> <Badges /> </span>
          
          <div className="hidden sm:flex justify-between">  
          <DesktopTodaysFocus /> 
          <Badges /> 
          </div>   
             <DateNavigator /> 
             <UpcomingTasks /> 
        
          

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
