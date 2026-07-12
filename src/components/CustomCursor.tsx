import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const followerPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    let raf: number;
    const animate = () => {
      followerPosRef.current.x += (posRef.current.x - followerPosRef.current.x) * 0.12;
      followerPosRef.current.y += (posRef.current.y - followerPosRef.current.y) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = `${followerPosRef.current.x}px`;
        followerRef.current.style.top = `${followerPosRef.current.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => {
      cursorRef.current?.classList.add('hover');
      followerRef.current?.classList.add('hover');
    };
    const onLeave = () => {
      cursorRef.current?.classList.remove('hover');
      followerRef.current?.classList.remove('hover');
    };

    const attachListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
