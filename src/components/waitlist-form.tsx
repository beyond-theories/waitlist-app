import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form, FormItem, FormField, FormControl, FormMessage } from "./form";

type WaitListFormProps = {
  onSuccess: () => void;
};

const schema = z.object({
  email: z.email({ error: "Invalid email address" }),
});

type Schema = z.infer<typeof schema>;

export const WaitListForm = ({ onSuccess }: WaitListFormProps) => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const isSubmitting = form.formState.isSubmitting;

  const addWaitList = useMutation(api.waitlist.addToWaitList);

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await addWaitList(data);
      onSuccess();
    } catch (error) {
      console.log("__ERROR__", error);
      form.setError("email", {
        type: "validate",
        message: "Something went wrong. Please try again",
      });
    }
  });

  return (
    <Form {...form}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void onSubmit(event);
        }}
        className="flex items-center bg-background rounded-3xl p-2 gap-2 mt-[46px]"
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <input
                  className="w-full h-[28px] outline-0 border-0 pl-6 text-sm lg:text-base"
                  placeholder="Enter your email address"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <button
          disabled={isSubmitting}
          className="inline-flex h-[37px] lg:h-[49px] w-[110px] lg:w-[142px] items-center justify-center bg-primary text-primary-foreground rounded-[18px] p-[10px] text-[13px] font-semibold cursor-pointer disabled:bg-primary/90"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </button>
      </form>
    </Form>
  );
};
