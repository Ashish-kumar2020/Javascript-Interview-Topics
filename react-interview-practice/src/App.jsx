// import { lazy, Suspense } from "react";
// import { useState } from "react";
import "./App.css";
import Body from "./component/StateColocation/Body";
// const DashBoard = lazy(() => import("./component/DashBoard"));

// import DashBoard from "./component/DashBoard";
// import Parent from "./component/CallbackvsMemo/Parent";
// import UseMemoImp from "./component/useMemoHook/UseMemoImp";
// const UseMemoImp = lazy(() => import("./component/useMemoHook/UseMemoImp"))
// const Parent = lazy(() => import("./component/CallbackvsMemo/Parent"))

// Tree Shaking - if we have multiple function inside a single file then instead of loading the complete file import only those which are required
// import { add, substract } from "./utils";

function App() {
  // const [showDashBoard, setShowDashBoard] = useState(false);
  // console.log(add,substract);
  const items = Array.from({ length: 10000 }, (_, index) => ({
    id: index,
    name: `Product ${index}`,
  }));
  return (
    <>
      <h1>React Interview Topics Practise</h1>
      {/* <Parent/> */}
      {/* <Suspense fallback={<p>Loading....</p>}>
        <UseMemoImp />
      </Suspense>

      <Suspense fallback={<p>Loading Parent Component...</p>}>
        <Parent/>
      </Suspense> */}
      {/* <button onClick={() => setShowDashBoard(true)}>Click Me</button>
      <Suspense fallback={<p>Load Dashboard....</p>}>
        {showDashBoard && <DashBoard />}
      </Suspense> */}
      {/* <div>
        {items.map((item) => {
         return <div key={item.id}>{item.name}</div>;
        })}
      </div> */}
    <Body/>
    </>
  );
}

export default App;
