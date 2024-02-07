
import React, { useState } from 'react'
import WrapperHoc from "./WrapperHoc"

function LikePost({counter,handleCounter}) {

  
  return (
    <div>
      <button onClick={handleCounter}>Like Post {counter}</button>
    </div>
  )
}
export default WrapperHoc(LikePost);