import React from 'react';
import {Route,Link} from 'react-router-dom'

function Event(){
    return(
<div className="event"> 
        <h3>EVENT</h3>
        <div className="event_box">
            <div className="event_left">
                <ul>
                    <li>
                        <img src={process.env.PUBLIC_URL +"/images/Event_img1.png"}/>
                        <h4>캐논e스토어</h4>
                        <p className="middle">PowerShot V10 전용 렌즈캡 증정 이벤트</p>
                        <p className="small">이벤트 기간 2025-01-03 - 2025-06-30</p>
                    </li>
                </ul>
            </div>
            <div className="event_right">
                <ul>
                    <li>
                        <h4>캐논e스토어</h4>
                        <p className="middle">VR 렌즈 3종 추가 구매 프로모션</p>
                        <p className="small">이벤트 기간 2024-11-27 - 2025-02-28</p>
                        <img src={process.env.PUBLIC_URL +"/images/Event_img2.png"}/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)}
export default Event;