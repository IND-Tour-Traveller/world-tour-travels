import React from "react";
import styles from "../styles/HomePage.module.css";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <>
      {/* Top Destination */}
      <section className="w-full min-h-14 bg-teal-50">
        <Container width={90}>
          <h3 className="text-slate-700 text-center text-2xl py-2">Top Destinations</h3>
        </Container>
      </section>
    </>
  );
}


