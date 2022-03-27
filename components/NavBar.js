import Link from "next/link";

import React from "react";
import { ActiveMenuItem } from "./ActiveMenuItem";
import styles from "./navbar.module.css";
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];
export const NavBar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((item) => (
        <ActiveMenuItem key={item.href} {...item} />
      ))}
    </nav>
  );
};
