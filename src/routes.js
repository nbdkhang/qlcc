/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import Homepage from "./view/Homepage/homepage";
import UserProfile from "./view/Profile/profile";
import Bill from "./view/Bill/bill.js";

//import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout


const dashboardRoutes = [
  {
    path: "/home",
    name: "Trang chủ",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Homepage,
    layout: ""
  },
  {
    path: "/profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component:UserProfile,
    layout: ""
  },
  {
    path: "/bill",
    name: "Hóa đơn",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component:Bill ,
    layout: ""
  },
  // {
  //   path: "/report",
  //   name: "Báo cáo",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Person,
  //   component:Bill ,
  //   layout: ""
  // },

  
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  
];

export default dashboardRoutes;
