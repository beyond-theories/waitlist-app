import successImage from "@/assets/success-image.png";

import { Socials } from "./socials";

export const WaitListSuccess = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-[1.375rem] lg:text-6xl font-bold leading-[1.42] lg:leading-[1.3] max-w-full lg:max-w-[65.3rem] mx-auto">
        You're in! 🎉 We'll keep you updated on our launch and early invites
      </h1>
      <img
        className="w-[24.2rem] h-[24.2rem] mx-auto"
        src={successImage}
        alt=""
      />
      <Socials />
    </div>
  );
};
