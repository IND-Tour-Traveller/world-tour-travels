import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <>
      <header className="bg-gray-800 text-gray-100 shadow-md min-h-12 flex py-2 items-center">
        <div className="w-full md:w-[90%] lg:w-[90%] mx-auto">
          <h1 className="">Header</h1>
          <Button className="bg-gray-500 shadow-sm hover:bg-blue-700 text-white py-2 px-4 rounded">click me</Button>
        </div>
      </header>
    </>
  );
}

export default Header;
