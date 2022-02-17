import React from 'react';
import { useSelector} from "react-redux";
import "../App.css";
const Header = () => {
    
    const color = useSelector((state) => state.color.value);
    const count = useSelector((state) => state.count.value)
    return (
       
        <div  className="header">
         <h2 style={{color}}>Header Count is {count} </h2>   
      
        </div>
    );
}

export default Header;
