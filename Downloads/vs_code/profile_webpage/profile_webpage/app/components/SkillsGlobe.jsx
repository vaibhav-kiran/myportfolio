"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import React from "react";


// Child component that belongs inside Canvas
const IconsSphere = ({ skills, isDark }) => {
  const groupRef = useRef();

  const positions = useMemo(() => {
    if (!skills || skills.length === 0) return [];
    return skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      return [
        2 * Math.cos(theta) * Math.sin(phi),
        2 * Math.sin(theta) * Math.sin(phi),
        2 * Math.cos(phi),
      ];
    });
  }, [skills]);


  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.25;
    }
  });

  if (!positions || positions.length === 0) {
    return null;
  }

  return (
    <group ref={groupRef}>
      {positions.map((pos, idx) => {
        return (
          <Html
            key={idx}
            position={pos}
            center
            sprite
            transform
            style={{
              pointerEvents: "auto",
            }}
          >
            <div
              className="skill-badge"
              style={{
                padding: "5px 10px",
                                background: isDark
                                  ? "#111111"
                                  : "#ffffff",                borderRadius: "10px",
                color: isDark ? "#ffffff" : "#0f172a",
                fontSize: "7px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                border: isDark 
                  ? "1px solid #404040" 
                  : "1px solid #e0e0e0",
                boxShadow: isDark 
                  ? "0 2px 8px rgba(0, 0, 0, 0.3)" 
                  : "0 2px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.15) translateZ(0)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 4px 12px rgba(0, 0, 0, 0.4)"
                  : "0 3px 10px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.borderColor = isDark
                  ? "#555555"
                  : "#c0c0c0";
                e.currentTarget.style.background = isDark
                  ? "#333333"
                  : "#fafafa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateZ(0)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 2px 8px rgba(0, 0, 0, 0.3)"
                  : "0 2px 6px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = isDark
                  ? "#404040"
                  : "#e0e0e0";
                e.currentTarget.style.background = isDark
                  ? "#2a2a2a"
                  : "#ffffff";
              }}
            >
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  letterSpacing: "0.3px",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility",
                }}
              >
                {skills[idx]}
              </span>
            </div>
          </Html>
        );
      })}
    </group>
  );
};

// Parent component (UI container)
export default function SkillsGlobe({ skills = [], isDark = true }) {
  const bgMatte = isDark
    ? "#0a0a0a"
    : "#ffffff";



  if (!skills || skills.length === 0) {
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          background: bgMatte,
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isDark ? '#fff' : '#000',
        }}
      >
        No skills to display
      </div>
    );
  }

  return (
    <div 
      className="skill-container"
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true
        }}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      >
        <ambientLight intensity={1.7} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <IconsSphere skills={skills} isDark={isDark} />
        <OrbitControls enableZoom={false} rotateSpeed={0.5} />
      </Canvas>

      <style jsx>{`
        .skill-container {
          width: 100%;
          height: 100%;
          background: ${bgMatte};
          border-radius: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden !important;
          position: relative;
          contain: layout style paint;
        }
        
        .skill-badge {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
