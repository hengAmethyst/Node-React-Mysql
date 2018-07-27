import React from 'react'
import 'toSrc/css/detail/news.scss'
import Discuss from './discuss.js'

export default class News extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {
                title: '詹姆斯君临天下',
                content: '勒布朗·詹姆斯（LeBron James），1984年12月30日出生在美国俄亥俄州阿克伦，美国职业篮球运动员，司职小前锋，绰号“小皇帝”，效力于NBA洛杉矶湖人队。詹姆斯在2003年NBA选秀中于首轮第1顺位被克利夫兰骑士队选中。在2009年与2010年蝉联NBA最有价值球员（MVP）。2010年，詹姆斯转会至迈阿密热火队。2012年，詹姆斯得到NBA个人生涯的第3座常规赛MVP，第1个总冠军和总决赛MVP。并代表美国男篮获得了伦敦奥运会金牌，追平了迈克尔·乔丹在1992年所创的纪录。2013年，詹姆斯获得第4个常规赛MVP、第2个NBA总冠军和第2个总决赛MVP，实现两连冠。2014年，詹姆斯回归骑士。2016年，詹姆斯带领骑士逆转战胜卫冕冠军勇士获得队史首个总冠军和个人第3个总决赛MVP。2018年7月10日，詹姆斯正式与湖人签下4年1.53亿美元的合同。 [1] 詹姆斯篮球智商极高、突破犀利，拥有出色的视野和传球技术。被认为是NBA有史以来最为全能的球员之一'
            }
        }
    }

    render(){
        return(
            <div className="news">
                <div className="header">
                    <span>{this.state.data.title}</span>
                </div>
                <div className="time">
                    <span>7月21日 17:11</span>
                </div>
                <div className="content">
                    <div className="img1">
                        <img src="static/img/banner3.jpg"/>
                    </div>
                    <div className="article">
                        {this.state.data.content}
                    </div>
                </div>
                <Discuss/>
            </div>
        )
    }
}