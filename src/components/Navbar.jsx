import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { Menu, X } from "lucide-react";

const Navbar = ({ onRun, code }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadAsPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(code || "", 180);
    doc.setFont("Courier", "normal");
    doc.setFontSize(12);
    doc.text(lines, 10, 10);
    doc.save("childscript_code.pdf");
  };

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-[#1e1e1e] border-b border-gray-700 shadow-md relative">
      
      {/* Mobile menu icon */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Desktop Left: Docs + PDF */}
      <div className="hidden lg:flex items-center gap-4">
        <a
          href="/ChildScript_Documentation.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-1.5 rounded-md text-sm transition"
        >
          Docs
        </a>

        <button
          onClick={downloadAsPDF}
          className="border border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-1.5 rounded-md text-sm transition"
        >
          PDF
        </button>
      </div>

      {/* Centered Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src="./logo.png" className="h-[40px] object-contain" alt="logo" />
      </div>

      {/* Desktop Right: Run Button */}
      <div className="hidden lg:flex">
        <button
          onClick={onRun}
          className="border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white px-5 py-1.5 rounded-md text-sm transition"
        >
          ▶️ Run Code
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-[60px] left-4 z-50 flex flex-col gap-3 bg-[#2a2a2a] p-4 rounded-xl lg:hidden shadow-lg">
          <img src="./logo.png" className="h-[40px] object-contain mb-2" alt="logo" />
          <a
            href="/ChildScript_Documentation.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-1.5 rounded-md text-sm transition"
          >
            Docs
          </a>
          <button
            onClick={downloadAsPDF}
            className="border border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-1.5 rounded-md text-sm transition"
          >
            PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
