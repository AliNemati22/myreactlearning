import Radium from 'radium';
import React from 'react';
const person=  (props) =>
{
    const style = 
    {
        '@media (min-width:500px)':
        {
            width:'450px'
        }
    }
     return (
    <div className="Person" style={style}>
    <p onClick={props.click}>I'm {props.Name} and i am {props.age} years old</p>
            <p>{props.children}</p>
     <input type="text" onChange={props.changed} value={props.Name}></input>
    </div>
);


}

export default Radium(person);