import React from "react";

const Counter=()=>{
    const [count,setCount] =React.useState(0)
    const handlechange=(value)=>{
        setCount(count+value);
    };
    const handledouble=(value)=>{
        setCount(count*value);
    };
    return (
        <>
        <h1 style={{background:'red' ,color:'white'}}>Counter</h1>
        <h2 style={count%2==0?{color:"green"}:{color:"red"}}> {count}</h2>
        <button onClick={()=>handlechange(1)}>Increment</button>
        <button onClick={()=>handlechange(-1)}>Decrement</button>
        <button onClick={()=>handledouble(2)}>Double</button>
        
        </>
    );
}

export default Counter;