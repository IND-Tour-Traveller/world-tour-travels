import React from "react";
import TopDestination from "@/components/home/TopDestination";
import Marquee from "@/components/home/Marquee";
import styles from "@/styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <main className=" w-full bg-gray-100">
        <TopDestination />
        <Marquee styles={styles.textStroke3} />
        {/* Todo: write your code here with sections*/}
      </main>
    </>
  );
}
