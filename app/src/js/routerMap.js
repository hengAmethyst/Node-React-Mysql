import React from 'react'
import {Link,HashRouter as Router,Switch,Route,Redirect,hashHistory} from 'react-router-dom'
import Home from './home/home'
import Game from './detail/game'
import Vlive from './detail/vLive'







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
            <Route exact path="/game" component={Game}/>
            <Route path="/game/vlive" component={Vlive}/>
          </Switch>
        </div>
		 </Router>
    ) 
  } 
} 
export default RouteMap