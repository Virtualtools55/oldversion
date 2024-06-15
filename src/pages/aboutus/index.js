import Link from "next/link"
export default function Aboutus(){

    return(

        <>
        <div className="bg-gray-100 ">
    <div className="container mx-auto py-8  ">
        <div className="flex mx-auto w-[85%]">
            
            <div className="col-span-4 sm:col-span-9  mx-auto">
                <div className="bg-white shadow  p-6 m-auto">
                    <h2 className="text-3xl font-bold mb-4">Welcome to Meera Foundation</h2>
                    <p className="text-gray-700">At Meera Foundation our mission is simple yet profound to extend a helping hand to those who need it most We are a non-profit organization dedicated to uplifting the lives of marginalized individuals and communities across the globe Our diverse range of programs and initiatives aims to address various challenges faced by the underprivileged ensuring that no one is left behind
                    </p>

                    <h3 className="font-semibold text-center mt-3 -mb-2">
                        Find me on
                    </h3>
                    <div className="flex justify-center items-center gap-6 my-6">
                        {/* <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds LinkedIn" href=""
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                        </Link> */}
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds YouTube" href=""
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                                <path fill="currentColor"
                                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                </path>
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds Facebook" href=""
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                                <path fill="currentColor"
                                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                </path>
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds Instagram" href=""
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                <path fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                </path>
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds Twitter" href=""
                            target="_blank">
                            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                </path>
                            </svg>
                        </Link>
                    </div>


                    
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Empowering the Vulnerable</span>
                           
                        </div>
                        <p className="mt-2">
                        From impoverished families struggling to make ends meet to individuals facing disabilities we believe in empowering the vulnerable by providing them with the necessary support and resources Through our financial assistance programs we offer a lifeline to those grappling with economic hardships helping them regain stability and self-sufficiency
                        </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Caring for Health and Well-being</span>
                           
                        </div>
                        <p className="mt-2">
                        Access to quality healthcare is a fundamental right that many are deprived of At Meera Foundation we strive to bridge this gap by offering medical assistance to those unable to afford essential treatments Whether its covering medical expenses facilitating surgeries or providing access to medications we ensure that no one has to compromise on their health due to financial constraints
                        </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Nurturing Education Building Futures</span>
                           
                        </div>
                        <p className="mt-2">
                        Education is the key to unlocking endless opportunities yet millions of children around the world are denied this basic right Through our education support programs we sponsor the education of orphaned children giving them access to learning resources school supplies and mentorship By investing in their education we aim to break the cycle of poverty and empower them to build brighter futures
                        </p>
                    </div>



                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Supporting Farmers Sustaining Livelihoods</span>
                           
                        </div>
                        <p className="mt-2">
                        For many farmers in developing regions agriculture is not just a means of livelihood but a way of life. However fluctuating market prices natural disasters and lack of resources often pose significant challenges Through our agricultural initiatives we provide farmers with the necessary tools training and financial assistance to enhance productivity and sustain their livelihoods
                        </p>
                    </div>


                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Advocating for Justice and Equality</span>
                           
                        </div>
                        <p className="mt-2">
                        In a world plagued by injustice and inequality we stand as advocates for change. Whether its addressing legal issues faced by marginalized communities or advocating for their rights we are committed to fostering a more just and equitable society Through our legal aid programs we offer guidance and support to those navigating complex legal systems ensuring that everyone has access to justice
                        </p>
                    </div>



                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Join Us in Making a Difference</span>
                           
                        </div>
                        <p className="mt-2 ">
                        At Meera Foundation we believe that together we can make a meaningful impact on the lives of those in need Whether through volunteering donations or spreading awareness we invite you to join us on our journey towards creating a more compassionate and inclusive world Together lets build a future where every individual has the opportunity to thrive regardless of their circumstances
                        </p>
                    </div>



                </div>
            </div>
        </div>
    </div>
</div>
        
        </>
    )
}

export function generateMetadata({ params }) {

    return {
      title: "About Us",
      description: "Meera Foundation isn't just about charity, it's about igniting potential. We empower individuals and families facing hardship through education, healthcare, and financial support.  Join our journey to rewrite narratives and build a stronger community, together."
    }
  }
  