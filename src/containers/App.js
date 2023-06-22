import React, {Component} from 'react'; 
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; 



class App extends Component{
    constructor(){
        super()
        this.state ={
            robots: [],
            searchField: ''
        }
        console.log('constructor'); 
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{return response.json()})
        .then(users =>{this.setState({ robots: users});})
        console.log('didmount'); 
    }

    onSearchChange = (event) => {
        if (event.target.value.length > 0 && event.keyCode === 13){
            this.setState({searchField: event.target.value})
        }
        else if (event.target.value.length < 0 ) {
            this.setState({searchField: ''});
        }
        console.log('onsearchchange'); 
    }
   
    render(){
        const { robots, searchField } = this.state; 
        console.log('render'); 
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        }
        ) 
{    
         return (
                <div className='tc' >
                    <header style={{ position: 'sticky', top: '0', zIndex:'1'}}>
                        <h1 className='tc'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </header >
                    
                     <CardArray robots = {filteredRobots} />
                    
                </div>
                 
            ); }
       
    }
}
/* 

fetch is a method from the window object 
when reffering to states of the app reffer to this.state.statename (this.state.robots or this.state.searchField)
computer reading
1. Constructor
2. Render 
3.Didmount will run render again because a state has been changed
4.Render */


export default App;
