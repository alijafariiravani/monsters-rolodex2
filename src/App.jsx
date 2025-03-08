import { useState, useEffect } from 'react'; 
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'; 


const App = () => {

  const [searchField, setSearchField] = useState('');  //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
     });

     setFilterMonsters(newFilteredMonsters);
  },[monsters, searchField]);

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString); 
    };


  

  return (
    <div className='App'>
        <h1 className='app-title'>Ali's Monsters Rolodex</h1>
       
        <SearchBox
         className= 'monsters-search-box'
         onChangeHandler = {onSearchChange}
         placeholder = 'search monsters'
          />
        
        <CardList monsters ={filteredMonsters}/>
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField : ""
//     };
//   }


    


//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     })
//     }

//   render() {

//     const {monsters,searchField} = this.state;
//     const {onSearchChange} = this;

 

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Ali's Monsters Rolodex</h1>
       
//         <SearchBox
//          className= 'monsters-search-box'
//          onChangeHandler = {onSearchChange}
//          placeholder = 'search monsters'
//           />
        
//         <CardList monsters ={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
