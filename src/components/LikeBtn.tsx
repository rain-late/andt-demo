import { useState, useEffect } from "react";

const LikeBtn: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  useEffect(() => {
    document.title = `点击了${like}`
  })
  return <>
    <button onClick={() => setLike(like+1)}>
      {like} 👍
    </button>
    <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
  </>
}
export default LikeBtn;