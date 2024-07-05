import React from "react";

const TransparentList = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ul className="bg-white bg-opacity-50 text-black p-4 rounded-lg shadow-lg">
        <li className="p-2">Item 1</li>
        <li className="p-2">Item 2</li>
        <li className="p-2">Item 3</li>
        <li className="p-2">Item 4</li>
        <li className="p-2">Item 5</li>
      </ul>
    </div>
  );
};

export default TransparentList;