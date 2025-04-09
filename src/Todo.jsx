import React, { useState } from "react";

const Todo = () => {
const [state,setState] =useState(7);
return( 
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
        Todo
        <h1>{state}</h1>
        <button onClick={() => setState(state + 1)}>Increment</button>
        <button onClick={() => setState(state - 2)}>Decrement</button>
        <button onClick={() => setState(0)}>Reset</button>
    </div>

  );
};
export default Todo;