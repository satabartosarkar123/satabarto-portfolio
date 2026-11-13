"use client";

export function BreathingBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#080B12]"
      aria-hidden="true"
    >
      {/* Subtle dark-mood slate & indigo depth — no green, no neon */}
      <div
        className="absolute -top-48 right-[-8%] w-[720px] h-[720px] rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(30,58,138,0.12) 48%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-[40%] -left-44 w-[640px] h-[640px] rounded-full opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.26) 0%, rgba(49,46,129,0.1) 48%, transparent 75%)",
        }}
      />

      {/* Crisp fine architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.45) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
