import React from "react";
import DashboardHeader from "../../component/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../component/Shop/Layout/DashboardSideBar";
import AllEvents from "../../component/Shop/AllEvents";

const ShopAllEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] sm:w-[330px]">
          <DashboardSideBar active={5} />
        </div>
        <div className="w-full justify-center flex">
          <AllEvents />
        </div>
      </div>
    </div>
  );
};

export default ShopAllEvents;
