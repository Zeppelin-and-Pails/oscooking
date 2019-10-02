// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";

import HomePage from "views/Home/Home.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import Home from "./views/Home/Home";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: Home,
    component: HomePage,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
  },
];

export default routes;
