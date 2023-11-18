"use client"
import React from 'react';
// import {useState} from 'react-hook-form'
import { useState } from 'react';
// import { IInitialState } from '../types';

// import { Dialog, Transition } from '@headlessui/react';

// import Link from 'next/link';



// const {handleSubmit}= useForm();
// function submitHandler(data){
//     console.log(data);
// }
// const [nama, setNama]=useState(initialState:'')
// const [nama, setNama] = useState()
// const [saran, setSaran] = useState()
// const form={
//     nama: '',
//     saran:''
// }
// console.log(form)

// const [saran, setSaran]=useState(initialState:'')
const Saran = () => {
    return (
        <div className="bg-joinus my-32 " id="saran">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-ukm lg:text-4xl text-2xl font-normal tracking-widest">Saran</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">Punya saran atau <br />kritik yang membangun?</h2>
                    <p className="text-lightblack text-base font-normal">Silahkan sampaikan melalui formulir dibawah atau bisa hubungi kontak yang tertera pada kontak kami, <br /> kami akan menampung saran anda dan kerahasiaan data anda terjamin. catatan untuk tidak menggunakan identitas orang lain.</p>
                </div>

                        <form action="" autoComplete='off' 
                        // onSubmit={handleSubmit}
                        >
                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">

                        <div>
                            <input type="name" name="nama" id='nama' className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black" placeholder="nama " autoComplete="off"
                            // value={nama} onChange={e=>setNama(e.target.value)}
                             />
                            {/* {errors.name && errors.name.message} */}
                             {/* {...register('name',{required:'tolong masukan nama'})} */}
                            
                        </div>
                        <div>
                            <input type="text"  name="pesan" id="pesan" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black" placeholder="saran" autoComplete="off" 
                            //  {...register('feedback',{required:'tolong masukan saran'})}
                            // value={nama} onChange={e=>setSaran(e.target.value)}
                            />
                            {/* {errors.feedback && errors.feedback.message} */}
                           
                        </div>
                        <div className="sm:mr-3">
                            <button type="submit" className="justify-end text-xl font-semibold bg-ukm py-4 px-6 lg:px-12 navbutton rounded-full text-white hover:shadow-xl">
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>
                        </form>

            </div>
        </div>
    )
}

export default Saran;
