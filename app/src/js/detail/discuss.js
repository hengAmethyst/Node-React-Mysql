import React from 'react'
import 'toSrc/css/detail/discuss.scss'

const HotItem = (data) => (
    <div className="hot" key={Math.random()}>
        <div className="user-info">
            <img src={data.headImgUrl}/>
            <div className="name-box">
                <span>{data.nickName}</span>
                <span>
                    <i>{data.date}</i>
                    <i>{data.time}</i>
                </span>
            </div>
        </div>
        <div className="content">
            {data.content}
        </div>

        <div className="other">
            {data.backList.map((item,index) => (
                <div className="item" key={Math.random()}>
                    <span>{item.nickName}:</span>
                    <span>{item.content}</span>
                </div>
            ))}
            <div className="more">全部<i>{data.backList.length}</i>条回复>> </div>
        </div>
    </div>
)

export default class Discuss extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hotList:[
                {
                    nickName: 'jiangheng',
                    headImgUrl: 'static/img/GS_logo.jpg',
                    date: '7月20日',
                    time: '08:34',
                    content: '所肩负的上大街上的李开复司法局克劳福德方法将双方领导防腐剂阿萨德了沙发发斯蒂芬',
                    backList: [
                        {
                            nickName: 'wang',
                            content: '所肩负的上大街上的李开复司法局克劳福德方法将双方领导防腐剂阿萨德了沙发发斯蒂芬',

                        }
                    ]
                },
                {
                    nickName: 'jiangheng',
                    headImgUrl: 'static/img/GS_logo.jpg',
                    date: '7月20日',
                    time: '08:34',
                    content: '所肩负的上大街上的李开复司法局克劳福德方法将双方领导防腐剂阿萨德了沙发发斯蒂芬',
                    backList: [
                        {
                            nickName: 'wang',
                            content: '所肩负的上大街上的李开复司法局克劳福德方法将双方领导防腐剂阿萨德了沙发发斯蒂芬',

                        }
                    ]
                }
            ]
        }
    }

    render(){
        return(
            <div className="discuss">
                <div className="item1">
                    <div className="title">
                        <span>精彩热评</span>
                    </div>
                    {this.state.hotList.map((item,index) => (
                        HotItem(item,'@')
                    ))}
                </div>
                <div className="item2">
                    <div className="title">
                        <span>全部评论</span>
                        <span>12</span>
                    </div>
                    {this.state.hotList.map((item,index) => (
                        HotItem(item,'#')
                    ))}
                </div>
                <div className="item3">
                    <input placeholder="我来说两句"/>
                </div>
            </div>
        )
    }
}