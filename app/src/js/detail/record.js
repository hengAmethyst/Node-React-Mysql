import React from 'react'
import {Route,withRouter} from 'react-router-dom'
import 'toSrc/css/detail/record.scss'

const Best = (data) => (
    <div className="score">
        <div className="left">
            <div className="player">
                <img src={data.v.img}/>
                <span>{data.v.name}</span>
            </div>
            <div className="data">
                {data.v.num}
            </div>
        </div>
        <div className="right">
            <div className="player">
                <img src={data.h.img}/>
                <span>{data.h.name}</span>
            </div>
            <div className="data">
                {data.h.num}
            </div>
        </div>
    </div>
)

const TeamRecord = (data) => (
    <div className="box">
        <div className="left">
            <div className="header">
                <span>号码</span>
                <span>球员</span>
            </div>
            {data.map((item,index) => (
                <div className="content" key={index}>
                    <span>{item.number}</span>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
        <div className="right">
            <div className="header">
                <ul>
                    <li>首发</li>
                    <li>时间</li>
                    <li>得分</li>
                    <li>篮板</li>
                    <li>助攻</li>
                    <li>投篮</li>
                    <li>三分</li>
                    <li>罚球</li>
                    <li>抢断</li>
                    <li>盖帽</li>
                    <li>失误</li>
                    <li>犯规</li>
                </ul>
            </div>
            <div className="content">
                {data.map((item,index) => (
                <ul key={index}>
                    <li>{item.fir}</li>
                    <li>{item.time}</li>
                    <li>{item.points}</li>
                    <li>{item.backboard}</li>
                    <li>{item.assist}</li>
                    <li>{item.shot}</li>
                    <li>{item.three}</li>
                    <li>{item.freeThrow}</li>
                    <li>{item.steal}</li>
                    <li>{item.block}</li>
                    <li>{item.fault}</li>
                    <li>{item.foul}</li>
                </ul>
                ))}
            </div>
        </div>
    </div>
)


@withRouter
export default class Record extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info: this.props.location.state.data,
            list1: ['球队','Q1','Q2','Q3','Q4','总分'],
            list2: ['23','32','21','22','98'],
            list3: ['21','34','30','21','106'],
            nowTeam: 1,
            bestShow: {
                score: {
                    v: {
                        img:'',
                        name: '詹姆斯',
                        num: 17
                    },
                    h: {
                        img:'',
                        name: '杜兰特',
                        num: 20
                    }
                },
                backboard: {
                    v: {
                        img: '',
                        name: '詹姆斯',
                        num: 8
                    },
                    h: {
                        img: '',
                        name: '格林',
                        num: 5
                    }
                },
                assist: {
                    v: {
                        img:'',
                        name: '詹姆斯',
                        num: 9
                    },
                    h: {
                        img:'',
                        name: '库里',
                        num: 4
                    }
                }
            },
            playerRecord: {
                v: [
                    {number: 23,name:'詹姆斯',points: 17,backboard: 9,assist: 6,shot: '6/10',three: '1/3',freeThrow: '4/4',steal: 1,block: 1,fault: 3,foul: 2,time: 23,fir: '是'}
                ],
                h: [
                    {number: 35,name:'杜兰特',points: 20,backboard: 9,assist: 6,shot: '6/10',three: '1/3',freeThrow: '4/4',steal: 1,block: 1,fault: 3,foul: 2,time: 23,fir: '是'}
                ]
            }
        }
    }
    componentDidMount(){
    }

    changeTeam(e){
        console.log(e)
        this.setState({
            nowTeam: e
        })
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
                    <div className="top">
                        <span>赛况</span>
                    </div>
                    <ul className="list1">
                        {this.state.list1.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <ul className="list2">
                            <li>
                                <img src={this.state.info.visitingField.logoImg}/>
                            </li>
                        {this.state.list2.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <ul className="list3">
                            <li>
                                <img src={this.state.info.homeField.logoImg}/>
                            </li>
                        {this.state.list3.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                {/* 本场最佳 */}
                <div className="item3">
                    <div className="top">
                        <span>本场最佳</span>
                    </div>
                    <div className="title">
                        <span>得分</span>
                    </div>
                    {Best(this.state.bestShow.score)}
                    <div className="title">
                        <span>篮板</span>
                    </div>
                    {Best(this.state.bestShow.backboard)}
                    <div className="title">
                        <span>助攻</span>
                    </div>
                    {Best(this.state.bestShow.assist)}
                </div>
                {/* 球员数据 */}
                <div className="item4">
                    <div className="title">
                        <span>球员数据</span>
                        <button style={{background:this.state.nowTeam==1?'linear-gradient(to right,red,black)':'#ccc'}} onClick={this.changeTeam.bind(this,1)}>骑士</button>
                        <button style={{background:this.state.nowTeam==2?'linear-gradient(to right,red,black)':'#ccc'}} onClick={this.changeTeam.bind(this,2)}>勇士</button>
                    </div>
                    {this.state.nowTeam==1&&TeamRecord(this.state.playerRecord.v)}
                    {this.state.nowTeam==2&&TeamRecord(this.state.playerRecord.h)}
                </div>
            </div>
        )
    }
}