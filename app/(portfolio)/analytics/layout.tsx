import { ClerkProvider } from "@clerk/nextjs";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
