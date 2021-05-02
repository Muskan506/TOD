import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "../App.css";

import { SidebarData } from "../components/SidebarData";
import SubMenu from "../components/SubMenu";
import DashboardContent from "./DashboardContent";
import OngoingRides from "./rides/OngoingRides";
import ScheduledRides from "./rides/ScheduledRides";
import CompletedRides from "./rides/CompletedRides";
import CancelledRides from "./rides/CancelledRides";
import MissedRides from "./rides/MissedRides";
import Header from "./Header";
import CustomerDetails from "./Cutomers/CustomerDetails";
import Fleets from "./Fleets/Fleets";
import Leaderboard from "./Drivers/Leaderboard";
import DriverEnrollment from "./Drivers/DriverEnrollment";
import DeactivatedDrivers from "./Drivers/DeactivatedDrivers";
import ActiveDrivers from "./Drivers/ActiveDrivers";
import DriverPerformance from "./Drivers/DriverPerformance";
import RideRequestDetails from "./Drivers/RideRequestDetails";
import Documents from "./Drivers/Documents";
import ContactDrivers from './Cutomers/ContactDrivers';
import ContactCustomers from './ContactCustomers';
import CityWide from './Promotions/CityWide';
import PromoCodes from './Promotions/PromoCodes';
import Referrals from './Promotions/Referrals';
import DriverReferrals from './Promotions/DriverReferrals';
import Coupons from './Promotions/Coupons';
import ManagersSettings from './Settings/ManagersSettings';
import GeoFencing from './Settings/GeoFencing';
import VehicleFareSettings from './Settings/VehicleFareSettings';
import History from "./Cutomers/History";
// import ContactCustomer from './Cutomers/ContactCustomer';
import Details from './Settings/Details';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar);
    if (sidebar) {
      document.getElementById("mySidenav").style.width = "16%";
      document.getElementById("main").style.width = "84%";
      document.getElementById("main").style.marginLeft = "16%";
    } else {
      document.getElementById("mySidenav").style.width = "0%";
      document.getElementById("main").style.width = "100%";
      document.getElementById("main").style.marginLeft = "0%";
    }
  };
  return (
    <div>
      <Header onclick={showSidebar} />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "91.4vh",
          overflow: "hidden",
        }}
        z
      >
        <div id="mySidenav" className="sidenav">
          <div className="side-menu-items">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </div>
        <div id="main" className="shadow-inner bg-gray-50">
          <Switch>
            <Route path="/" exact component={DashboardContent} />
            <Route path="/active-cutomers" exact component={CustomerDetails} />
            <Route path="/ongoingrides" exact component={OngoingRides} />
            <Route path="/scheduledrides" exact component={ScheduledRides} />
            <Route path="/completedrides" exact component={CompletedRides} />
            <Route path="/cancelledrides" exact component={CancelledRides} />
            <Route path="/missedrides" exact component={MissedRides} />
            <Route path="/contact-drivers" exact component={ContactDrivers}/>
            <Route path="/contact-customers" exact component={ContactCustomers}/>

            <Route path="/contact-drivers/hisory" exact component={History}/>
            <Route path="/active-drivers" exact component={ActiveDrivers} />
            <Route
              path="/deactivated-drivers"
              exact
              component={DeactivatedDrivers}
            />
            <Route
              path="/self-enrolled-drivers"
              exact
              component={DriverEnrollment}
            />
            <Route path="/leaderboard" exact component={Leaderboard} />
            <Route
              path="/driver-performance"
              exact
              component={DriverPerformance}
            />
            <Route
              path="/ride-request-details"
              exact
              component={RideRequestDetails}
            />
            <Route path="/documents" exact component={Documents} />

            <Route path="/fleets" exact component={Fleets} />
            <Route path="/city-wide" exact component={CityWide} />
            <Route path="/promo-codes" exact component={PromoCodes}/>
            <Route path="/referrals" exact component={Referrals}/>
            <Route path="/driver-referrals" exact component={DriverReferrals}/>
            <Route path="/coupons" exact component={Coupons}/>
            <Route path="/managers-settings" exact component={ManagersSettings}/>
            <Route path="/geo-fencing" exact component={GeoFencing}/>
            <Route path="/vehiclefare-settings" exact component={VehicleFareSettings}/>
            <Route path="/vehiclefare-settings/details" exact component={Details}/>
           
            

            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
