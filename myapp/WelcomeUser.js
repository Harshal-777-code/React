export function AvengerWelome(props) {
  const isAdmin = true
  return <>
  <h1>hello steve rogers</h1>
  <button type="button"  onClick={props.clickdetail}>log out</button>
  {isAdmin && <button type="button">delete</button>}
  </>

}