import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css'
class App extends Component {

  state = {
    persons : [
      {name :'Ali',age:32},
      {name :'Mahdi',age:1},
      {name :'Benyamin',age:6}
    ],
    otherState:'Some other Value'
  }

  switchNameHandler = (newName) =>
  {
    // console.log('Was clicked');
     //this.state.persons[0].name='AliNemati';
     this.setState({persons:
      [
        {name :newName,age:32},
        {name :'Mahdi',age:1},
        {name :'Benyamin',age:7}
      ]
    });
  }

  namechangedHandler = (event) =>
  {
    this.setState({persons:
      [
        {name :'AliNemati',age:32},
        {name : event.target.value, age:1},
        {name :'Benyamin',age:7}
      ]
    });
  } 
  render() {

    const style = {
      backgroundColor: 'white',
      font:'tahoma',
      border:'2x solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
      <h1>Hi I am a React App zzzzzzzzz</h1>
      <p>this is really working!!!!</p>
      <button style={style} onClick={() => this.switchNameHandler ("AliIIIII")}> Switch Name</button>
      <Person 
        Name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        >
      </Person>
      <Person 
          Name={this.state.persons[1].name}
           age={this.state.persons[1].age}
           changed={this.namechangedHandler}>
      </Person>
        <Person
           Name={this.state.persons[2].name} 
           age={this.state.persons[2].age}
           click={this.switchNameHandler.bind(this,"Mahdi")}
      ></Person>
      
      </div>


    );

  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work how?'))
  }
}

export default App;
