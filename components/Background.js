"use client";

import React, { useRef, useEffect } from "react";

export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const layerCount = 3; 
    const blobsPerLayer = 8;
    const layers = [];

    const baseColors = [
      { h: 0, s: 15, l: 10 },
      { h: 315, s: 20, l: 25 },
      { h: 310, s: 30, l: 70 },
    ];

    const hslToString = (h, s, l, a) => `hsla(${h}, ${s}%, ${l}%, ${a})`;

    for (let l = 0; l < layerCount; l++) {
      const blobs = [];
      for (let i = 0; i < blobsPerLayer; i++) {
        const base = baseColors[Math.floor(Math.random() * baseColors.length)];
        const hueShift = (Math.random() - 0.5) * 20;
        const satShift = (Math.random() - 0.5) * 15;
        const lightShift = (Math.random() - 0.5) * 20;
        blobs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 150 + Math.random() * 400,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: hslToString(
            base.h + hueShift,
            base.s + satShift,
            base.l + lightShift,
            0.25
          ),
        });
      }
      layers.push(blobs);
    }

    let animationId;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Fill background
      ctx.fillStyle = "#191212";
      ctx.fillRect(0, 0, width, height);

      // Draw blobs
      layers.forEach((blobs) => {
        blobs.forEach((blob) => {
          blob.x += blob.vx;
          blob.y += blob.vy;

          blob.vx += (Math.random() - 0.5) * 0.02;
          blob.vy += (Math.random() - 0.5) * 0.02;

          const maxSpeed = 0.8;
          blob.vx = Math.max(Math.min(blob.vx, maxSpeed), -maxSpeed);
          blob.vy = Math.max(Math.min(blob.vy, maxSpeed), -maxSpeed);

          if (blob.x - blob.radius > width) blob.x = -blob.radius;
          if (blob.x + blob.radius < 0) blob.x = width + blob.radius;
          if (blob.y - blob.radius > height) blob.y = -blob.radius;
          if (blob.y + blob.radius < 0) blob.y = height + blob.radius;

          const gradient = ctx.createRadialGradient(
            blob.x,
            blob.y,
            0,
            blob.x,
            blob.y,
            blob.radius
          );
          gradient.addColorStop(0, blob.color);
          gradient.addColorStop(1, "transparent");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full"
      style={{
        display: "block",
        filter: "blur(80px)", // blur applied via CSS
      }}
    />
  );
}
