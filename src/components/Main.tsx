"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ChooseCard from "./ChooseCard";

const Main = () => {
  const [nextStep, setnextStep] = useState(false);

  return (
    <section>
      {!nextStep && (
        <div>
          <Button onClick={() => setnextStep(true)}>Get Started</Button>
        </div>
      )}
      {
        nextStep && (
          <div>
            <ChooseCard />
          </div>
        )
      }
    </section>
  );
};

export default Main;
