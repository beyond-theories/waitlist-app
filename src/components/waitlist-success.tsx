import successImage from "@/assets/success-image.png";
// import instagram from "@/assets/instagram-black.svg";
// import linkedin from "@/assets/linkedin-black.svg";
import x from "@/assets/x-black.svg";

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
      <div className="flex items-center justify-between mt-auto w-full lg:w-[999px] mx-auto">
        <p className="text-foreground flex items-center gap-4 text-xs lg:text-lg">
          <span className="block h-[1px] w-[36px] lg:w-[88px] bg-foreground"></span>
          hello@usekollabo.com
        </p>
        <div className="flex items-center gap-4">
          {/* <a href="#">
            <img src={linkedin} />
          </a> */}
          <a
            href="https://x.com/usekollabo?t=8QVz2rjS9m5b57NI81swkw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={x} />
          </a>
          {/* <a href="#">
            <img src={instagram} />
          </a> */}
        </div>
      </div>
    </div>
  );
};
