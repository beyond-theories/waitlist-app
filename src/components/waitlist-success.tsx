import successImage from "@/assets/success-image.png";
import linkedinIcon from "@/assets/linkedin.svg";
import xIcon from "@/assets/x.svg";
import instagramIcon from "@/assets/instagram.svg";

export const WaitListSuccess = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-[22px] lg:text-6xl font-bold leading-[1.42] lg:leading-[1.3] max-w-full lg:max-w-[1045px] mx-auto">
        You're in! 🎉 We'll keep you updated on our launch and early invites
      </h1>
      <img className="w-[387px] h-[387px] mx-auto" src={successImage} alt="" />
      <div className="flex items-center justify-between mt-auto w-full lg:w-[999px] mx-auto">
        <p className="text-foreground flex items-center gap-4 text-xs lg:text-lg">
          <span className="block h-[1px] w-[36px] lg:w-[88px] bg-foreground"></span>
          support@kollabo.com
        </p>
        <div className="flex items-center gap-4">
          <a href="#">
            <img className="h-3 w-3 lg:h-4 lg:w-4" src={linkedinIcon} alt="" />
          </a>
          <a href="#">
            <img className="h-3 w-3 lg:h-4 lg:w-4" src={xIcon} alt="" />
          </a>
          <a href="#">
            <img className="h-3 w-3 lg:h-4 lg:w-4" src={instagramIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
