import React from 'react'
import {Link,HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Home from './home/home'
import Detail from './detail/detail'








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
            <Route  path="/detail" component={Detail}/>
            <Redirect from="/" to="/home" component={Home}/>
          </Switch>
        </div>
		 </Router>
    ) 
  } 
} 
export default RouteMap