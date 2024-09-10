import React, { useEffect, useState } from 'react'
import { db } from './firebaseConfig'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';


function App() {
  const [counter, setCounter] = useState()
  const [max, setMax] = useState()


  const docRef = doc(db, 'db', 'rEJMNUh21ASdSXqiRTlJ')

  useEffect(() => {
    const getCounter = async () => {
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setCounter(docSnap.data().counter)
        setMax(docSnap.data().max)
      } else {
        console.log("No such document!")
      }
    }
    getCounter()
  }, [])

  const plus = async () => {
    const newCounter = counter + 1
    if (newCounter > max ){
      setMax(newCounter)
      updateDoc(docRef, { max: newCounter })//removed the async so it wont go first 
    }
    setCounter(newCounter)
    await updateDoc(docRef, { counter: newCounter })
  }

  const minus = async () => {
    const newCounter = counter - 1
    setCounter(newCounter)
    await updateDoc(docRef, { counter: newCounter })
  }

  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center block w-full max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
        <button onClick={plus} className="mb-4"><ChevronUp /></button>
        <span className="mb-4 text-4xl">{counter}</span>
        <span className="mb-4 text-gray-400">high score : {max}</span>
        <button onClick={minus}><ChevronDown /></button>
      </div>
    </div>


  )
}

export default App
