import React from "react";



// rewrite as pure function component
type CounterType={
    counter:number

}

export function Counter({counter}:CounterType) {




    return <span>{counter}</span>;

}

