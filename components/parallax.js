import { useParallax } from "react-scroll-parallax";

export default function Parallax({ children, speed, classn }) {
  const { ref } = useParallax({ speed: parseInt(speed) });
  return (
    <div ref={ref} className={classn}>
      {children}
    </div>
  );
}
