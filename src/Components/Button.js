import {Button} from "@mui/material";
import "../Css/Button.css";

function ButtonComp(buttonTxt) {


  //Since we just have one button in the app its okay to call this function this way, otherwise we would use callback function to
  //handle click event
   const scrollToContact = () => {
    const anchor = document.getElementById('contactId');
    anchor.scrollIntoView({behavior:'smooth', block: 'center'});
  }

  return (
    <Button variant="outlined" size='large' onClick={scrollToContact}  style={{
        borderWidth: 2,
        borderColor: "#21b6ae",
        fontFamily: "Lucida Sans",
        color: 'white',
        padding: '10px 35px 10px 35px'
    }}>{buttonTxt.value}</Button>
  );
}

export default ButtonComp;
