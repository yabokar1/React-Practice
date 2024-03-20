import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  console.log("App component executing");

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div className="p-4 rounded-md bg-[#2f1d43] shadow-sm">
        <h3 className="m-0">{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code className="text-base">{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-[90%] max-w-3xl mx-auto">
      <Header />
      <main className="max-h-full w-[100%] max-w-4xl mx-auto text-center ">
        <section className="p-12 rounded-md bg-[#140524] shadow-md">
          <h2 className="text-center font-roboto-condensed text-[#a18aba] text-2xl font-bold my-0 ml-6 mb-8">
            Core Concepts
          </h2>
          <ul className="list-none p-0 m-0 flex flex-row gap-8 justify-center ">
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section className="my-12 mx-auto">
          <h2 className="text-left font-roboto-condensed text-[#a18aba] text-2xl font-bold my-0 ml-6 mb-8">
            Examples
          </h2>
          <menu className=" flex flex-row my-4 gap-2 list-none ">
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
