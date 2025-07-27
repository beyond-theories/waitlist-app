import logo from "@/assets/logo.svg";
import background from "@/assets/background.png";

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
      <img className="absolute left-0 bottom-0 max-w-full -z-10" src={background} alt="" />
    </div>
  );
};
