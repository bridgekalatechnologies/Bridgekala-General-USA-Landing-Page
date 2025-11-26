import React from "react";
import { ChevronsRight } from "lucide-react";

export default function CtaBtn({ text, link, onClick }) {
  return (
    <button onClick={onClick} className="bg-[#9000FF] flex items-center px-5 font-bold text-white rounded-3xl text-sm ">
      {text} <ChevronsRight className="size-10" strokeWidth={2.75} />
    </button>
  );
}
