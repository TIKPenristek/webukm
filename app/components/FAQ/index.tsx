"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            {/* <h3 className='text-xl font-normal text-white text-center mb-6'>Sekilas tentang ukm</h3> */}
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>Sekilas tentang ukm</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>VISI MISI</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                *VISI* <br />
                                Menjadikan Anggota UKM Penristek insan yang berakhlak Mulia, berilmu, berwawasan luas, kritis, kreatif, inovatif, berdaya saing tinggi, memahami teknologi, dan dapat berkontribusi kepada masyarakat.<br />

                                *MISI*<br />
                                1. Menyediakan pendidikan dan pelatihan yang berkualitas<br />
                                2. Mengembangkan kreativitas dan inovasi<br />
                                3. Meningkatkan daya saing<br />
                                4. Meningkatkan pemahaman teknologi<br />
                                5. Mengembangkan budi pekerti<br />
                                6. Mendorong partisipasi dalam pengabdian masyarakat<br />
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>SUSUNAN KEPENGURUSAN</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                

                                • KETUA:<br />
                                Muhammad Naufal Alhakim / Adm. Bisnis<br />

                                • WAKIL KETUA:<br />
                                Muhammad Sohibul Wafa / Teknologi Pangan
                                <br />
                                • SEKRETARIS:<br />
                                Siti Nur Halimah / Sastra Inggris<br />

                                • BENDAHARA:<br />
                                Putri A Syakira / PGSD<br />

                                • DIVISI HUMAS:<br />
                                Aprilia Maharani Putri / Adm. Bisnis<br />
                                Andi Ardalia Midar Bakri/ Manajemen<br />

                                • DIVISI MEDIA:<br />
                                Fajri Priatama / Ilmu Komunikasi<br />
                                Lusiyanti Novia R / Ilmu Komunikasi<br />

                                • DIVISI PENDIDIKAN DAN PENELITIAN:<br />
                                Elsa Agustin Sunarya / Manajemen<br />
                                Dian Nurjannah / Ekonomi Pembangunan<br />

                                • DIVISI TEKNOLOGI, INFORMASI, DAN KOMUNIKASI:<br />
                                Hanafiasri / Sistem Informasi<br />
                                Tri Aditiawan / Adm. Bisnis<br />
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>PROGRAM KERJA</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                   
                                *PROGRAM KERJA*<br />
                                1. Rapat bulanan bersama anggota <br />
                                2. Meet up<br />
                                3. Peningkatkan wawasan<br />
                                4. Materi edukasi<br />
                                5. Membuat kegiatan dan penelitian yang mendukung<br /> kreativitas dan inovasi<br />
                                6. Peningkatkan kemampuan dan daya saing<br />
                                7. Teknologi informasi dan komunikasi<br />
                                8. Pengabdian di masyarakat<br />


                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;