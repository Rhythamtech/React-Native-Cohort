import { useState, useEffect } from "react";

function App(){
    // Only need to use TOP

    const [darkMode, setDarkMode] = useState(false)

    function onToggleTheme(){
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

    const [count, setCount] = useState(0)

    // without dep Array
    // useEffect(()=>{
    //     console.log("I am Under useEffect")
    // })

    // with empty dep array
    // useEffect(()=>{
    //     console.log("I am Under useEffect with empty dep array")
    // },
    // [])

    // with dep array
    useEffect(
        ()=> {
            console.log("I am Under useEffect with dep array")
        },[count]
    )

    return (
        <div 
        style = {{
            height : "100vh",
            backgroundColor : darkMode ? "#1212" : "#ffff",
        }}>
            <button onClick={onToggleTheme}>
                Toggle Theme
            </button>
            <button onClick={()=>{setCount(count +1)}}>
                Increment
            </button>
        </div>
    )
}

export default App