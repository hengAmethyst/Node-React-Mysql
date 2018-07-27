import React from 'react'
import {Route,withRouter} from 'react-router-dom'
import 'toSrc/css/detail/vLive.scss'
import Record from 'toSrc/js/detail/record.js'
import Discuss from 'toSrc/js/detail/discuss.js'
import Guess from 'toSrc/js/detail/guess.js'

@withRouter
export default class Vlive extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tab1: {color:'#f6070c',bg:'#f6070c'},
            tab2:  {color:'#444',bg:'#fff'},
            tab3:  {color:'#444',bg:'#fff'},
            info: this.props.location.state.data,

        }
    }

    moveTabColor(e){
       
        this.setState({
            tab1:  {color:'#444',bg:'#fff'},
            tab2:  {color:'#444',bg:'#fff'},
            tab3:  {color:'#444',bg:'#fff'}
        })
        let data = {
            pathname: '/game/vlive/record',
            state: {data: this.state.info}
        }
       switch(e){
           case 1: 
           this.props.history.push(data);
           this.setState({tab1: {color:'#f6070c',bg:'#f6070c'}});
           break;
           case 2: this.setState({tab2: {color:'#f6070c',bg:'#f6070c'}});
           this.props.history.push('/game/vlive/discuss');
           break;
           case 3: this.setState({tab3: {color:'#f6070c',bg:'#f6070c'}});
           this.props.history.push('/game/vlive/guess');
           break;
       }
        
    }
    componentDidMount(){
        console.log(this.props.location.state.data)
    }
    render(){
        return(
            <div className="live">
                <div className="video-box">
                    <video src="static/img/video.mp4" controls="controls" width="85%">
                        您的浏览器不支持 video 标签。
                    </video>
                </div>
                <div className="table">
                    <ul>
                        <li onClick={this.moveTabColor.bind(this,1)}>
                            <span style={{color: this.state.tab1.color}}>数据</span>
                            <span style={{background: this.state.tab1.bg}}></span>
                        </li>
                        <li onClick={this.moveTabColor.bind(this,2)}>
                            <span style={{color: this.state.tab2.color}}>热议</span>
                            <span style={{background: this.state.tab2.bg}}></span>
                        </li>
                        <li onClick={this.moveTabColor.bind(this,3)}>
                            <span style={{color: this.state.tab3.color}}>竞猜</span>
                            <span style={{background: this.state.tab3.bg}}></span>
                        </li>
                    </ul>
                </div>
                <Route path='/game/vlive/record' component = {Record}/>
                <Route path="/game/vlive/discuss" component = {Discuss}/>
                <Route path="/game/vlive/guess" component = {Guess}/>
            </div>
        )
    }
}