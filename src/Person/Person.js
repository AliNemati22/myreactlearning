import React from 'react';
const person=  (props) =>
{
     return (
    <div className="Person">
    <p onClick={props.click}>I'm {props.Name} and i am {props.age} years old</p>
            <p>{props.children}</p>
     <input type="text" onChange={props.changed} value={props.Name}></input>
    </div>
);


}

export default person;