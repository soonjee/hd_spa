import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.scss';

const SLIDE = [
    { id: 1, title: "01 Lorem ipsum dolor sit amet consectetur.", content: "현대엘베가 만든 새로운 길을 어쩌고", link: "/sub01" },
    { id: 2, title: "02 Lorem ipsum dolor sit amet consectetur.", content: "현대엘베가 만든 새로운 길을 어쩌고", link: "/sub02" },
    { id: 3, title: "03 Lorem ipsum dolor sit amet consectetur.", content: "현대엘베가 만든 새로운 길을 어쩌고", link: "/sub03" }
]


const Main = () => {
    const [num, setNum] = useState();
    const MSG = useRef(null);
    return (
        <section className='Main'>
            <div className='mainVisual'>
                <Swiper
                    loop={true}
                    //slideActiveClass='on'
                    onSlideChange={it => { setNum(it.realIndex); console.log(it) }}
                    className='mainSlider'
                    ref={MSG}
                >

                    {
                        SLIDE.map((slide, idx) => {
                            return (
                                <SwiperSlide className={`itm itm0${slide.id} ${num === idx ? 'on' : ''}`} key={slide.id}>
                                    <div className="content">
                                        <p>{slide.title}</p>
                                        <div className='des'>
                                            {slide.content}
                                        </div>
                                        <Link to={slide.link}>
                                            자세히보기
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <ul className='dots'>
                {
                    SLIDE.map((dot, idx) => <li className={num === idx ? 'on' : ''}
                        onClick={() => MSG.current.swiper.slideTo(idx + 1)}
                    >{dot.id}</li>)
                }
            </ul>
            <div className="tab">
                {SLIDE[num]?.title}
            </div>
            <div className="slideNum">
                {num + 1} / {SLIDE.length}
            </div>
            {console.log(MSG.current)}
            <button onClick={() => MSG.current.swiper.slidePrev()}>뒤로가기</button>
            <button onClick={() => MSG.current.swiper.slideNext()}>앞로가기</button>
        </section>
    )
}
export default Main