import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { BsLightningFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome size={24} />,
    cName: "side-text",
  },
  {
    title: "Rides",
    icon: <IoIcons.IoIosCar size={24} />,
    cName: "side-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Ongoing Rides",
        path: "/ongoingrides",
      },
      {
        title: "Scheduled Rides",
        path: "/scheduledrides",
      },
      {
        title: "Completed Rides",
        path: "/completedrides",
      },
      {
        title: "Cancelled Rides",
        path: "/cancelledrides",
      },
      {
        title: "Missed Rides",
        path: "/missedrides",
      },
    ],
  },
  {
    title: "Map View",
    path: "/products",
    icon: <FaIcons.FaMapMarkedAlt size={24} />,
    cName: "side-text",
  },
  {
    title: "Manual Dispatch",
    path: "/team",
    icon: <IoIcons.IoIosCar size={24} />,
    cName: "side-text",
  },
  {
    title: "Contact Drivers",
    path: "/contact-drivers",
    icon: <FaIcons.FaEnvelopeOpenText size={22} />,
    cName: "side-text",
  },
  {
    title: "Dynamic Pricing",
    path: "/support",
    icon: <BsLightningFill size={24} />,
    cName: "side-text",
  },
  {
    title: "Cutomers",
    icon: <AiIcons.AiOutlineUser size={24} />,
    cName: "side-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Active Customers",
        path: "/active-cutomers",
      },
    ],
  },
  {
    title: "Contact Customers",
    path: "/contact-customers",
    icon: <AiIcons.AiOutlineUser size={22} />,
    
    cName: "side-text",
  },
   
  {
    title: "Drivers",
    icon: <AiIcons.AiOutlineUser size={24} />,
    cName: "side-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Active Drivers",
        path: "/active-drivers",
      },
      {
        title: "Deactivated Drivers",
        path: "/deactivated-drivers",
      },
      {
        title: "Driver Enrollment",
        path: "/self-enrolled-drivers",
      },
      {
        title: "Leaderboard",
        path: "/leaderboard",
      },
      {
        title: "Driver Performance",
        path: "/driver-performance",
      },
      {
        title: "Ride Request Details",
        path: "/ride-request-details",
      },
      {
        title: "Documents",
        path: "/documents",
      },
    ],
  },
  {
    title: "Fleets",
    path: "/fleets",
    icon: <AiIcons.AiOutlineLink size={24} />,
    cName: "side-text",
  },
  {
    title: "Promotions",

    icon: <IoIcons.IoMdCash size={24} />,
    cName: "side-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "City wide",
        path: "/city-wide",
      },
      {
        title: "Promo codes",
        path: "/promo-codes",
      },
      {
        title: "Coupons",
        path: "/coupons",
      },
      {
        title: "Referrals",
        path: "/referrals",
      },
      {
        title: "Driver Referrals",
        path: "/driver-referrals",
      },
    ],
  },
  {
    title: "Chat Support",
    path: "/support",
    icon: <BsLightningFill size={24} />,
    cName: "side-text",
  },
  {
    title: "Analytics",
    path: "/support",
    icon: <GoGraph size={24} />,
    cName: "side-text",
  },
  {
    title: "Settings",
    path: "/support",
    icon: <IoIcons.IoMdSettings size={24} />,
    cName: "side-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "General Settings",
        path: "/overview/users",
      },
      {
        title: "City Settings",
        path: "/overview/users",
      },
      {
        title: "Vehicle Fare Settings",
        path: "/vehiclefare-settings",
      },
      {
        title: "Geofencing",
        path: "/geo-fencing",
      },
      {
        title: "Managers Settings",
        path: "/managers-settings",
      },
    ],
  },
];
