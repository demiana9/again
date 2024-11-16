import {useSelector,useDispatch}from 'react-redux'
import './App.css'
import { add, discount } from './redux/reducers/bankactions'

function App() {
const selector=useSelector(state=>state)
const dispatch=useDispatch()
console.log(selector)
  return (
    <>
       <p>this is bank account{selector}
       <input/>
       <button onClick={()=>dispatch(add(100))}>add</button>
       <button onClick={()=>dispatch(discount(100))}>discount</button>

       </p>
       
    </>
  )
}

export default App
