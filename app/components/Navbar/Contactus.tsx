"use client"
import { Dialog, Transition } from '@headlessui/react';
import { FormEvent, Fragment, useState } from 'react';
import Link from 'next/link';


const Contactusform = () => {
    let [isOpen, setIsOpen] = useState(false)
    // const [nama, setNama]=useState(initialState:'')
    const [nama, setNama] = useState()
    const [email, setEmail] = useState()
    const [pesan, setPesan] = useState()
   
    const handleSubmit=async(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form={
            nama: '',
            email: '',
            pesan:''
        }
        const response=await fetch('/navbar/Kirim',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(form)
        });
        const content=await response.json();
        console.log(content)
        // alert(content.data.tableRange)

        // setNama("")
        // setEmail("")
        // setPesan("")
        // const response=await fetch(input: '/navbar/kirim', init{
        //     method: 'POST',
        //     headers:{
        //         'Accept':'application/json'
        //         'Content-Type':'application/json'
        //     },
        //     body: JON.stringfy(form)
        // });
        // const content=await response.json();
        // console.log(content)
        // alert(content.data.tableRange)

        // setNama(value:'')
        // setPesan(value:'')
        // console.log(form)
    }
    // const [inputValues, setInputValues] = useState({
    //     nama: '',
    //     email: '',
    //     pesan: ''
    // });

    // const handleChange = (e: { target: { name: string; value: string; }; }) => {
    //     const { name, value } = e.target;
    //     setInputValues(prevState => ({ ...prevState, [name]: value }));
    // }

    // const handleClick = () => {
    //     alert(`Name: ${inputValues.nama}, Email-address: ${inputValues.email}, Message: ${inputValues.pesan}`);
    //     setIsOpen(false)
    // }

    // // FORM SUBMIT
    // const handleSubmit = (event: { preventDefault: () => void; }) => {
    //     event.preventDefault();
    //     console.log(handleSubmit)
    //     // handle form submission
    // };

    // const isDisabled = Object.values(inputValues).some((value) => value === '');


    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                {/* <div className='lg:hidden'>
                    <button type="button" className='bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded' onClick={openModal}>
                        Contact Us
                    </button>
                </div> */}
                <div className='hidden lg:block'>
                    <button type="button" className='justify-end text-xl font-semibold bg-ukm py-4 px-6 lg:px-12 navbutton rounded-full text-white' onClick={openModal}>
                        Kontak kami
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-shrink-0 items-center justify-center">
                                            <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                                Kontak ukm penristek
                                            </Link>
                                        </div>
                                        <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Kontak kami sekarang? ingin mengirim masukan atau saran ? Boleh banget</p>
                                        <form action="#" className="space-y-8"
                                         onSubmit={handleSubmit}
                                        >
                                            <div>
                                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                                                <input
                                                    id="text"

                                                    name="nama"
                                                    // value={inputValues.nama}
                                                    // onChange={handleChange}

                                                    type="text"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Nama..."
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    // value={inputValues.email}
                                                    // onChange={handleChange}

                                                    type="email"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="xyz@email.com"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Pesan</label>
                                                <textarea
                                                    id="message"
                                                    name="pesan"
                                                    // value={inputValues.pesan}
                                                    // onChange={handleChange}
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Selamat mengetik...."></textarea>
                                            </div>
                                            <button type="submit"
                                                // onClick={handleClick}
                                                // disabled={isDisabled}
                                                className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-ukm focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Kirim</button>

                                        </form>

                                    </div>

                                    {/* <div className='flex justify-end'>
                                        <button type="button"
                                            onClick={closeModal}
                                            className="py-3 px-5 mt-2 text-sm font-medium w-50 text-center text-white rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Close</button>
                                    </div> */}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Contactusform;
