import { useAvengerPower } from "./custom_hook"

export function Main() {

    const power1 = useAvengerPower()
    const power2 = useAvengerPower()
    const power3 = useAvengerPower()

    return <>
        <h1> Power of Hero is :  {power1.power}</h1>
        <button type="button" onClick={power1.increase}>Increase power</button>

        <h1> Power of Hero is :  {power2.power}</h1>
        <button type="button" onClick={power2.increase}>Increase power</button>

        <h1> Power of Hero is :  {power3.power}</h1>
        <button type="button" onClick={power3.increase}>Increase power</button>

    </>


}