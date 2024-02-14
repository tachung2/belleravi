import React from 'react';
import './About.css'

function About() {
    return(
        <div className="container">
            <div className="background">
                <img alt="mainlogo" src="img/mainlogo.png" className="mainlogo"></img>
                <div className="divline"> </div>
                <p>벨라비라는 마법 학교 컨셉을 기반으로 한 크루로, 방송 컨텐츠 제작에 필요한 다양한 지원을 제공합니다.
                <br />
                기술 개발부터 일러스트레이션까지, 멤버들이 자신의 아이디어를 실현하며 독창적이고 재미있는 방송을 만들 수 있도록 도와줍니다.
                <br />
                벨라비라는 각 멤버가 창의적인 컨텐츠를 통해 시청자에게 즐거움을 선사하며, 그 과정에서 개성을 발휘할 수 있는 환경을 조성합니다.
                <br />
                우리 크루는 시청자들에게 잊을 수 없는 즐거움을 제공할 것입니다.
                </p>
            </div>
            <div className="section">
            </div>
        </div>
    )
}

export default About;