import { useState } from "react"

export const useCounter = (inicialValue = 0) => {

    const [counter, setCounter] = useState(inicialValue)
    const increment = (val = 1) => {
        setCounter(counter + val)
    }
    const reset = () => {
        setCounter(inicialValue)
    }
    const decrement = (val = 1, allowNegative = true) => {
        if (!allowNegative && counter < 1) return
        setCounter(counter - val)
    }

    return {
        counter,
        increment,
        reset,
        decrement
    }
}
