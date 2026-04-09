"use client";

import { useEffect, useRef } from "react";

export function BreathingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.002;
      const w = canvas.width;
      const h = canvas.height;

      // Background
      ctx.fillStyle = "#0B140F";
      ctx.fillRect(0, 0, w, h);

      // Breathing nebula gradient
      const breathe = Math.sin(time) * 0.15 + 0.85;
      const grad = ctx.createRadialGradient(
        w * 0.7, h * 0.3, 0,
        w * 0.5, h * 0.5, w * 0.8
      );
      grad.addColorStop(0, `rgba(61, 26, 120, ${0.12 * breathe})`);
      grad.addColorStop(0.4, `rgba(15, 31, 23, ${0.08 * breathe})`);
      grad.addColorStop(1, "rgba(11, 20, 15, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Secondary pulse
      const pulse = Math.sin(time * 1.3 + 1) * 0.1 + 0.9;
      const grad2 = ctx.createRadialGradient(
        w * 0.2, h * 0.7, 0,
        w * 0.3, h * 0.6, w * 0.5
      );
      grad2.addColorStop(0, `rgba(100, 255, 218, ${0.03 * pulse})`);
      grad2.addColorStop(1, "rgba(11, 20, 15, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
