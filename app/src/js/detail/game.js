import React from 'react'
import {Route,withRouter} from 'react-router-dom'
import 'toSrc/css/detail/game.scss'

@withRouter
export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info: null
        }
        this.state.info = this.props.location.state.data
    }

    goVlive(){
        let data = {
            pathname: '/game/vlive/record',
            state: {data: this.state.info}
        }
        this.props.history.push(data)
    }

    goWlive(){
        let data = {
            pathname: '/game/wlive',
            state: {data: this.state.info}
        }
        this.props.history.push(data)
    }

    componentDidMount(){
        console.log(this.props.location.state)
        
    }
    render(){
        return(
            <div className="game">
                <div className="name-box">
                    <div className="visitingField">
                        <img src={this.state.info.visitingField.logoImg}/>
                        <span>{this.state.info.visitingField.name}</span>
                    </div>
                    <div className="vs">
                        <span>70</span>
                        <span>VS</span>
                        <span>67</span>
                    </div>
                    <div className="homeField">
                        <img src={this.state.info.homeField.logoImg}/>
                        <span>{this.state.info.homeField.name}</span>
                    </div>
                </div>

                <div className="v-live" onClick={this.goVlive.bind(this)}>
                    <span>视频直播</span> <i className="icon iconfont icon-previewright"></i><i className="icon iconfont icon-previewright"></i>
                </div>

                <div className="w-live" onClick={this.goWlive.bind(this)}>
                    <span>文字直播</span> <i className="icon iconfont icon-previewright"></i><i className="icon iconfont icon-previewright"></i>
                </div>
            </div>
        )
    }
}