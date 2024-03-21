import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  return (
    <div className="min-h-screen w-[90%] max-w-3xl mx-auto">
      <Header />
      <main className="max-h-full w-[100%] max-w-4xl mx-auto text-center ">
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
