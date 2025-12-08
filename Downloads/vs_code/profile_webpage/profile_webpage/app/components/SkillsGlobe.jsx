"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three'; // Import Three.js

const SkillsGlobe = () => {
    const mountRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [prevX, setPrevX] = useState(0);

    const icons = [
        "/icons/python.png", // Paths will be relative to public folder
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
        let width = mountRef.current.clientWidth;
        let height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.z = 55;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha:true for transparent background
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        let group = new THREE.Group();
        scene.add(group);

        // Function to generate sphere positions
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

            // GLOW behind icon
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

            // ICON
            const iconMat = new THREE.SpriteMaterial({ map, transparent: true });
            const iconMesh = new THREE.Sprite(iconMat);
            iconMesh.scale.set(6.5, 6.5, 1);
            iconMesh.position.set(points[i].x, points[i].y, points[i].z);
            group.add(iconMesh);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            if (!isDragging) group.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            width = mountRef.current.clientWidth;
            height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", handleResize);

        const handleMouseDown = (e) => {
            setIsDragging(true);
            setPrevX(e.clientX);
        };
        const handleMouseUp = () => {
            setIsDragging(false);
        };
        const handleMouseMove = (e) => {
            if (isDragging) {
                let deltaX = e.clientX - prevX;
                setPrevX(e.clientX);
                group.rotation.y += deltaX * 0.005;
            }
        };

        mountRef.current.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp); // Use window to catch release outside canvas
        window.addEventListener("mousemove", handleMouseMove); // Use window to catch movement outside canvas

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            if (mountRef.current) {
                mountRef.current.removeEventListener("mousedown", handleMouseDown);
            }
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            renderer.dispose();
            group.clear();
            scene.clear();
            // Free textures and materials if they were explicitly created
        };
    }, [isDragging, prevX]); // isDragging and prevX are state, not props/dependencies directly affecting setup

    return (
        <div
            ref={mountRef}
            style={{ width: '100%', height: '100%', minHeight: '400px', cursor: isDragging ? 'grabbing' : 'grab' }} // Added minHeight
        />
    );
};

export default SkillsGlobe;
