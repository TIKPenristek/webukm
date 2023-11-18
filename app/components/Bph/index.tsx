"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Ketua umum',
        name: 'M alhakim',
        imgSrc: '/images/bph/kosong.jpg',
    },
    {
        profession: 'Waketum',
        name: 'M sohibul',
        imgSrc: '/images/bph/sohibul.jpg',
    },
    {
        profession: 'Div media',
        name: 'Helni',
        imgSrc: '/images/bph/helni.jpg',
    },
    {
        profession: 'Bendahara',
        name: 'Purti a',
        imgSrc: '/images/bph/putri.jpg',
    },
    {
        profession: 'Div tik',
        name: 'Tri',
        imgSrc: '/images/bph/tri.jpg',
    },
    {
        profession: 'Div humas',
        name: 'Ardalia',
        imgSrc: '/images/bph/arda.jpg',
    },
    {
        profession: 'Div tik',
        name: 'Hanafi',
        imgSrc: '/images/bph/kosong.jpg',
    },
    {
        profession: 'Sekertaris',
        name: 'Siti nur',
        imgSrc: '/images/bph/kosong.jpg',
    },
    
    {
        profession: 'Bendahara',
        name: 'Rara',
        imgSrc: '/images/bph/kosong.jpg',
    },
    {
        profession: 'Div humas',
        name: 'Aprilia',
        imgSrc: '/images/bph/kosong.jpg',
    },
   
    {
        profession: 'Div media',
        name: 'Faijri',
        imgSrc: '/images/bph/kosong.jpg',
    },
    {
        profession: 'Div Pendidikan',
        name: 'Elsa',
        imgSrc: '/images/bph/kosong.jpg',
    },
    {
        profession: 'Div Pendidikan',
        name: 'Dian',
        imgSrc: '/images/bph/dian.jpg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-bph py-5">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2"> BPH UKM PENRISTEK</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">periode 2023/2024</h3>
                        <h3 className="text-2xl sm:text-3xl font-bold text-black opacity-25 lg:-mr-32 my-2"> Yukk kenalan dulu sama badan pengurus harian ukm penristek</h3>
                    </div>

                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-10 my-10 text-center shadow-xl rounded-3xl'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={182} height={182} className="inline-block m-auto img-bph" />
                                    <Image src={'/images/bph/ig2.jpg'} alt="greenbg" width={120} height={120} className=" absolute inline-block position-linkedin rounded-full w-25 mb-5 md:mr-0 mr-16 " />
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
