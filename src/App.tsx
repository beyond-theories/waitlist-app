import logo from "@/assets/logo.svg";
import bgPattern01 from "@/assets/bg-pattern-01.png";
import bgPattern02 from "@/assets/bg-pattern-02.png";

import { useState } from "react";

import { WaitListHome } from "./components/waitlist-home";
import { WaitListSuccess } from "./components/waitlist-success";

export const App = () => {
  const [joined, setJoined] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="container">
        <img
          className="max-w-[121px] mx-auto my-12"
          src={logo}
          alt="kollabo logo"
        />
        {joined ? (
          <WaitListSuccess />
        ) : (
          <WaitListHome onSuccess={() => setJoined(true)} />
        )}
      </div>
      <img
        className="absolute left-0 bottom-0 w-[450px] -z-10"
        src={bgPattern01}
        alt=""
      />
      <img
        className="absolute right-0 bottom-0 w-[700px] -z-10"
        src={bgPattern02}
        alt=""
      />
    </div>
  );
};
