import React, {useEffect, useRef, useState} from 'react';
import '../Css/Splash.css';
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-web';
import ReactAnimation from '../Animations/react_logo.json'
import App from '../App.js'

function Splash() {

    const container = useRef(null);
    const [show, setShowTypeWritter] = useState(true);
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: ReactAnimation,
        });
        
    }, []
    )

    return (
      <div>
      {

        showSplash ?
        <div className = "Splash">
        {
          show ? <Typewriter 
        onInit={(typewriter) => {
            typewriter
            .pauseFor(500)
            .typeString('Hello there !')
            .pauseFor(800)
            .deleteAll(30)
            .typeString('Welcome to my portfolio !')
            .pauseFor(1000)
            .deleteAll(10)
            .callFunction(async () => {
                setShowTypeWritter(false);
                Lottie.play();
                //I was not able to find onComplete/onFinish method for animation so I used delay down below
                await timeout(5500);
                //Its not possible to open new screen without user action
                setShowSplash(false);

            })
            .start();
        }
      }
        /> : null
        }
        <div className='LottieAnimation' ref={container}></div>
        
    </div> : <App />

      }
      </div>
     
      
    );
  }

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}
  
  export default Splash;