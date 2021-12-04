/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";
//import * as FAicons from "react-icons/fa";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
// import { Button } from "react-bootstrap";


export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggle = event => setIsSidebarOpen(!isSidebarOpen);
  
  return (
    <React.Fragment>
        <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
    <p><button onClick={toggle} style={{marginRight:"5000px"}}><Icon name="burger" className="w-6 h-6" /></button></p>
      {/* <div >
        <button
          className="btn-menu"
          onClick={() => {setIsSidebarOpen(false)}}

        //   onClick={(): void => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div> */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
           {
             isSidebarOpen?(
              <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/home",
              elemBefore: () => <Icon name="coffee" />
            },
            {
                title: "Login",
                itemId: "/login",
                elemBefore: () => <Icon name="coffee" />
              },
              {
                title: "Search-Ticket",
                itemId: "/search",
                elemBefore: () => <Icon name="coffee" />
              },
              {
                title: "Search-Bus",
                itemId: "/searchbus",
                elemBefore: () => <Icon name="coffee" />
              },

              {
                title: "Cancel-Ticket",
                itemId: "/cancel",
                elemBefore: () => <Icon name="coffee" />
              },
            {
              title: "About",
              itemId: "/aboutus",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "About-US",
                  itemId: "/aboutus",
                  // Optional
                  elemBefore: () => <Icon name="cloud-snow" />
                },
                {
                  title: "About_us",
                  itemId: "/aboutus",
                  elemBefore: () => <Icon name="coffee" />
                }
              ]
            }
          ]}
        />
             ):(
               <></>
             )
           }
        
      </div>
    </React.Fragment>
  );
};
