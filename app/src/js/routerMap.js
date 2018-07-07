import React from 'react'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'


class Home extends React.Component{
  render(){
    return(<h2> home </h2>)
  }
}

class List extends React.Component{
  render(){
    return(<h2> list </h2>)
  }
}

class Detail extends React.Component{
  render(){
    return(<h2> detail </h2>)
  }
}






class RouteMap extends React.Component {
	constructor(props){
    super(props)
  }
  render(){ 
    return(
	    <Router forceRefresh={true}>
		    <div>
          <ul>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/list">list</Link></li>
            <li><Link to="/detail">detail</Link></li>
          </ul>
          <Route exact path="/home"  Component={Home}/>
          <Route exact path="/list"   Component={List}/>
          <Route  path="/detail" Component={Detail}/>
        </div>
		 </Router>
    ) 
  } 
} 
export default RouteMap