import React, { use } from "react";

import DigitalTool from "../digitalTool/DigitalTool";

const PreDigitalTools = ({ getPromise, carts, setCarts }) => {
  const tools = use(getPromise);

  return (
    <div className="container mx-auto px-30 mb-30">
      <div className="grid grid-cols-3 gap-3 mt-3">
        {tools.map((tool, ind) => (
          <DigitalTool key={ind} tool={tool} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default PreDigitalTools;
