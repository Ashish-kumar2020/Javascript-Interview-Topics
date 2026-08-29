import { memo } from "react"


const Child = memo(({onIncrement,count}) => {
    console.log("CHild Re-render")
  return (
    <div>
        <span>Current Count : {count}</span>
        <button type="button" onClick={onIncrement}>Increment</button>
    </div>
  )
})

export default Child