import React from "react";
import styles from "./Link.module.css";
import { Link } from "@tanstack/react-router";

type attribute = {
  label: string;
  href: string;
};

const StyledLink: React.FC<attribute> = ({ label, href }) => {
  return (
    <Link to={href}>
      <button className={styles.link}>{label}</button>
    </Link>
  );
};

export default StyledLink;
