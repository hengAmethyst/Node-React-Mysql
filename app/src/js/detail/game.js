import React from 'react'
import {Route} from 'react-router-dom'

export default class Game extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="game">
                <Route path="/game" component={Game}/>
            </div>
        )
    }
}