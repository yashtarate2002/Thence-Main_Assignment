import react, { useState } from "react";



export default function Accordion({ question, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="py-2 border-b border-gray-300 space-y-2">
      <button
        onClick={() => setAccordionOpen((prev) => !prev)}
        className="flex justify-between w-full text-[#1C1C1C]"
      >
        <span style={{fontFamily:'Manrope',color:'#1C1C1C',fontWeight:'600',fontSize:'18px'}} className="text-xl font-medium">{question}</span>
        <span className="font-semibold text-2xl">
          {accordionOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div style={{fontFamily:'Manrope',color:'#617275',fontWeight:'400',fontSize:'15px'}}   className="overflow-hidden ">{answer}</div>
      </div>
    </div>
  );
}
