import React from 'react'
import 'toSrc/css/detail/vLive.scss'

export default class Vlive extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tab1: {color:'#444',bg:'#fff'},
            tab2:  {color:'#444',bg:'#fff'},
            tab3:  {color:'#444',bg:'#fff'}
        }
    }

    moveTabColor(e){
       
        this.setState({
            tab1:  {color:'#444',bg:'#fff'},
            tab2:  {color:'#444',bg:'#fff'},
            tab3:  {color:'#444',bg:'#fff'}
        },)
       switch(e){
           case 1: this.setState({tab1: {color:'blue',bg:'blue'}});
           break;
           case 2: this.setState({tab2: {color:'blue',bg:'blue'}});
           break;
           case 3: this.setState({tab3: {color:'blue',bg:'blue'}});
           break;
       }
        
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
            </div>
        )
    }
}