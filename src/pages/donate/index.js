import Image from "next/image"
export default function ProvideHelp(){

    return(

        <>
       <section class="bg-white" id="contact">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4">
            <div class="mb-6 max-w-4xl text-center sm:text-center md:mx-auto md:mb-12">
             
              <h2 class="font-heading mb-4 font-bold tracking-tight text-[#24AB61] text-[#27AB61] text-5xl sm:text-5xl font-tittle">
              Hopeful donation illuminates path casts light              </h2> 
              {/* <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                In hac habitasse platea dictumst
              </p> */}
            </div>
          </div>

          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              {/* form start  */}

              <div class="card h-fit max-w-6xl p-5 md:p-7 mr-10 max-lg:w-[98%] max-lg:m-auto" id="form">
                <div className="h-96 w-auto bg-gradient-to-br from-white to-[#27AB61] max-lg:w-full max-lg:h-80"></div>
              </div>

              {/* form end  */}

              <div class="h-full pr-6  ">
                <p class="mt-3 mb-12 text-lg text-black font-tittle max-lg:w-[95%] max-lg:m-6">
                  Every contribution to Meera Foundations account is a ripple of compassion a drop of love and a beacon of change weaving a tapestry of hope for those in need
                </p>
                <ul class="mb-6 md:mb-0">
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded  text-gray-50">
                  
                    </div>
                    <div class="ml-4 mt-6  mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-black font-tittle">
                        Our UPI 
                      </h3>
                      <p class="text-black font-tittle">
                    4354353425435643654
                      </p>
                      {/* <p class="text-gray-600 dark:text-slate-400">
                        New York, EEUU
                      </p> */}
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded  text-gray-50">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-full w-full bg-gradient-to-r from-blue-300 to-blue-600 p-2 rounded-md"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg> */}
                    </div>
                    <div class="ml-4 mt-3 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-black font-tittle">
                       UPI Number
                      </h3>
                      <p class="text-black font-tittle">
                        Mobile +1 (123) 456-7890
                      </p>
                      <p class="text-black font-tittle">
                        Mail meerafoundation
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded  text-gray-50">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"

                      
                        class="h-full rounded-md w-full  bg-gradient-to-r from-blue-300 to-blue-600 p-2 "
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg> */}
                    </div>
                    <div class="ml-4 mt-3 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-black font-tittle">
                        Working hours
                      </h3>
                      <p class="text-black font-tittle">
                       24/7
                      </p>
                     
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        </>
    )
}

export function generateMetadata({ params }) {

  return {
    title: "Donate",
    description: "Your donation to Meera Foundation empowers lives. Invest in education, healthcare, and a brighter future for our community. Every contribution, big or small, makes a ripple of positive change."
  }
}


