import { useState } from 'react';
import './App.css'

  function App(){
    
    let globalc ='black'
    let [color,setColor] = useState(globalc);
    
      function changeColor(){
      let Color =" #87CEEB"
      setColor(Color)
    }
    
    function changeColor1(){
      let Color =" #008B8B"
      setColor(Color)
    }
    function changeColor2(){
      let Color ="Yellow"
      setColor(Color)
    }
    function changeColor3(){
      let Color ="Pink"
      setColor(Color)
    }
    function changeColor4(){
      let Color ="White"
      setColor(Color)
    }
    function changeColor5(){
      let Color ="Orange"
      setColor(Color)
    }
    
    function changeColor6(){
      let Color ="Green"
      setColor(Color)
    }
    function changeColor7(){
      let Color ="Red"
      setColor(Color)
    }
    function changeColor8(){
      let Color ="Violet"
      setColor(Color)
    }
    function changeColor9(){
      let Color ="Blue"
      setColor(Color)
    }

  return (
    <>
       

       <div style={{backgroundColor:color,height:'60vh',width:'700px',padding:'5%',paddingLeft:'60px',
          margin:'4%'}}
          className='d-flex flex-column align-items-center justify-content-center' >
        <h1 style={{color:'grey',fontFamily:'sans-serif',margin:'50px',padding:'15px',textAlign:'center'}}>Bg Color Changer </h1>
        

        <div style={{gap:'20px'}} className="d-flex align-items-center justify-content-center m-5">

          <button style={{backgroundColor:'#87CEEB' ,width:'120px'}}
           onClick={changeColor} className='btn btn-outline-light'>SkyBlue</button>

          <button style={{backgroundColor:'008B8B' ,width:'120px'}}
           onClick={changeColor1} className='btn btn-outline-light'>Cyan</button>

          <button style={{backgroundColor:'yellow' ,width:'120px'}}
           onClick={changeColor2} className='btn btn-outline-light'>yellow</button>

          <button style={{backgroundColor:'pink' ,width:'120px'}}
           onClick={changeColor3} className='btn btn-outline-light'>pink</button>

          <button style={{backgroundColor:'White' ,width:'120px'}}
           onClick={changeColor4} className='btn btn-outline-light'>White</button>

          <button style={{backgroundColor:'Orange' ,width:'120px'}}
           onClick={changeColor5} className='btn btn-outline-light'>Orange</button>

          <button style={{backgroundColor:'Green' ,width:'120px'}}
           onClick={changeColor6} className='btn btn-outline-light'>Green</button>

          <button style={{backgroundColor:'Red' ,width:'120px'}}
           onClick={changeColor7} className='btn btn-outline-light'>Red</button>

          <button style={{backgroundColor:'Violet' ,width:'120px'}}
           onClick={changeColor8} className='btn btn-outline-light'>Violet</button>

          <button style={{backgroundColor:'Blue' ,width:'120px'}}
           onClick={changeColor9} className='btn btn-outline-light'>Blue</button>
        </div></div>

     
    </>
  )
}

export default App
