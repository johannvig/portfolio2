import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  scrollProgress: number;
};

export default function ThreeBackground({ scrollProgress }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(scrollProgress);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    mount.replaceChildren();

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080808);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const cameraBaseDist = 7;
    camera.position.z = cameraBaseDist;

    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(10, 10, 10);
    scene.add(light);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1, 2);
    const posArray = geometry.getAttribute('position').array as Float32Array;

    const meshes: THREE.Mesh[] = [];
    const normals: THREE.Vector3[] = [];

    for (let i = 0; i < posArray.length; i += 9) {
      const geo = new THREE.BufferGeometry();
      const verts = new Float32Array([
        posArray[i], posArray[i + 1], posArray[i + 2],
        posArray[i + 3], posArray[i + 4], posArray[i + 5],
        posArray[i + 6], posArray[i + 7], posArray[i + 8],
      ]);
      geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));

      const normal = new THREE.Vector3(
        (posArray[i] + posArray[i + 3] + posArray[i + 6]) / 3,
        (posArray[i + 1] + posArray[i + 4] + posArray[i + 7]) / 3,
        (posArray[i + 2] + posArray[i + 5] + posArray[i + 8]) / 3,
      ).normalize();

      const mat = new THREE.MeshBasicMaterial({ color: 0xc100eb, wireframe: false });
      const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 0), mat);
      meshes.push(sphere);
      normals.push(normal);
    }

    let rot = 0;
    let loopSpeed = 0;
    const sceneScale = 1.4;
    const clock = new THREE.Clock();
    let rafId: number;

    const tick = () => {
      const sp = scrollRef.current;
      const motionScroll = sp < 0.7 ? sp : 0.7 + (sp - 0.7) * 0.2;
      rot += 0.25 + motionScroll * 0.9;
      const cameraAngle = (rot * Math.PI) / 180;
      const cameraDist = cameraBaseDist - motionScroll * 5.0;
      camera.position.set(
        cameraDist * Math.sin(cameraAngle),
        0,
        cameraDist * Math.cos(cameraAngle),
      );
      camera.lookAt(0, 0, 0);

      const elapsed = clock.getElapsedTime();
      loopSpeed += 0.003;

      meshes.forEach((m, idx) => {
        const avg = (normals[idx].x + normals[idx].y + normals[idx].z) / 3;
        const addAngle = avg * elapsed;
        const lSpeed = loopSpeed + idx * 0.002;
        const angle = (lSpeed * Math.PI) / 180 + addAngle;

        const scrollExpansion = sp * 4.0;
        const loop = (Math.sin(angle) + 1) * 0.5 * sceneScale + scrollExpansion;
        const scale = (Math.sin(angle) + 1.1) * 0.1 * sceneScale;

        m.position.set(
          normals[idx].x * loop * 1.3 * sceneScale,
          normals[idx].y * loop * 0.8 * sceneScale,
          normals[idx].z * loop * sceneScale,
        );
        m.scale.setScalar(scale);

        const h = Math.abs(Math.sin(angle)) * 360;
        (m.material as THREE.MeshBasicMaterial).color.setHSL(h / 360, 1.0, 0.7);

        scene.add(m);
      });

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
      geometry.dispose();
      meshes.forEach((m) => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
