import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
        alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type='text'></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={ HomeIcon } title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="https://instagram.fhyd2-1.fna.fbcdn.net/v/t51.2885-19/11350808_1640905166196606_982103346_a.jpg?_nc_ht=instagram.fhyd2-1.fna.fbcdn.net&_nc_ohc=eeSOIaLJNHAAX8Ss40a&oh=42ec0dd178f8e72096c820dc5bbeefd6&oe=601A7274" title="Partha Sen" />
      </div>
    </div>
  );
}

export default Header;
