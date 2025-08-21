// import { Component } from "react";

// export function Header() {
//     return<h1>welcome to the shield</h1>
// }

// export function Avenger(props) {
//     return <h2>hello i am {props.fname} {props.lname}</h2>
// }
// export function Footer() {
//     return <h3>shield copyright @1236</h3>
// }
 
// export class AvengerClass extends Component {
//     render() {
//         return <h2>hello i am {this.props.fname} {this.props.lname}by class</h2>
// }
    
// }
import { Component } from "react";

export function Header() {
    return<h1>welcome to the shield</h1>
}

export function Avenger(props) {
    return <h2>hello i am {props.fname} {props.lname}</h2>
}
export function Footer() {
    return <h3>shield copyright @1236</h3>
}
 
export class AvengerClass extends Component {
    render() {
        return <h2>hello i am {this.props.fname} {this.props.lname}by class</h2>
    }
}