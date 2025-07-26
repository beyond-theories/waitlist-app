import { WaitListForm } from "./waitlist-form";

import creatorsImage from "@/assets/creators.png";
import linkedinIcon from "@/assets/linkedin.svg";
import xIcon from "@/assets/x.svg";
import instagramIcon from "@/assets/instagram.svg";

type WaitListHomeProps = {
  onSuccess: () => void;
};

export const WaitListHome = ({ onSuccess }: WaitListHomeProps) => {
  return (
    <div className="flex flex-col gap-12 lg:gap-[71px]">
      <div className="flex flex-col gap-3 lg:gap-5">
        <h1 className="text-center text-[22px] lg:text-6xl font-bold leading-[1.42] lg:leading-[1.3] max-w-full lg:max-w-[1045px] mx-auto">
          Collaboration That Goes Beyond Talk This is Where Work Gets Done.
        </h1>
        <p className="text-muted text-base lg:text-lg font-medium leading-[1.4] max-w-full lg:max-w-[670px] text-center mx-auto">
          A platform where creators and teams turn real ideas into real
          products. Join the waitlist for early access and exclusive invites.
        </p>
      </div>
      <div className="flex-auto min-h-[350px] bg-black max-w-full rounded-xl border-8 lg:border-[1rem] border-[#8D97F9] px-4 pb-4 lg:px-0 lg:pb-0 flex flex-col">
        <div className="mx-auto w-full lg:w-[508px] lg:max-w-[508px] flex flex-col gap-7">
          <WaitListForm onSuccess={onSuccess} />
          <div className="flex items-center gap-2 mx-auto">
            <img
              className="max-w-[90px] lg:max-w-[130px]"
              src={creatorsImage}
              alt=""
            />
            <p className="text-background text-sm lg:text-lg font-medium">
              1,221 + Creators Have Already Joined
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
              <img
                className="h-3 w-3 lg:h-4 lg:w-4"
                src={linkedinIcon}
                alt=""
              />
            </a>
            <a href="#">
              <img className="h-3 w-3 lg:h-4 lg:w-4" src={xIcon} alt="" />
            </a>
            <a href="#">
              <img
                className="h-3 w-3 lg:h-4 lg:w-4"
                src={instagramIcon}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
