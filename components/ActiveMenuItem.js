import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import style from "./navbar.module.css";

export const ActiveMenuItem = ({ href, text }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a className={pathname === href ? style["active-link"] : ""}>{text}</a>
    </Link>
  );
};
