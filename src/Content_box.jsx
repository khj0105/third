import React from 'react';
import {Route,Link} from 'react-router-dom';
// import Best_product from './component_content_box/best_product';
// import Img1 from './component_content_box/img1';
// import Img2 from './component_content_box/img2';

function Content_box(){
    return(
        <div className='content_box'>
         <div className="img_1">
            {/* <Link to='./component_content_box/best_product'> */}
                <img src={process.env.PUBLIC_URL +"/images/nav_img.png"}/>
            {/* </Link> */}
         </div>

                <div className="best_product">
                         <ul className="content_nav">{/* 자바스크립트 탭 메뉴 또는 부트스트랩 탭*/}
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
                                <img src={process.env.PUBLIC_URL +"/images/nav_img1.png"}/>
                                <p>EOS R Series</p>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/images/nav_img2.png"}/>
                                <p>RF70-Series</p>
                            </li>
                        </ul>
                    </div>
                {/* <div>
                    <Route path="./component_content_box/best_product" component={Best_product}/>
                </div> */}
            </div>
    )}
                
export default Content_box;