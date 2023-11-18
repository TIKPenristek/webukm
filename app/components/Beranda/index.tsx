"use client"
import Image from "next/image";
import Daftarform from './Daftar';
import React from 'react';


const Beranda = () => {
    return (
        <div id="Beranda" className='mx-auto max-w-7xl my-10 sm:py-1 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                <div className="w-full flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <div className="flex ...">
            <div className="flex-auto-1">
              <img
                src="/images/Beranda/logout.png"
                className="h-14 w-auto mt-4 lg:mt-2 pb-3"
                alt=""
              />
              </div>
              <div className="flex-auto-1">
              <img
                src="/images/Beranda/logocom.png"
                className="h-14 w-auto mt-4 lg:mt-2 pb-3 mx-5"
                alt=""
              />
              </div>
              <div className="flex-auto-1">
              <img
                src="/images/logo1.png"
                className="h-14 w-auto mt-4 lg:mt-2 pb-3 "
                alt=""
              />

              </div>
              
              <div className="flex-auto-1">
              <img
                src="/images/Beranda/logokampus.png"
                className="h-14 w-auto mt-4 lg:mt-2 pb-3 mx-7"
                alt=""
              />
              </div>
            </div>
            </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:xl font-bold text-darkpurple'>
                        UKM PENDIDIKAN RISET <strong>DAN TEKNOLOGI</strong>.
                        </h1>
                        <p className="mt-2 lg:mt-3">UKM PENRISTEK adalah Unit Kegiatan Mahasiswa dari UT Bogor, <br className="hidden lg:inline-block"/> Kami bergerak untuk mengakselerasi Mahasiswa UT Bogor di bidang <br className="hidden lg:inline-block" />akademis maupun non akademis.</p>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        {/* <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-ukm text-white py-3 px-6 md:py-5 md:px-14 rounded-full'>
                            Daftar sebagai anggota
                        </button> */}
                          <Daftarform />

                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 lg:block'>
                    <Image src="/images/Beranda/bgjb.jpg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Beranda;
