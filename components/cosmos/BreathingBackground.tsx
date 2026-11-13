"use client";

export function BreathingBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#091118]"
      aria-hidden="true"
    >
      {/* Rich radial accent glows — vibrant without being noisy */}
      <div
        className="absolute -top-40 right-[-10%] w-[680px] h-[680px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(100,255,218,0.22) 0%, rgba(16,185,129,0.08) 45%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-[35%] -left-40 w-[620px] h-[620px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(59,130,246,0.08) 45%, transparent 75%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[20%] w-[520px] h-[520px] rounded-full opacity-20 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Crisp subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
