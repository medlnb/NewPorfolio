"use client";
import { useState } from "react";
import TypewriterDescription from "@components/TypewriterDescription";

function Left() {
  const [CodeValue, setCodeValue] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  function handleChange(event: any) {
    if (CodeValue.length > 4) event.target.value = "";
    setCodeValue(event.target.value);
  }

  if (CodeValue === "whois" && !showDescription) {
    setShowDescription(true);
  }

  return (
    <div className="flex-1 flex flex-col justify-between gap-8">
      <div>
        <h2 className="text-lg font-medium">Hello! I am</h2>
        <h1 className="lg:text-5xl text-4xl font-medium whitespace-nowrap">
          Lanabi Mohamed
        </h1>
        <h2 className="text-lg font-medium">full stack developer</h2>
      </div>
      <div>
        {showDescription && (
          <TypewriterDescription
            text="I'm a full stack developer with a university degree in Computer Science and 4 years of experience in coding."
            speed={50}
          />
        )}
      </div>
      <div>
        <h3 className="text-gray-500">
          {"//write the code below to continue..."}
        </h3>
        <div className="flex flex-row items-center gap-2 overflow-hidden">
          <h1 style={{ color: "#c9a6ee" }}>{">"}</h1>
          <input
            spellCheck={false}
            onChange={handleChange}
            value={CodeValue}
            className="code"
            placeholder="whois"
          />
        </div>
      </div>
    </div>
  );
}

export default Left;
