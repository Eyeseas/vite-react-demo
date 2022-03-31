import {Button} from "antd"
import {PlusOutlined,MinusOutlined} from "@ant-design/icons"
import store from "../../redux/store"
import { useState } from "react"
import { counterAddActionCreator,counterSubActionCreator } from "@/redux/counter/counterActionCreator"

function Counter() {
    const state = store.getState()
    const [count, setCount] = useState(state.count)
    store.subscribe(() => {
        setCount(store.getState().count)
    })

    const addCounter = () => {
        store.dispatch(counterAddActionCreator())
    }
    const subCounter = () => {
        store.dispatch(counterSubActionCreator())
    }
    return (
        <div className="counter-page">
            <h1>Counter</h1>
            <Button shape="circle" icon={<PlusOutlined/>} onClick={addCounter}></Button>
            {count}
            <Button shape="circle" icon={<MinusOutlined/>} onClick={subCounter}></Button>
        </div>
    )
}

export default Counter