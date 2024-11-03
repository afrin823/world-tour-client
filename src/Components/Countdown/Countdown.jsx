import { FaChevronCircleRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const Countdown = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src="https://i.ibb.co/CH1CpnT/Screenshot-2024-04-27-170225.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <p className="text-[#2095AE] tracking-[10px] mb-2">THE BEST TRAVEL AGENCY</p>
      <h1 className="text-5xl font-bold text-gray-300">DISCOVER THE <span className="text-[#2095AE]">WORLD</span>  <br /> WITH OUR GUIDE</h1>
      <p className="py-6 text-gray-300 text-base">You can choose any country with good tourism. Agency elementum sesue the <br /> aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the <br /> pellentesque velit. Donec id velit ac arcu posuere blane.</p><br />
      <p className="text-[#676977] text-base">Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the miss <br /> varius natoque penatibus et magnis dis parturient monte.</p>
      <div className="flex gap-2 items-center lg:mt-3">
      <FaChevronCircleRight  className=" text-[#2095AE] text-3xl"/><p className="text-[#676977] text-lg"> 20 Years of Experience</p>
      </div>
      <div className="flex  gap-2 items-center lg:mt-1">
      <FaChevronCircleRight  className=" text-[#2095AE] text-3xl" />  <p className="text-[#676977] text-lg">150+ Tour Destinations</p>
      </div>
     
      <div className="flex items-center gap-2 lg:mt-2">
      <IoCall className="text-3xl text-[#2095AE]"/>
      <p className="text-[#676977] text-base " > 855 333 4444</p>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Countdown;