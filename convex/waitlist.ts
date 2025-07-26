import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addToWaitList = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("waitlist", args);
  },
});
