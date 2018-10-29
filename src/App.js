import React, { Component } from 'react';
import myStyles from'./App.css';
import Person from './Person/Person';
import Radium,{StyleRoot} from 'radium';
class App extends Component {

  state = {
    persons : [
      {name :'Ali',age:32},
      {name :'Mahdi',age:1},
      {name :'Benyamin',age:6}
    ],
    otherState:'Some other Value',
    showPersons:false
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

  namechangedHandler = (event,id) =>
  {
    const personindex= this.state.persons.findIndex(p =>{
      return p.userid === id;
    });

    const person = {...this.state.persons[personindex]};
    person.name =event.target.value;
    const persons =[...this.state.persons];
    persons[personindex] = person;
    this.setState({persons:persons})
    };
  

  togglePersonsHandler =()=>
  {
     const doesshow= this.state.showPersons;
     this.setState({showPersons: !doesshow});
  }

  deletePersonHaandler(personindex)
  {
    const persons = this.state.persons;
    persons.splice(personindex,1);
    this.setState({persons:persons});
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   font:'tahoma',
    //   border:'2x solid blue',
    //   padding:'8px',
    //   cursor:'pointer',
    //   ':hover':
    //   {
    //     backgroundColor:'lightgreen',
    //     color:'black'
    //   }

    // };

    let persons=null;
     let btnclass='';

    if(this.state.showPersons)
    {
      persons =(
        <div>
          {
            this.state.persons.map((person, Index)=>{
              return <Person
              click={() => this.deletePersonHaandler(Index)}
              Name={person.name}
              age={person.age}
              key = {person.id}
              changed={(event) => this.namechangedHandler(event,person.id)}
              />
            })
          }
        </div>
       
      );
     
      btnclass=myStyles.red;
    }

    let classes=[];
    if(this.state.persons.length <=2)
    {
      classes.push(myStyles.red);
    }

     if(this.state.persons.length <=1)
     {
       classes.push(myStyles.bold);
      }

    return (
      <StyleRoot>
      <div className={myStyles.App}>
      <h1>Hi I am a React App </h1>
      <p className={classes.join(' ')}> this is really working!!!!</p>
      <button  
        className={btnclass.red}
         onClick={this.togglePersonsHandler}>Toggle  Persons</button>
      {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium( App);
