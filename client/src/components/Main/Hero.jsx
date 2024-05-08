import Heroicon from "../../assets/hero.svg";
import Rocket from "../../assets/rocket.svg";
import Stars from "../../assets/stars.svg";
import Carousel from "../Primary/Carousel.jsx";
import Button from "../Primary/PrimaryButton.jsx";
import { LuArrowRight } from "react-icons/lu";
import '../Main/Main.css'
function ArrowRight() {
  return <LuArrowRight size={20} />;
}

const DUMMY_CAROUSEL_DATA = [
  "Enhance fortune 50 company’s insights teams research capabilities",
  "Strengthen the research capabilities of Fortune 50 company's insights teams",
  "Augment the research capabilities of the insights teams at a Fortune 50 corporation",
];

export default function Hero() {
  return (
    <div className=" flex flex-col items-center gap-2 mt-10">
      <h2  style={{fontFamily:'Covered By Your Grace'}} className=" text-[#2DA950] text-4xl">
        Success Stories
      </h2>
      <p style={{color:'#1C1C1C',fontFamily:'Manrope'}} className="text-5xl font-semibold text-center">
        Every success journey <br></br> we’ve encountered.
      </p>
      <div className="heroicon mt-20 flex">
        <div className="w-2/3">
          <div className="relative w-[70%] mx-auto">
            <img src={Heroicon} alt="hero" className="" />
            {/* achieved */}
            <div className="achieved  absolute top-20 -left-24 bg-white rounded-3xl pb-5 pt-8 px-5 max-w-[200px] shadow-sm shadow-black/20">
              <div className="relative">
                <img
                  src={Stars}
                  alt="stars"
                  className="absolute -top-9 -left-7 w-16 h-16"
                />
                <span  style={{color:'#1C1C1C',fontFamily:'Manrope'}}  className="font-bold text-3xl">40%</span>
              </div>
              <p style={{color:'#828282',fontFamily:'Manrope',fontWeight:'500'}}>
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>
            {/* staff */}
            <div className="staff">
            <div className=" absolute bottom-10 -left-16 flex gap-2 bg-white rounded-full p-5 max-w-[250px] shadow-sm shadow-black/20">
              <img src={Rocket} alt="rocket" />
              <div>
                <span style={{color:'#1C1C1C',fontFamily:'Manrope'}} className="font-semibold">10 DAYS</span>
                <p style={{color:'#828282',fontFamily:'Manrope',fontWeight:'500'}}>Staff Deployment</p>
              </div>
            </div>
            </div>

            {/* million */}
            <div className="million">
            <div className=" bg-[#002E18] absolute bottom-10 right-0 flex flex-col gap-2 rounded-3xl px-5 py-10 max-w-[250px] shadow-sm shadow-black/20">
              <div className="million space-x-2">
                <span className="  text-white font-bold text-4xl">$0.5</span>
                <span className="  text-[#CCCCCC]">MILLION</span>
              </div>
              <p style={{fontFamily:"Manrope",fontSize:'18px'}} className="  text-[#CCCCCC]">
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </div>
            </div>
          </div>  
        </div>
        <div className="Explore space-y-20 mt-20 w-1/3">
          <Carousel className="carousel" data={DUMMY_CAROUSEL_DATA} />
          <Button icon={ArrowRight} styleName="primary" style={{height:'60px'}}>
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
}
