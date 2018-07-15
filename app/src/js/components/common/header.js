import React from 'react'
import 'toSrc/css/components/common/header.scss'
export default class Head extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [{
                visitingField: {logoImg: 'static/img/CLE_logo.jpg',name: '骑士',wf:'12-3'},
                homeField: {logoImg: 'static/img/GS_logo.jpg',name: '勇士',wf:'11-4'},
                score: {visiting: 76,home: 84},
                time: {quarter: '第四节', leftTime: '03:21'}
            },{
                visitingField: {logoImg: 'static/img/CLE_logo.jpg',name: '骑士',wf:'12-3'},
                homeField: {logoImg: 'static/img/GS_logo.jpg',name: '勇士',wf:'11-4'},
                score: {visiting: 76,home: 84},
                time: {quarter: '第四节', leftTime: '03:21'}
            },{
                visitingField: {logoImg: 'static/img/CLE_logo.jpg',name: '骑士',wf:'12-3'},
                homeField: {logoImg: 'static/img/GS_logo.jpg',name: '勇士',wf:'11-4'},
                score: {visiting: 76,home: 84,lead:1},
                time: {quarter: '第四节', leftTime: '03:21'}
            }]
        }
    }
    render(){
        return(
            <div className="box">
                <div className="game-wrap">
                    {this.state.data.map((item,index) => (
                        <div className="game-box" key={index}>
                            <div className="visiting-field">
                                <img src={item.visitingField.logoImg}/>
                                <span>{item.visitingField.name}</span>
                                <span>{item.visitingField.wf}</span>
                            </div>
                            <div className="score">
                                <p>
                                    <span style={{color:item.score.lead==1?'red':'#000'}}>{item.score.visiting}</span>
                                    <span> - </span>
                                    <span>{item.score.home}</span>
                                </p>
                                <p>{item.time.quarter}</p>
                                <p>{item.time.leftTime}</p>
                            </div>
                            <div className="home-field">
                                <img src={item.homeField.logoImg}/>
                                <span>{item.homeField.name}</span>
                                <span>{item.homeField.wf}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <span className="username">登录</span> */}
            </div>
        )
    }
}