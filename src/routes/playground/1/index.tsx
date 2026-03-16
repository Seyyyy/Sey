import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Fade } from "@components/Animation/Fade";
import Subtitle from "@components/Subtitle";
import styles from "./index.module.css";

export const Route = createFileRoute("/playground/1/")({
  component: Playground1,
});

const PlaygroundContent = () => {
  const [text, setText] = React.useState<string>("");
  const [result, setResult] = React.useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onClick = async () => {
    // @ts-ignore
    if (!window.ai) {
      return;
    }
    // @ts-ignore
    const session = await window.ai.assistant.create();
    const res = await session.promptStreaming(text);
    stream(res);
  };

  const stream = async (readableStream: ReadableStream) => {
    const reader = readableStream.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      setResult(value);
    }
  };

  return (
    <div className={styles.playground_root}>
      <div className={styles.playground_input}>
        <textarea
          className={styles.playground_input_textarea}
          value={text}
          onChange={onChange}
          rows={3}
          cols={50}
        />
        <button onClick={onClick}>submit</button>
      </div>
      <div className={styles.playground_output}>
        <p className={styles.playground_output_paragraph}>{result}</p>
      </div>
    </div>
  );
};

function Playground1() {
  useEffect(() => {
    document.title = "Gemini Nano";
  }, []);

  return (
    <Fade>
      <div className={styles.section}>
        <Subtitle text={"Gemini Nano"} />
        <div>
          <p>動作環境: Google Chrome Version 130.0.6710.0 (Official Build) dev (x86_64)</p>
        </div>
        <div>
          <PlaygroundContent />
        </div>
      </div>
    </Fade>
  );
}
