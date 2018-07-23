import React from 'react'
import {Route,withRouter} from 'react-router-dom'
import 'toSrc/css/detail/record.scss'


@withRouter
export default class Record extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info: this.props.location.state.data,
            list1: ['球队','Q1','Q2','Q3','Q4','总分'],
        }
    }
    componentDidMount(){
    }

    render(){
        return (
            <div className="record">
                <div className="item1">
                    <div className="left">
                        <img src={this.state.info.visitingField.logoImg}/>
                        <span>{this.state.info.visitingField.name}</span>
                    </div>
                    <div className="center">
                        <span><i>{this.state.info.time.quarter}</i><i>{this.state.info.time.leftTime}</i></span>
                        <span>
                            <i>{this.state.info.score.visiting}</i>
                            <i>-</i>
                            <i>{this.state.info.score.home}</i>
                        </span>
                        <span>NBA常规赛</span>
                    </div>
                    <div className="right">
                        <img src={this.state.info.homeField.logoImg}/>
                        <span>{this.state.info.homeField.name}</span>
                    </div>
                </div>
                {/* 赛况 */}
                <div className="item2">
                    <h2>赛况</h2>
                    <ul>
                        {this.state.list1.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}