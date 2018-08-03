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
    (this.state.searchInput.trim())?
    this.setState((prevState)=>{
        return{
            items: [...prevState.items,{itemname: prevState.searchInput.trim(),complete: false,key: Date.now()}],
            searchInput:''
        }
    })
    : alert('type input')
}

onRemove(){

}

onToggle(item) {
  console.log(this.state.items.indexOf(item))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO APP</h1>
        </header>
        <div>
          <SearchBar handleSubmit={this.handleSubmit} handleInput={this.handleInput} searchInput={this.state.searchInput}/>
          {(this.state.items.length===1)?
            (<p><strong>{this.state.items.length}</strong> item</p>)
          : 
            (<p><strong>{this.state.items.length}</strong> items</p>)
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
