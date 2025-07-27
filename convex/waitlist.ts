import { mutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

export const addToWaitList = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("waitlist", args);
    internal.emails.sendTestEmail;
  },
});
