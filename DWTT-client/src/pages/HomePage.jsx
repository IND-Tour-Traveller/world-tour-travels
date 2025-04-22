import React from "react";
import Container from "@/components/ui/Container";
import SkewText from "@/components/ui/SkewText";

export default function HomePage() {
  return (
    <>
      <section className="w-full min-h-[50vh] bg-teal-50 1py-4 bg-[url('/assets/images/bg_circle_bee.svg')] bg-repeat-space lg:bg-[length:40%] md:bg-cover">
        <Container width={90}>
          {/* Top Destination */}
          <div className="flex flex-col items-center justify-center pt-6">
            <h3 className="text-slate-700 text-2xl ">
              Top
              <SkewText text="Destination" bgStyle="before:bg-teal-500"/>
            </h3>
          </div>
          {/* Todo: write your code here  */}


        </Container>
      </section>
    </>
  );
}
