import React from 'react'
import 'toSrc/css/components/common/header.scss'

export default class Head extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {
                gameInfo:{
                    date:{
                        month: 7,
                        day: 11
                    },
                    whichDay: '星期一',
                    gameNum: 2
                },
                gameList:
                [
                    {
                        visitingField: {logoImg: 'static/img/CLE_logo.jpg',name: '骑士',wf:'12-3'},
                        homeField: {logoImg: 'static/img/GS_logo.jpg',name: '勇士',wf:'11-4'},
                        score: {visiting: 76,home: 84,lead:0},
                        time: {quarter: '第四节', leftTime: '03:21'}
                    }
                    ,{
                        visitingField: {logoImg: 'static/img/CLE_logo.jpg',name: '骑士',wf:'12-3'},
                        homeField: {logoImg: 'static/img/GS_logo.jpg',name: '勇士',wf:'11-4'},
                        score: {visiting: 76,home: 84,lead:1},
                        time: {quarter: '第四节', leftTime: '03:21'}
                    }
                ],
                pageIndex: 4,
                isFirst: true,
                isLast: false
            }
        }
    }
    /**
     * @param 
     *  'pre','next'
     */
    getGameInfo(param){
        
    }
    // 改变按钮颜色，使按钮变灰，意味不能点击
    disableClick(param){
        if(param){
            return '#7f7f7f'
        }
        else{
            return '#fff'
        }
    }
    // 点击跳转game详情
    intoGame(param){
        console.log('1')
        let location = {
            pathname: '/game',
            state: {fromDashboard: true}
        }
        location.href = '#game'
    }





    
    render(){
        let getColor = (item,index) => {
            if(item.score.lead == index){
                return 'red'
            }
            else
            {
                return '#000'
            }
        }
        return(
            <div className="box">
                <div className="game-wrap">
                    {/* 日期选择 */}
                    <div className="Date-pick">
                        <div className="date-box">
                            <i className="icon iconfont icon-previewleft" style={{color:this.disableClick(this.state.data.isFirst)}}></i>
                            <div className="date-chose">
                                <span>{this.state.data.gameInfo.date.month}月 {this.state.data.gameInfo.date.day}日</span>
                                <span>{this.state.data.gameInfo.whichDay}</span>
                            </div>
                            <i className="icon iconfont icon-previewright" style={{color:this.disableClick(this.state.data.isLast)}} onClick={this.getGameInfo}></i>
                        </div>
                        <div className="game-num">
                            <span>{this.state.data.gameInfo.gameNum}</span>场比赛
                        </div>
                    </div>
                    {this.state.data.gameList.map((item,index) => (
                        <div className="game-box" key={index} onClick={this.intoGame}>
                            <div className="visiting-field">
                                <img src={item.visitingField.logoImg}/>
                                <span>{item.visitingField.name}</span>
                                <span>{item.visitingField.wf}</span>
                            </div>
                            <div className="score">
                                <p>
                                    <span style={{color:getColor(item,0)}}>{item.score.visiting}</span>
                                    <span> - </span>
                                    <span style={{color:getColor(item,1)}}>{item.score.home}</span>
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