import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {

  const[mode, setMode] = useState('light');  // whether dark mode is enalble or not......

  const [alert , setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg : message, type: type
    }) 

    setTimeout(() =>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark') ;

      document.body.style.backgroundColor = ' #042743';

      showAlert("Dark Mode Has Been Enable" , "success");

      document.title = 'Vikas -  Dark Mode';
    }
    else{
      setMode('light');

      document.body.style.backgroundColor ='#fff';

      showAlert("Light Mode Has Been Enable" , "success");

      document.title = 'Vikas - Light Mode';
    }

  }

  return (
  <>

<Navbar title = "textUtil2" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<Alert alert= {alert}/>
<div className="container my-3">


<TextForm showAlert = {showAlert} heading="Enter The Text To Analyze below" mode={mode}/>
<About/>
</div>
  </>
  );
}

export default App;