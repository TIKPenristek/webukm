"use client"
import Image from "next/image";
import Daftarform from '../Beranda/Daftar';
import React from 'react';

const Gabung = () => {
    return (

        <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-gabung rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 ">
                        <h3 className="text-xl sm:text-2xl font-normal text-white mb-5 tracking-widest text-center lg:text-start">Daftarkan diri anda sekarang</h3>
                        <h4 className="text-2xl sm:text-4xl font-bold text-white mb-8 leading-snug text-center lg:text-start">Bergabunglah bersama kami, menjadi bagian dari kami untuk menciptakan insan berkualitas, guna membangun Negara ini.</h4>
                        <div className="text-center lg:text-start">
                            {/* <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 bg-ukm rounded-full">Daftar sebagai anggota</button> */}
                            <Daftarform />
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className="lg:absolute girldoodle">
                            <Image src="/images/gabung/girldoodle.svg" alt="girldoodle" width={815} height={691} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Gabung;
