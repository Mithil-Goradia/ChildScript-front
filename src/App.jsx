import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputPane from "./components/OutputPane";
import Navbar from "./components/Navbar";

function App() {
  const [code, setCode] = useState(`print("Hello, ChildScript!");`);
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("https://childscript-back.onrender.com/run-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      setOutput(data.output);
    } catch (error) {
      setOutput("Error connecting to server");
    }
  };

  return (
  <div className="relative min-h-screen font-sans">
    <div className="relative z-10 bg-gradient-to-br from-black via-blue-950 to-green-900 min-h-screen text-white backdrop-blur-sm">
      <Navbar onRun={handleRun} code={code} />

      <main className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-0 h-[calc(100vh-72px)] p-4">
        <div className="-p-2 md:p-4 bg-opacity-40 rounded-md backdrop-blur-md h-[50vh] md:h-auto">
          <CodeEditor code={code} setCode={setCode} />
        </div>

        <div className="p-2 md:p-4 flex flex-col bg-opacity-40 rounded-md backdrop-blur-md h-[50vh] md:h-auto">
          <OutputPane output={output} />
        </div>
      </main>

      {/* Floating Button for Mobile */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={handleRun}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-300 ease-in-out text-lg"
        >
          ▶
        </button>
      </div>
    </div>
  </div>
);


}


export default App;
