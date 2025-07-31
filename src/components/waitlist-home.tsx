import { WaitListForm } from "./waitlist-form";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

import creatorsImage from "@/assets/creators.png";
import instagram from "@/assets/instagram.svg";
import linkedin from "@/assets/linkedin.svg";
import x from "@/assets/x.svg";

type WaitListHomeProps = {
  onSuccess: () => void;
};

export const WaitListHome = ({ onSuccess }: WaitListHomeProps) => {
  const waitlistCount = useQuery(api.waitlist.getWaitListCount);
  return (
    <div className="flex flex-col gap-12 lg:gap-[71px]">
      <div className="flex flex-col gap-3 lg:gap-5">
        <h1 className="text-center text-[1.375rem] lg:text-6xl font-bold leading-[1.42] lg:leading-[1.3] max-w-full lg:max-w-[65.3rem] mx-auto">
          Collaboration That Goes Beyond Talk This is Where Work Gets Done.
        </h1>
        <p className="text-muted text-base lg:text-lg font-medium leading-[1.4] max-w-full lg:max-w-[41.875rem] text-center mx-auto">
          A platform where creators and teams turn real ideas into real
          products. Join the waitlist for early access and exclusive invites.
        </p>
      </div>
      <div className="flex-auto min-h-[21.875rem] bg-black max-w-full rounded-xl border-8 lg:border-[1rem] border-[#8D97F9] px-4 pb-4 lg:px-0 lg:pb-0 flex flex-col">
        <div className="mx-auto w-full lg:w-[31.75rem] lg:max-w-[31.75rem] flex flex-col gap-7">
          <WaitListForm onSuccess={onSuccess} />
          <div className="flex items-center gap-2 mx-auto">
            <img
              className="max-w-[5.625rem] lg:max-w-[8.125rem]"
              src={creatorsImage}
              alt=""
            />
            <p className="text-background text-sm lg:text-lg font-medium">
              {waitlistCount ? waitlistCount.toLocaleString() : 0} + Creators
              Have Already Joined
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto w-full lg:w-[999px] mx-auto">
          <p className="text-[#ebebeb]/50 flex items-center gap-4 text-xs lg:text-lg">
            <span className="block h-[1px] w-[36px] lg:w-[88px] bg-[#ebebeb]/50"></span>
            support@kollabo.com
          </p>
          <div className="flex items-center gap-4">
            <a href="#">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#">
              <img src={x} alt="X" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
