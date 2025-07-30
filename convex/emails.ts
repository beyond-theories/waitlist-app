"use node";
import { components } from "./_generated/api";
import { Resend } from "@convex-dev/resend";
import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { render, pretty } from "@react-email/render";
import { WaitListEmail } from "./emails/waitlist";

export const resend: Resend = new Resend(components.resend, {
  testMode: false,
});

export const sendWaitlistEmail = internalAction({
  args: { email: v.string() },
  async handler(ctx, args) {
    const { email } = args;
    const html = await pretty(
      await render(WaitListEmail({ firstName: "there" })),
    );
    await resend.sendEmail(ctx, {
      from: "Kollabo <contact@usekollabo.com>",
      to: email,
      subject: "Welcome to Kollabo",
      html,
    });
  },
});
