import React from 'react'
// import cs from "./loader.module.css"
import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

const Loader = (props) => {
  return (
<div
className="sweet-loading"
style={{
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000',
  opacity: 0.7,
  display: props.loading ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'center'
}}>
{/* <BeatLoader color={'#fff'} loading={props.loading} size={15} speedMultiplier="1" /> */}
{/* <div className={cs.loader__spinner} ></div> */}
    <ReactLoading
    type={"bars"}
    color={"#03fc4e"}
    height={100}
    width={100}
    />
</div>


  )
}

export default Loader

