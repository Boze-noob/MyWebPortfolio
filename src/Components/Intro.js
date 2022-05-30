import '../Css/Intro.css';
import Button from '../Components/Button.js'

function Intro() {
  const titleTxt = 'Hi! \nI am Bože, \nmobile developer.';
  return (
    <div className="Intro">
      {
        titleTxt.split('\n').map(function(txt){
          return <p id='title'>{txt}</p>
        })
      }
      <p id='subTitle'>Android Native / Flutter</p>
      <div id='button'>
      <Button value = {'Contact me'} />
      </div>
    </div>
  );
}

export default Intro;
