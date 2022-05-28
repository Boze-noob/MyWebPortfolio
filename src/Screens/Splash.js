import React, {useEffect, useRef} from 'react';
import '../Css/Splash.css';
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-web';
import ReactAnimation from '../Animations/react_logo.json'

function Splash() {

    const container = useRef(null);

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: ReactAnimation,
        })
    }, []
    )

    return (
      <div className = "Splash">
          <Typewriter 
          onInit={(typewriter) => {
              typewriter
              .pauseFor(1000)
              .typeString('Hello there !')
              .pauseFor(1000)
              .deleteAll(30)
              .typeString('Welcome to my portfolio !')
              .pauseFor(1000)
              .deleteAll(30)
              .callFunction(() => {
                  Lottie.play();
              })
              .start();
          }
        }
          
          />
          <div className='LottieAnimation' ref={container}></div>
      </div>
    );
  }
  
  export default Splash;