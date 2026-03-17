import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Fade } from "@components/Animation/Fade";
import Subtitle from "@components/Subtitle";
import Card from "@components/Card";
import styles from "./index.module.css";

export const Route = createFileRoute("/playground/")({
  component: Playground,
});

function Playground() {
  useEffect(() => {
    document.title = "Playground";
  }, []);

  return (
    <Fade>
      <div className={styles.section}>
        <Subtitle text={"Playground"} />
        <div className={styles.list}>
          <Card
            href={`/playground/1`}
            title={"Gemini Nano"}
            createdAt={"2024/09/14"}
            tags={["Google Chrome"]}
          />
          <Card
            href={`/playground/2`}
            title={"Visual Viewport API"}
            createdAt={"2025/10/30"}
            tags={["Browser API"]}
          />
        </div>
      </div>
    </Fade>
  );
}
