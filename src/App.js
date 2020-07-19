import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
import Img_06 from './assets/Img_06.png';

function App() {

  const { ref:Roadanimation , playState, getAnimation } = useWebAnimations({
    keyframes:[
      {transform:'translate(-2950px)'}
    ],
    timing:{
      duration:6000,
      iterations : Infinity,
    }
  })
  const { ref:car } = useWebAnimations({
    keyframes:[
      {transform:'translateY(-2px)'},
      {transform:'translateY(3px)'},
      {transform:'translateY(-1px)'}
    ],
    timing:{
      duration:1000,
      iterations : Infinity,
    }
  })
  // ///
  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 1.3);
  };
 
  return (
    <div  >
         <div className="bg-img">
         <div className='header'>Driving Car Animation: {playState}</div>
         <div className="road" id='Roadanimation' ref={Roadanimation}></div>
         <div className="car" ref={car}>
             <img src={Img_06}  alt='carimg'/>
         </div>
         <div className='buttons'>
         <button onClick={ () =>{getAnimation().play()}}>Start</button>
         <button onClick={ () =>{getAnimation().pause()}}>Break</button>
         <button onClick={ () =>{getAnimation().reverse()}} >Reverse</button>
         <button  defaultValue="1"  onClick={speedUp}>IncreaseSpees</button>
         </div>
     
    </div>
    </div>
  );
}

export default App;
