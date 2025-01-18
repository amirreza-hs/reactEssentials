import { useState } from "react";

// componets
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

// data
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [clickedTopic, setClickedTopic] = useState();
  const handleClick = (clickedButton) => {
    setClickedTopic(clickedButton);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => handleClick("components")}
              isClicked={clickedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => handleClick("jsx")}
              isClicked={clickedTopic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleClick("props")}
              isClicked={clickedTopic === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleClick("state")}
              isClicked={clickedTopic === "state"}
            >
              State
            </TabButton>
          </menu>
          {!clickedTopic && <p>Please select a topic.</p>}
          {clickedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[clickedTopic].title}</h3>
              <p>{EXAMPLES[clickedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[clickedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
