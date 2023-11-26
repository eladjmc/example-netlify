import Balloon from "./Balloon"
const Child = (props) => {
  return (
    <>
    {props.children}
    <Balloon color={props.color}/>
    </>
  
  )
}

export default Child