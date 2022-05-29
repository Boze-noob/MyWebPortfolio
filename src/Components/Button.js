import {Button} from "@mui/material"
import "../Css/Button.css"

function ButtonComp(buttonTxt) {
  return (
    <Button variant="outlined" size='large'  style={{
        borderWidth: 2,
        borderColor: "#21b6ae",
        fontFamily: 'Lucida Sans Unicode',
        color: 'white'
    }}>{buttonTxt.value}</Button>
  );
}

export default ButtonComp;
