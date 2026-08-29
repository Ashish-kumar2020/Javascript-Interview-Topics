import { useCallback, useState } from "react"
import Child from "./Child";


const Parent = () => {
    console.log("Parent Re-render")
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");

    const incrementFnc = useCallback(() => {
        setCount(prev => prev + 1);
    },[]);

  return (
    <div>
        <input type="text" value={name} id="userName" onChange={(e) => setName(e.target.value)}/>
        <Child onIncrement={incrementFnc} count={count}/>
    </div>
  )
}

export default Parent