import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import "../globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { VisitorTracker } from "@/components/analytics/VisitorTracker";
import { AppSidebar } from "@/components/app-sidebar";
import { BreathingBackground } from "@/components/cosmos/BreathingBackground";
import { CosmicNav } from "@/components/cosmos/CosmicNav";
import { ParticleField } from "@/components/cosmos/ParticleField";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import SidebarToggle from "@/components/SidebarToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://satabartosarkar.vercel.app"),
  title: "Satabarto Sarkar — Systems Engineer & Researcher",
  description:
    "Portfolio of Satabarto Sarkar. Backend architectures, AI pipelines, fault-tolerant systems, and peer-reviewed research.",
  authors: [
    { name: "Satabarto Sarkar", url: "https://satabartosarkar.vercel.app" },
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Satabarto Sarkar — Systems Engineer & Researcher",
    description:
      "Portfolio of Satabarto Sarkar. Backend architectures, AI pipelines, fault-tolerant systems, and peer-reviewed research.",
    url: "https://satabartosarkar.vercel.app",
    siteName: "Satabarto Sarkar",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B140F]`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Living World Layers */}
            <BreathingBackground />
            <ParticleField count={35} />

            {/* Navigation */}
            <CosmicNav />
            <VisitorTracker />

            {/* Content */}
            <SidebarProvider defaultOpen={false}>
              <SidebarInset className="">
                <main className="relative z-10 pt-16">{children}</main>
              </SidebarInset>

              <AppSidebar side="right" />
              <SidebarToggle />
            </SidebarProvider>

            {/* Sanity */}
            <SanityLive />
            {(await draftMode()).isEnabled && (
              <>
                <VisualEditing />
                <DisableDraftMode />
              </>
            )}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
