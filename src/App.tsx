import React, { useState } from 'react'
import './App.css'
// import Hello from './components/Hello'
// import LikeBtn from './components/LikeBtn'
// import MouseTracker from './components/MouseTracker'
// import useMouseTracker from './hooks/useMouseTracker'
import withLoader from './components/withLoader'

interface IShowResult {
  status: string;
  message: string;
}
const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
  return <>
    <h2>Dog show: {data.status}</h2>
    <img src={data.message} />
  </>
}
const App: React.FC = () => {
  const [show, setShow] = useState(true)

  // const
  // const pst = useMouseTracker()
  return (
    <div className='App'>
      {/* <Hello /> */}
      {/* <LikeBtn /> */}
      {/* <MouseTracker /> */}
      {/* {show && <MouseTracker />} */}
      {/* <div>x: {pst.x}, y: {pst.y}</div> */}
      <button onClick={() => setShow(!show)}>取反</button>
    </div>
  )
}

export default App
