import { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
  const [pst, setPst] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add', pst.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPst({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove', pst.x)
      document.removeEventListener('click', updateMouse)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log('render', pst.x)
  return <p>X:{pst.x}, Y: {pst.y}</p>
}
export default MouseTracker