import { footerLinks, socialMedia } from "../assets/constants";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";

const Footer = () => {
  return ( 
  
  
<footer className="max-container">

<div className="flex justify-between items-start gap-20 flew-wrap max-lg:flex-col">

<div className="flex flex-col items-start">
  <a href="/">
  <img src={footerLogo} 
        alt="footerLog"
        width={150}
        height={46}   />
  
  </a>
  <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aspernatur eveniet voluptates mollitia? Id debitis pariatur suscipit harum porro quibusdam a reiciendis quam perferendis cupiditate, quis, ut excepturi eveniet voluptates.</p>

  <div className="flex items-center gap-5 mt-8">
    {socialMedia.map((item) => (
      <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
        <img src={item.src} 
             alt={item.alt}
             width={24}
             height={24} 
             key={item.alt}/>
        
         </div>
    ))}
  </div>
</div>

<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">

  {footerLinks.map((section) => (

    <div key = {section}>
        <h4 className="text-white font-montserrat text-2xl leading-normal mb-6 font-medium">{section.title}</h4>
        <ul>
          {section.links.map((link)=> (
            <li key={link.name} className="text-white-400 font-montserrat mt-3 text-base leading-normal hover:text-slate-gray cursor-pointer">
              <a >{link.name}</a>
            </li>
          ))}
        </ul>
       </div>
  ))}
</div>
</div>

<div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">

  <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
    <img src={copyrightSign} 
          alt="copyright" 
          width={20}
          height={20}
          className="rounded-full m-0"  />
          <p>Copyright. All rights reserved.</p>    
  </div>
  <p className="font-montserrat cursor-pointer"> Terms & Conditions</p>

</div>
</footer>
);
}
 
export default Footer;