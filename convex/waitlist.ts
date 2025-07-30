import { internal } from "./_generated/api";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addToWaitList = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    // Check for duplicate email
    const existing = await ctx.db
      .query("waitlist")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();
    if (existing) {
      return { success: false, message: "Email already on waitlist" };
    }

    await ctx.db.insert("waitlist", args);
    // Schedule the action to send the email
    await ctx.scheduler.runAfter(0, internal.emails.sendWaitlistEmail, {
      email: args.email,
    });
    return { success: true, message: "Added to waitlist successfully" };
  },
});

export const getWaitListCount = query({
  handler: async (ctx) => {
    const count = await ctx.db.query("waitlist").collect();
    return count.length;
  },
});
