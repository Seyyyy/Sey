import { createRootRoute, Outlet } from "@tanstack/react-router";
import React from "react";
import Appbar from "@components/Appbar";
import Footer from "@components/Footer";
import { Fade } from "@components/Animation/Fade";
import styles from "./root.module.css";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Fade>
        <div className={styles.root}>
          <Appbar />
          <Outlet />
          <Footer />
        </div>
      </Fade>
    </React.Fragment>
  ),
});
