import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { CBadge } from "@coreui/react";
import { useDispatch } from "react-redux";
import { logout } from "src/redux/actions";

export const AppSidebarNav = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    );
  };

  const navLogout = (item, index) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
        onClick={() => {
          dispatch(logout(navigate));
          // item.onClick();
        }}
      >
        {navLink(name, icon, badge)}
      </Component>
    );
  };
  // const navGroup = (item, index) => {
  //   const { component, name, icon, to, ...rest } = item;
  //   const Component = component;
  //   return (
  //     <Component
  //       idx={String(index)}
  //       key={index}
  //       toggler={navLink(name, icon)}
  //       visible={location.pathname.startsWith(to)}
  //       {...rest}
  //     >
  //       {item.items?.map((item, index) =>
  //         item.items ? navGroup(item, index) : navItem(item, index)
  //       )}
  //     </Component>
  //   );
  // };

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.name == "Logout" ? navLogout(item, index) : navItem(item, index)
        )}
    </React.Fragment>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
