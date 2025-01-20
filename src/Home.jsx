import React from "react";
import Main_image from "./Main_img";
import { Link } from 'react-router-dom';
import './Home.css'

function Home(){
    return(
        <div className="Home">
            <div className='main_img'>
                <Main_image/>
            </div>
            <div className='content'>
                {/*  */}
                <div className="content_box">
                <div className="img_1">
                        <img src="/images/nav_img.png"/>
                </div>

                <div className="best_product">
                        <ul className="content_nav">
                            <li className="nav1">
                                <p>#풀프레임 <br/>
                                미러리스</p>
                            </li>
                            <li className="nav2">
                                <p>#비즈니스 <br/>
                                무한잉크젯</p>
                            </li>
                            <li className="nav3">
                                <p>#DSLR <br/>
                                스테디셀러
                                </p>
                            </li>
                        </ul>
                        <div className="nav_text">
                            <p>포착과 추적을 정밀하게<br/>
                            또 안정적으로
                            </p>
                        </div>
                        <ul className="img">
                            <li>
                                <img src="/images/nav_img1.png"/>
                                <p>EOS R Series</p>
                            </li>
                            <li>
                                <img src="/images/nav_img2.png"/>
                                <p>RF70-Series</p>
                            </li>
                        </ul>
                    </div> 
                </div>
            {/*  */}
                <div className="product">
                    <h3>PRODUCT</h3>
                        <div className="product_list">
                            <ul>
                                <li>
                                    <img src='images/product_img1.png'/>
                                    <h4>EOS R6 Mark 2</h4>
                                    <p>2,699,000원</p>
                                </li>
                                <li>
                                    <img src='images/product_img2.png'/>
                                    <h4>EOS R5 Mark 2</h4>
                                    <p>5,499,000원</p>
                                </li>
                                <li>
                                    <img src='images/product_img3.png'/>
                                    <h4>EOS R8 (Body)</h4>
                                    <p>1,799,000원원</p>
                                </li>
                                <li>
                                    <img src='images/product_img4.png'/>
                                    <h4>EOS R10 (Body)</h4>
                                    <p>1,299,000원</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="event"> 
                        <h3>EVENT</h3>
                        <div className="event_box">
                            <div className="event_left">
                                <ul>
                                    <li>
                                        <img src="/images/Event_img1.png"/>
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
                                        <img src="/images/Event_img2.png"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='footer'>
                <ul className="footer_nav">
                    <li>1.매장안내</li>
                    <li>2.FAQ</li>
                    <li>3.공지사항</li>
                    <li>4.회사소개</li>
                    <li>5.매거진</li>
                    <li>6.임직원 인증</li>
                </ul>
                <div className="footer_box">
                    <div className="footer_left">
                        <ul>
                            <li>이용약관</li>
                            <li>개인정보 처리방침</li>
                            <li>영상정보처리기기운영관리방침</li>
                        </ul>
                        <p>
                        캐논코리아(주) 대표자: 박정우,코시미즈 요시유키 | 사업자등록번호 120-81-15636 | 통신판매 번호: 강남-01282<br/>
                        주소 : 서울특별시 강남구 테헤란로 607(삼성동) | 복합기 * 카메라 고객상담실 : 1533-3355<br/>
                        Copyright &copy; CANON KOREA All Rights reserved
                        </p>
                        <ul className="footer_left_img">
                            <li>
                                <img src="/images/footer_img1.png"/>
                                <p>가족친화 우수기업업</p>
                            </li>
                            <li>
                                <img src="/images/footer_img2.png"/>
                                <p>소비자 중심 경영</p>
                            </li>
                            <li className="footer_left_img_3">
                                <img src="/images/footer_img3.png"/>
                                <p>[인증범위] 캐논코리아 온라인 쇼핑몰 운영 (e스토어, 비즈몰)<br/>
                                   [유효기간] 2024.11.20 ~ 2027.11.19
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_right">
                        <h4>SNS</h4>
                        <ul>
                            <li><img src="images/instagram.png"/></li>
                            <li><img src="images/facebook.png"/></li>
                            <li><img src="images/naver_blog.png"/></li>
                            <li><img src="images/kakaotalk.png"/></li>
                            <li><img src="images/kakao_story.png"/></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Home;