import Image from "next/image";
import imotionBanner from "./../../public/emotionbanner.jpg";

export default function IntroBigBanner(){

    return(

        <>
        <div className="h-screen w-screen bg-purple-500 text-center relative max-md:h-[350px]">
           <Image
           src={imotionBanner}
           fill={true}
           alt="introimage"
           />
        </div>
        <div>
            <p></p>
        </div>
        </>
    )
}