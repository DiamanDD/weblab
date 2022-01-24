// rewrite as pure function component
import React, {useEffect, useState} from "react";

type RandomListType = {
    count: number
}

export function RandomList({count}: RandomListType) {

    const [arr,setArr]=useState<number[]>([])

    function generateNumbers(count: number) {

        const arrNumber=[]
        for (let i = 0; i < count; i++) {
            const randomNumber = Math.random() * 10
            arrNumber.push(randomNumber|1)
        }

        return arrNumber
    }

    useEffect(()=>{
        setArr(generateNumbers(count))
    },[count,])




    return (
        <ul>
            {arr.map((num,index)=>(<li key={index} >{num}</li>))}
        </ul>
    )
}
