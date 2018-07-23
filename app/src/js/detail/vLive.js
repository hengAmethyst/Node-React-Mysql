import React from 'react'
import {Route,withRouter} from 'react-router-dom'
import 'toSrc/css/detail/vLive.scss'
import Record from 'toSrc/js/detail/record.js'

@withRouter
export default class Vlive extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tab1: {color:'blue',bg:'blue'},
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
        },)
        let data = {
            pathname: '/game/vlive/record',
            state: {data: this.state.info}
        }
       switch(e){
           case 1: 
           this.props.history.push(data);
           this.setState({tab1: {color:'blue',bg:'blue'}});
           break;
           case 2: this.setState({tab2: {color:'blue',bg:'blue'}});
           this.props.history.push('/game/vlive/hot');
           break;
           case 3: this.setState({tab3: {color:'blue',bg:'blue'}});
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
                <Route path="/game/vlive/hot" component = {() => (
                    <div>hot</div>
                )}/>
                <Route path="/game/vlive/guess" component = {() => (
                    <div>guess</div>
                )}/>

            </div>
        )
    }
}