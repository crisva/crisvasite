'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function GlobeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<any>(null);

    const initGlobe = () => {
      if (!containerRef.current || !window.THREE) return;
      if (containerRef.current.querySelector('canvas')) return;

      const THREE = window.THREE;
      const container = containerRef.current;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      const W = container.clientWidth;
      const H = container.clientHeight;
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 1000);
      camera.position.set(0, -1.2, 5.5);
      camera.lookAt(0, 0.6, 0);

      const bgGeo = new THREE.PlaneGeometry(100, 100);
      const bgMat = new THREE.MeshBasicMaterial({
        color: 0x0c0c0c, // Matching --bg
        side: THREE.FrontSide,
        depthWrite: false
      });
      const bgMesh = new THREE.Mesh(bgGeo, bgMat);
      bgMesh.position.z = -20;
      scene.add(bgMesh);

    const GLOBE_RADIUS = 3.2;
    const TILE_COUNT = 1800;
    const tileGroup = new THREE.Group();
    scene.add(tileGroup);

    const tiles: any[] = [];

    for (let i = 0; i < TILE_COUNT; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / TILE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = GLOBE_RADIUS * Math.cos(phi);

      const equatorFactor = Math.sin(phi);
      const baseW = 0.03 + (Math.random() * 0.08 * equatorFactor);
      const baseH = baseW * (0.5 + Math.random() * 1.3);

      const geo = new THREE.PlaneGeometry(baseW, baseH);
      const opacity = 0.15 + (Math.random() * 0.8);

      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: opacity,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.lookAt(0, 0, 0);
      mesh.rotateZ(Math.random() * Math.PI * 2);

      const floatOffset = -0.05 + (Math.random() * 0.3);
      const dir = new THREE.Vector3(x, y, z).normalize();
      mesh.position.addScaledVector(dir, floatOffset);

      tileGroup.add(mesh);

      tiles.push({
        mesh,
        floatSpeed: 0.0003 + Math.random() * 0.0008,
        floatPhase: Math.random() * Math.PI * 2,
        floatAmp: 0.01 + Math.random() * 0.04,
        baseOpacity: opacity,
        dir: dir.clone(),
      });
    }

    const addCircle = (radius: number, axis: string, segments = 128, opacity = 0.12) => {
      const pts = [];
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        if (axis === 'y') pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
        if (axis === 'x') pts.push(new THREE.Vector3(0, Math.cos(a) * radius, Math.sin(a) * radius));
        if (axis === 'z') pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: 0xe5302a, transparent: true, opacity }); // Red #E5302A
      tileGroup.add(new THREE.Line(geo, mat));
    };

    addCircle(GLOBE_RADIUS + 0.02, 'y', 128, 0.18);
    addCircle(GLOBE_RADIUS + 0.02, 'x', 128, 0.10);
    addCircle(GLOBE_RADIUS + 0.02, 'z', 128, 0.10);

    for (let lat = -60; lat <= 60; lat += 30) {
      if (Math.abs(lat) === 0) continue;
      const r = GLOBE_RADIUS * Math.cos((lat * Math.PI) / 180);
      const y = GLOBE_RADIUS * Math.sin((lat * Math.PI) / 180);
      const pts = [];
      for (let i = 0; i <= 128; i++) {
        const a = (i / 128) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: 0xe5302a, transparent: true, opacity: 0.07 }); // Red #E5302A
      tileGroup.add(new THREE.Line(geo, mat));
    }

    const glowGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.08, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x8c1c18, // Brand Red Dim
      transparent: true,
      opacity: 0.25,
      side: THREE.BackSide,
      depthWrite: false,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));

    let clock = 0;
    let targetRX = 0, targetRY = 0;
    let baseRY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetRY = ((e.clientX / window.innerWidth) - 0.5) * 0.3;
      targetRX = ((e.clientY / window.innerHeight) - 0.5) * 0.15;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!containerRef.current) return;
      const W = containerRef.current.clientWidth;
      const H = containerRef.current.clientHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener('resize', onResize);

    const animate = () => {
      const requestID = requestAnimationFrame(animate);
      (window as any)._globeRequestID = requestID;

      clock += 0.01;
      baseRY += 0.0015;
      tileGroup.rotation.y = baseRY + targetRY * 0.6;
      tileGroup.rotation.x = -0.1 + targetRX * 0.4;

      tiles.forEach(t => {
        const offset = Math.sin(clock * 50 * t.floatSpeed + t.floatPhase) * t.floatAmp;
        const snap = t.dir.clone().multiplyScalar(offset * 0.01);
        t.mesh.position.add(snap);
        t.mesh.material.opacity = t.baseOpacity * (0.85 + 0.15 * Math.sin(clock * 0.5 + t.floatPhase));
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if ((window as any)._globeRequestID) cancelAnimationFrame((window as any)._globeRequestID);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  };

  useEffect(() => {
    if (window.THREE) {
      const cleanup = initGlobe();
      return cleanup;
    }
  }, []);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        onLoad={() => {
          initGlobe();
        }}
        strategy="afterInteractive"
      />
      <div 
        ref={containerRef} 
        id="globe-canvas-container" 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 1,
          pointerEvents: 'none' 
        }} 
      />
    </>
  );
}

declare global {
  interface Window {
    THREE: any;
  }
}
