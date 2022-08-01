import React, { useState } from 'react'
import Canvas from './Canvas'
import UserInput from './UserInput'

const Container = () => {
  const today = new Date();
  const [inputs, setInputs] = useState({
    name: '김싸피',
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    attendMonth: today.getMonth(),
    totalDays: 19,
    attendDays: 19,
    location: '서울',
    classNum: 1,
    sign: '',
  })

  return (
    <div>



      <UserInput inputs={inputs} setInputs={setInputs} />
      <Canvas inputs={inputs} />

    </div>
  )
}

export default Container
