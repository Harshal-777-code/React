import { Child3 } from "./C3"

// with the help of props
export function Child2(props) {
    return <>
        <h1>Child2</h1>
        <Child3 power1={props.power } />
    </>
}
