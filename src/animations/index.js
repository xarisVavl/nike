import { gsap } from "gsap";



export const anim = () => {
  const tl = gsap.timeline();
  tl.from("#we", {opacity:0,duration:0.4,delay:1});
  tl.from("#serve", {opacity:0,duration:0.4,ease:"power1.out" });
  tl.to("#kids", {opacity:1,duration:0.2,ease:"power1.out" });
  tl.to("#kids", {opacity:0,duration:0.05,ease:"power1.out" });
  tl.to("#pros", {opacity:1,duration:0.2,ease:"power1.out"});
  tl.to("#pros", {opacity:0,duration:0.05,ease:"power1.out" });
  tl.to("#dreamers", {opacity:1,duration:0.2,ease:"power1.out"});
  tl.to("#dreamers", {opacity:0,duration:0.05,ease:"power1.out" });
  tl.to("#women", {opacity:1,duration:0.2,ease:"power1.out"});
  tl.to("#women", {opacity:0,duration:0.05,ease:"power1.out" });
  tl.to("#coaches", {opacity:1,duration:0.2,ease:"power1.out"});
  tl.to("#coaches", {opacity:0,duration:0.05,ease:"power1.out" });
  tl.to("#men", {opacity:1,duration:0.2,ease:"power1.out"});
  tl.to("#men", {opacity:0,duration:0.05,ease:"power1.out" });
  tl.to("#begginers", {opacity:1,duration:0.2,ease:"power1.out" });
  tl.to("#begginers", {opacity:0,duration:0.05,ease:"power1.out" });
  tl.to("#rebels", {opacity:1,duration:0.2,ease:"power1.out" });
  tl.to("#rebels", {opacity:0,duration:0.05,ease:"power1.out" });
  tl.to("#athletes", {opacity:1,duration:0.2,ease:"power1.out" });
  tl.to("#symbol", {opacity:1,scale:1,duration:1,
    transformOrigin: "center center",
    });




}