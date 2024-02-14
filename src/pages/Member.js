import React from 'react';
import Profile from '../component/Profile';
import './Member.css'

function Member() {
    return (
        <div className="member_container">
            <div className="member_title">MEMBER</div>
            <div className="first_title">Leaders</div>
            <div className="first_container">
                <Profile name="온더" image="img/온더.jpg" color="255, 205, 156" tag="팀장"/>
                <Profile name="타청" image="img/SD타청.jpg" color="58, 129, 255" tag="부팀장"/>
            </div>
            <div className="second_title">crews</div>
            <div className="second_container">
                <Profile name="하론" image="img/하론.jpg" color="93, 148, 57" tag="크루원"/>
                <Profile name="아코" image="img/아코.jpg" color="68, 68, 68" tag="크루원"/>
                <Profile name="로럼" image="img/로럼.jpg" color="102, 60, 132" tag="개발원"/>
                <Profile name="셔알" image="img/셔알.jpg" color="137, 42, 46" tag="크루원"/>
                <Profile name="리나" image="img/리나.jpg" color="248, 145, 162" tag="일러"/>
            </div>

        </div>
    )
}
export default Member;