import React, {useEffect} from "react";


type AutoincrType={
    setIncr:(inc:number)=>void
    incr:number
}
export function Autoincr({setIncr,incr}:AutoincrType){

    useEffect(() => {
        console.log("Auto")
        const c = setTimeout(() => setIncr(incr+1), 3000)
        return () => clearTimeout(c)
    })
    return(
        <>
        </>
    )

}
