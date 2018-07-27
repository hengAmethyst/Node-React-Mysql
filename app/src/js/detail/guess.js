import React from 'react'
import 'toSrc/css/detail/guess.scss'

export default class Guess extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="guess">
                <div className="title">
                    <span>暂未数据</span>
                </div>
            </div>
        )
    }
}