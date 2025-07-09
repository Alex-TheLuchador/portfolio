import { useState, useRef, useEffect, type KeyboardEvent, type JSX } from "react";
import "./Terminal.css";

/* Static responses for simple commands */
const COMMANDS: Record<string, string> = {
  help: "Available commands:\n• about\n• clear\n• contact\n• projects\n• skills\n• wins",
  about: "Alex Hernandez is a legendary systems engineer building solutions with Azure, AWS, Python, SQL, Databricks, and more.\nCurrent role: Senior Systems Engineer @ AlixPartners",
  projects: "• Bubble Portfolio\n• Retro Terminal\n• Data Dashboards",
  skills: "Azure | AWS | Python | SQL | Databricks",
  wins: "Certifications:\n• Microsoft Azure AI Engineer Associate (AI-102)\n• Microsoft Azure Fundamentals (AZ-900)",
  clear: ""
};

/* Each line is plain-text or JSX (useful for links)  */
type Line = string | JSX.Element;

export default function Terminal(): JSX.Element {
  const [lines, setLines] = useState<Line[]>([
    <>Welcome to A Legendary Engineer's eXperience (<span className="highlight">A.L.E.X</span>).</>,
    <>This is a creation of <span className="highlight">Alex Hernandez</span> - <span className="highlight">Data and AI Systems Engineer</span></>,
    <>To see list of commands, type: <span className="highlight">help</span></>
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);

  /* Append a new line to the output */
  const append = (item: Line) => setLines(prev => [...prev, item]);

  /* Execute a user command */
  const run = (cmd: string) => {
    if (!cmd) return;
    append(<span className="user-input-line">&gt; {cmd}</span>);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "contact") {
      append(
        <>
          Email:{" "}
          <a href="mailto:alexcp.hernandez@gmail.com">
            alexcp.hernandez@gmail.com
          </a>
          <br />
          GitHub:{" "}
          <a
            href="https://github.com/Alex-TheLuchador"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Alex-TheLuchador
          </a>
          <br />
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/itsalexh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/itsalexh
          </a>
        </>
      );
      return;
    }

    append(COMMANDS[cmd] ?? 'Command not found. Type "help".');
  };

  /* Submit on Enter */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = (e.target as HTMLInputElement).value.trim().toLowerCase();
      run(val);
      (e.target as HTMLInputElement).value = "";
    }
  };

  /* Auto-scroll when output grows */
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  /* Focus input on mount */
  useEffect(() => inputRef.current?.focus(), []);

  return (
    <div className="terminal-wrapper">
      <div className="terminal">
        <div className="output" ref={outputRef}>
          {lines.map((ln, i) => (
            <div key={i}>{ln}</div>
          ))}
        </div>
        <div className="prompt-line">
          <span>&gt;</span>
          <input
            className="prompt-input"
            ref={inputRef}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
