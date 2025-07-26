import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

type WaitListFormProps = {
  onSuccess: () => void;
};

export const WaitListForm = ({ onSuccess }: WaitListFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const addWaitList = useMutation(api.waitlist.addToWaitList);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      event.stopPropagation();
      setIsLoading(true);

      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;

      await addWaitList({ email });
      setIsLoading(false);
      onSuccess();
    } catch (error) {
      setIsLoading(false);
      console.log("__ERROR__", error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
      className="flex items-center bg-background rounded-3xl p-2 gap-2 mt-[46px]"
    >
      <input
        className="flex-1 h-[28px] outline-0 border-0 pl-6 text-sm lg:text-base"
        placeholder="Enter your email address"
        type="email"
        name="email"
        id="email"
      />
      <button
        disabled={isLoading}
        className="inline-flex h-[37px] lg:h-[49px] w-[110px] lg:w-[142px] items-center justify-center bg-primary text-primary-foreground rounded-[18px] p-[10px] text-[13px] font-semibold cursor-pointer"
      >
        {isLoading ? "Joining..." : "Join Waitlist"}
      </button>
    </form>
  );
};
