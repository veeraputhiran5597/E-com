import Motherpage from "./Motherpage";
import {Mystore} from "./Store/Store";
import {Provider} from 'react-redux';
import "./App.css";



const App=()=>
{
  return(
    <>
    <Provider store={Mystore}>
    <Motherpage/>
    </Provider>
    </>
  )
}

export default App;