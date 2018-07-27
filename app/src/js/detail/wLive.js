import React from 'react'
import 'toSrc/css/detail/wLive.scss'
import Discuss from './discuss'

export default class Wlive extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info: this.props.location.state.data
        }
    }

    render(){
        return(
            <div className="wlive">
                <div className="wlive-item1">
                    <div className="wlive-item1-left">
                        <img src={this.state.info.visitingField.logoImg}/>
                        <span>{this.state.info.visitingField.name}</span>
                    </div>
                    <div className="wlive-item1-center">
                        <span><i>{this.state.info.time.quarter}</i><i>{this.state.info.time.leftTime}</i></span>
                        <span>
                            <i>{this.state.info.score.visiting}</i>
                            <i>-</i>
                            <i>{this.state.info.score.home}</i>
                        </span>
                        <span>NBA常规赛</span>
                    </div>
                    <div className="wlive-item1-right">
                        <img src={this.state.info.homeField.logoImg}/>
                        <span>{this.state.info.homeField.name}</span>
                    </div>
                </div>
                {/* 文字直播显示区域 */}
                <div class="wlive-item2">
                    <div className="content">
                        <div className="left">
                            <span>79:87</span>
                            <span>第四节 03:12</span>
                        </div>
                        <div className="right">
                            <span>詹姆斯上篮打进</span>
                        </div>
                    </div>
                </div>
                <Discuss/>

            </div>
        )
    }
}