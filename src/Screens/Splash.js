import React, {useEffect, useRef, useState} from 'react';
import '../Css/Splash.css';
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-web';
import ReactAnimation from '../Animations/react_logo.json'

function Splash() {

    const container = useRef(null);
    const [show, setShow] = useState(true);

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
                  setShow(false);
                  Lottie.play();
                  //I was not able to find onComplete/onFinish method for animation so I used delay down below
                  await timeout(4000);
                  //open another screen
              })
              .start();
          }
        }
          /> : null
          }
          <div className='LottieAnimation' ref={container}></div>
      </div>
    );
  }

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}
  
  export default Splash;