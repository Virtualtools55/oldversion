import OurMissionComponent from "@/components/ourmissioncomponent"


export default function OurMission(){


  return(

<>
<OurMissionComponent/>

</>
  )
}


export function generateMetadata({ params }) {

  return {
    title: "Our mission",
    description: "Explore Meera Foundation's mission to empower individuals and families. We believe education, healthcare, and financial support are the threads that create a stronger social fabric.  Join us in knitting a brighter future for our community,"
  }
}





