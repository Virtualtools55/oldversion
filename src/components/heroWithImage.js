import savenatrue from "./../../../public/savenature.jpg"
import Image from "next/image"
export default function HeroWithImage() {



    return (

        <>

            {/* <!-- Container --> */}
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl max-lg:mt-16">

                {/* <!-- Image Column --> */}
                <div data-aos="fade-left" data-aos-duration="1500" className="w-full h-64 lg:w-1/2 lg:h-[600px] relative">
                    <Image
                        className="h-full w-full object-cover" src={savenatrue} alt="nature image"
                    />
                </div>
                {/* <!-- Close Image Column --> */}

                {/* <!-- Text Column --> */}
                <div data-aos="fade-right" data-aos-duration="1500" className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-40 lg:ml-20 xl:mt-24 xl:ml-12">
                    {/* <!-- Text Wrapper --> */}
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase text-[#27AB61] lg:text-3xl font-tittle"> Preserve Protect Prosper Building a Beautiful Future with Nature </h2>
                        <p className="mt-4 text-black font-tittle">
                            In a world where the delicate balance of nature is constantly under threat our foundation stands as a beacon of hope Through dedicated preservation efforts vigilant protection and sustainable practices we pave the way for a future where humanity and nature thrive in harmony Join us in our mission to safeguard our planets precious ecosystems and ensure a legacy of prosperity for generations to come
                        </p>

                    </div>

                </div>


            </div>

        </>
    )
}