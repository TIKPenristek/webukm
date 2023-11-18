import Image from "next/image";

const Tentang = () => {
    return (
        <div className="relative" id="tentang">

            <Image src="/images/tentang/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/tentang/bg2.jpg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0 rounded-lg" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/tentang/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Tentang kami</h2>
                        <p className="font-medium text-lightblack text-xl mt-5 text-center lg:text-start">UKM Pendidikan Riset dan Teknologi adalah lembaga yang memfasilitasi dan mengakselerasi Mahasiswa Universitas Terbuka dibidang akademis dan non-akademis</p>
                        <p className="font-medium text-lightblack text-xl mt-5 text-center lg:text-start">UKM PENRISTEK terbuka kepada para Mahasiswa UT yang ingin mengimplementasikan keilmuannya dalam mencipatkan karya maupun penyebaran Ilmu Pengetahuan.</p>
                        <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-ukm text-white py-3 px-6 md:py-5 md:px-14 rounded-full'>
                            Profil penristek
                        </button>
                    </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Tentang;
