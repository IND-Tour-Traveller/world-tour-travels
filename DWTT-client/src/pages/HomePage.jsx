import React from "react";
import PButton from "../components/ui/PButton";

function HomePage() {
  return (
    <>
      <div className="text-blue-500 text-3xl">
        DWTT - Frontend 2K25
        <PButton color="text-dark-500" size="lg" variant="outline">
          Click Me
        </PButton>
      </div>
    </>
  );
}

export default HomePage;
