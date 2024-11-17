import { useDispatch, useSelector } from "react-redux"
import { AddCount, RemoveCount } from "./action";
const ReduxCompo = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const handleplus = () => {
        dispatch(AddCount(1))
    }
    const handleMinus = () => {
        dispatch(RemoveCount(1))
    }
    return (
        <div>
            <h1>Counter Application</h1>
            <h1>Count:{count}</h1>
            <button onClick={handleplus}>Add</button>
            <button onClick={handleMinus}>Remove</button>
        </div>
    )
}
export default ReduxCompo
