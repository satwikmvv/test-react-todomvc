import React, { Component } from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import DisplayItems from './components/DisplayItems';

class App extends Component {

  constructor(){
    super();
    this.state={
        items:[],
        searchInput:''
    }
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.onRemove=this.onRemove.bind(this);
    this.onToggle=this.onToggle.bind(this);
}

handleInput(e) {
    e.preventDefault();
    this.setState({
        searchInput: e.target.value
    })
}

handleSubmit(e) {
    e.preventDefault();
    (this.state.searchInput.trim())? //checking if the searchinput is empty and trimming the inputted string
    this.setState((prevState)=>{
        return{
            items: [...prevState.items,{itemname: prevState.searchInput.trim(),complete: false,key: Date.now()}],
            searchInput:''
        }
    })
    : alert('Please input text')
}

onRemove(item){
  let referenceid=this.state.items.indexOf(item);
  this.setState((prevState)=>{
    return {
      items: prevState.items.slice(0,referenceid).concat(prevState.items.slice(referenceid+1,prevState.items.length))
    }
  })
}

onToggle(item) {
  var referenceid=this.state.items.indexOf(item);
  var itemChange={...item};
  itemChange.complete=!itemChange.complete; //updating the completed key in the new items array without mutating
  this.setState((prevState)=>{
    return {
      items: prevState.items.slice(0,referenceid).concat(itemChange,prevState.items.slice(referenceid+1,prevState.items.length))
    }
  })
}

componentWillUpdate(nextProps,NextState) {
  localStorage.setItem('items',JSON.stringify(NextState.items))
}

componentWillMount() {
  (localStorage.getItem('items')) &&
  this.setState({
    items:JSON.parse(localStorage.getItem('items'))
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO APP</h1>
        </header>
        <div className="App-container">
          <SearchBar handleSubmit={this.handleSubmit} handleInput={this.handleInput} searchInput={this.state.searchInput}/>
          {(this.state.items.length===1)?
            (<p className="itemnumber"><strong>{this.state.items.length}</strong> item</p>)
          : 
            (<p className="itemnumber"><strong>{this.state.items.length}</strong> items</p>)
          }
          <div className="displaycontainer">
            {(this.state.items.length!==0)?
              (<DisplayItems items={this.state.items} onRemove={this.onRemove} onToggle={this.onToggle}/>)
            :
              <div>No Items</div>
            }
          </div>
        </div>      
      </div>
    );
  }
}

export default App;
