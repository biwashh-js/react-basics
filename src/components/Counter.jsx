import React, { useEffect, useState } from 'react'
//lifecycle of react - component will mount , component will update, component will unmount
const Counter = () => {
    // let count = 0
    const [count,setCount] = useState(0)

    const onIncrement = () =>{
        setCount(count + 1)
    }
    const onDecremnt = () =>{
       setCount(count - 1)
    }
    //component did mount -> empty dependency array
    useEffect(() => {
        console.log('mounting phase')
    }, [])
    

    // component did update
     useEffect(() => {
        console.log('update')
    }, [count])
    

    // component did unmount
     useEffect(() => {
        // on count change
        // ---


        //cleanup function
        ()=>{
            //
        }

    }, [count])
    
  return (
    <div>
        <h4>Counter</h4>
        <h3>{count}</h3>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecremnt}>-</button>
    </div>
  )
}

export default Counter
