import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    var foo = ref.current;
    foo.addEventListener("mouseenter", enter);
    foo.addEventListener("mouseleave", leave);

    return () => {
      foo.removeEventListener("mouseenter", enter);
      foo.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
