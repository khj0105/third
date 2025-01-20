import Carousel from 'react-bootstrap/Carousel';
import './Main_img.css';

function Main_image() {
  const box1 = {width:'1920px',height:'900px'}
  const box2 = {width:'1920px',height:'900px'}
  const box3 = {width:'1920px',height:'900px'}
  return (
    <div id='main_img'>
    <Carousel fade>
      <Carousel.Item interval={1000}> 
        <div style={box1}>
          <div className='txt_area'>
            <h3>이스토어 겨울 기획전</h3>
            <p>WINTER FESTA 미러리스 구매 시 패키지 선물을 증정해 드립니다!</p>
          </div>
          <img
            className='main_img'
            src='/images/main_img.png'
            alt='first slide'
          />
        </div>
        {/* <Carousel.Caption>
          <h3>이스토어 겨울 기획전</h3>
          <p>WINTER FESTA 미러리스 구매 시 패키지 선물을 증정해 드립니다!</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1000}> 
        <div style={box2}>
        <div className='txt_area1'>
            <h3>EOS R 시스템 5종 <br/>
              공식 가격 인하
            </h3>
            <p>지금 바로 인하 가격을 확인하세요</p>
          </div>
          <img
            className='main_img'
            src='/images/main_img1.png'
            alt='first slide'
          />
        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1000}> 
        <div style={box3}>
        <div className='txt_area2'>
            <h3>윈터페스타 <br/>
              패키지선물물
            </h3>
          </div>
          <img
            className='main_img'
            src='/images/main_img2.png'
            alt='first slide'
          />
        </div>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Main_image;