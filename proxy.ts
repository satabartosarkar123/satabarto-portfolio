import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Only run Clerk middleware on owner-only analytics routes
    "/analytics(.*)",
    "/api/analytics/visits(.*)",
  ],
};
