import React ,{useState} from 'react';
import randomcolor from 'randomcolor';
import "../App.css";

const Aside = () => {
    const [initalColor,updatedColor] = useState("black");
    const newColor = randomcolor();
    const headingStyle= {
        color:initalColor
    }
    return (
        <div className="aside">
          <h2 style={headingStyle}>Aside</h2>  
          <button onClick={()=>{updatedColor(newColor)}}>Change Color</button>
        </div>
    );
}

export default Aside;
