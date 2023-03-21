import { useContext } from "react"
import { CountContext } from "../App"


const Card = () => {
    const { count, setCount } = useContext(CountContext)
    const incrementCount = () => setCount(count + 1)
    return <div>
        <h3>{count}</h3>
        <button onClick={incrementCount}>Click</button>
    </div>
}

export default Card
