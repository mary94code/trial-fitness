import { NavLink } from "react-router-dom";
import Time from "../components/Overview/Time";
import TotalDistance from "../components/Overview/TotalDistance";
import EnergyBurn from "../components/Overview/EnergyBurn";
import Sleep from "../components/Overview/Sleep";
import Water from "../components/Overview/Water";
import ActivityTracking from "../components/Overview/ActivityTracking";
import LeftSidebar from "../components/Overview/LeftSidebar";

export default function Overview() {
  return (
    <div className="main_wrapper">
      <div className="left_sidebar">
        <LeftSidebar />
      </div>
      <div className="middle_component">
        <div className="central_component">
          <div className="greeting_component">
            <h2>Hello: INCLUDE NAME</h2> depending on the day
            <NavLink to={"./profile"}>PROFILE PHOTO</NavLink>
          </div>
          <div className="details_container">
            <Time />
            <TotalDistance />
            <EnergyBurn />
            <Sleep />
          </div>
          <div>
            <Water />
          </div>
        </div>
        <div className="right_sidebar">
          <ActivityTracking />
        </div>
      </div>
    </div>
  );
}
