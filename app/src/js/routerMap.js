import React from 'react'
import {Link,HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Home from './home/home'







class RouteMap extends React.Component {
	constructor(props){
    super(props)
  }
  render(){ 
    return(
	    <Router>
		    <div>
          <Switch>
            <Route  path="/home"  component={Home}/>
            <Redirect from="/" to="/home" component={Home}/>
          </Switch>
        </div>
		 </Router>
    ) 
  } 
} 
export default RouteMap