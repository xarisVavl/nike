
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { anim } from "../animations";
import { useRef } from "react";
import { cindy } from "../assets/images";

const AboutUs = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(() => {

    anim();
  
  }, { scope: container }) 
  return ( <>
  
 <section ref={container} className=" bg-black w-full  selection:bg-white selection:text-black  p-9 "> 
  <div className=" h-screen ">
<div className="pt-28 font-futura leading-[250px] text-[305px] font-extrabold tracking-tight w-full text-gray-100 relative">
    <div id="we" className=" ">WE</div>
    <div id="serve" >SERVE</div>

    <div className="relative   ">
    <div id="kids" className="absolute opacity-0 top-0 left-0">KIDS</div>
    <div id="pros" className="   opacity-0 absolute top-0 left-0">PROS</div>
    <div id="dreamers" className=" opacity-0 absolute  top-0 left-0">DREAMERS</div>
    <div id="women" className=" opacity-0 absolute top-0 left-0" >WOMEN</div>
    <div id="coaches" className=" opacity-0 absolute  top-0 left-0">COACHES</div>
    <div id="men" className=" opacity-0 absolute  top-0 left-0">MEN</div>
    <div id="begginers" className=" opacity-0 absolute top-0 left-0">BEGGINERS</div>
    <div id="rebels" className=" opacity-0 absolute  top-0 left-0">REBELS</div>
    <div id="athletes" className=" opacity-0 relative flex gap-4  "> 
      <div className="flex flex-wrap">  ATHLETES  </div>

    <div id="symbol" className=" opacity-0  scale-0 ">*</div>

    </div>

 </div>

  </div>


  </div>
  <div className=" h-max pt-10  bg-black flex  gap-16 ">

    <div><img src={cindy} alt="" width={1300}/></div>

    <div className="font-palanquin w-[500px]">
      <div className="text-slate-gray text-lg ">For The Win</div>

      <h2 className="text-white pt-4 text-4xl">Boxer Cindy Ngamba is Ready to Fight to the Finish</h2>
      <div className="text-slate-gray text-lg mt-7 leading-7">The three-time UK national champion and Olympic Refugee competitor is battling for a cause bigger than herself.</div>
    </div>
  </div>

  </section> 



  </> );
}
 
export default AboutUs;