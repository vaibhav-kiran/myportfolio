"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SkillsGlobe = () => {
    const mountRef = useRef(null);
    const isDraggingRef = useRef(false); // Use ref for dragging state
    const prevXRef = useRef(0); // Use ref for previous X position

    const icons = [
        "/icons/python.png",
        "/icons/opencv.png",
        "/icons/tensorflow.png",
        "/icons/pytorch.png",
        "/icons/streamlit.png",
        "/icons/solidworks.png",
        "/icons/fusion.png",
        "/icons/autocad.png",
        "/icons/arduino.png",
        "/icons/labview.png",
        "/icons/3dslicer.png",
        "/icons/matlab.png",
        "/icons/github.png",
        "/icons/office.png"
    ];

    useEffect(() => {
        if (!mountRef.current) return;

        let width = mountRef.current.clientWidth;
        let height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.z = 55;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        let group = new THREE.Group();
        scene.add(group);

        const spherePoints = (count, r) => {
            const pts = [];
            for (let i = 1; i <= count; i++) {
                const phi = Math.acos(-1 + (2 * i) / count);
                const theta = Math.sqrt(count * Math.PI) * phi;
                pts.push({
                    x: r * Math.cos(theta) * Math.sin(phi),
                    y: r * Math.sin(theta) * Math.sin(phi),
                    z: r * Math.cos(phi)
                });
            }
            return pts;
        };

        const points = spherePoints(icons.length, 22);
        const loader = new THREE.TextureLoader();
        const glowTexture = loader.load("https://i.ibb.co/fDrdrm6/glow.png");

        icons.forEach((iconFile, i) => {
            const map = loader.load(iconFile);
            const glowMat = new THREE.SpriteMaterial({
                map: glowTexture,
                color: 0x44aaff,
                transparent: true,
                opacity: 0.7
            });
            const glowSprite = new THREE.Sprite(glowMat);
            glowSprite.scale.set(10, 10, 1);
            glowSprite.position.set(points[i].x, points[i].y, points[i].z);
            group.add(glowSprite);

            const iconMat = new THREE.SpriteMaterial({ map, transparent: true });
            const iconMesh = new THREE.Sprite(iconMat);
            iconMesh.scale.set(6.5, 6.5, 1);
            iconMesh.position.set(points[i].x, points[i].y, points[i].z);
            group.add(iconMesh);
        });

        let animationFrameId; // To store the animation frame ID

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (!isDraggingRef.current) group.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            if (mountRef.current) {
                width = mountRef.current.clientWidth;
                height = mountRef.current.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        };
        window.addEventListener("resize", handleResize);

        const handleMouseDown = (e) => {
            isDraggingRef.current = true;
            prevXRef.current = e.clientX;
        };
        const handleMouseUp = () => {
            isDraggingRef.current = false;
        };
        const handleMouseMove = (e) => {
            if (isDraggingRef.current) {
                let deltaX = e.clientX - prevXRef.current;
                prevXRef.current = e.clientX;
                group.rotation.y += deltaX * 0.005;
            }
        };

        mountRef.current.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
            if (mountRef.current) {
                mountRef.current.removeEventListener("mousedown", handleMouseDown);
                // Ensure to remove the canvas element itself
                if (renderer.domElement && mountRef.current.contains(renderer.domElement)) {
                    mountRef.current.removeChild(renderer.domElement);
                }
            }
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId); // Cancel animation frame
            renderer.dispose();
            group.traverse((object) => { // Dispose of textures and materials
                if (object.isMesh) {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                } else if (object.isSprite) { // For sprites as well
                    if (object.material) object.material.dispose();
                }
            });
            scene.clear();
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
        <div
            ref={mountRef}
            style={{ width: '100%', height: '100%', minHeight: '400px', cursor: isDraggingRef.current ? 'grabbing' : 'grab' }}
        />
    );
};

export default SkillsGlobe;