// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import SearchIcon from '@mui/icons-material/Search';
import LocationOn from "@material-ui/icons/LocationOn";

import HomePage from "views/Home/Home.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Maps from "views/Maps/Maps.js";
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
    name: "Profile",
    icon: SearchIcon,
    component: Search,
  },
  {
    path: "/user",
    name: "Profile",
    icon: Person,
    component: UserProfile,
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
  }
];

export default routes;
