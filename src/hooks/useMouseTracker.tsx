
import { useState, useEffect } from "react";

const useMouseTracker = () => {
  const [pst, setPst] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add', pst.x)
    const updateMouse = (e: MouseEvent) => {
      setPst({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove', pst.x)
      document.removeEventListener('mousemove', updateMouse)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return pst
}

export default useMouseTracker