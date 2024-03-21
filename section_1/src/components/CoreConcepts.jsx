import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
export default function CoreConcepts() {
  return (
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
  );
}
