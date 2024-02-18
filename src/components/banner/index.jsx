import React from "react";
import img1 from "../../assets/images/app-store.png";
import img2 from "../../assets/images/google-play.png";
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";
import banner3 from "../../assets/images/banner-3.png";
import banner4 from "../../assets/images/banner-4.png";
const Banner = () => {
  return (
    <section className="bg-pink">
      <div className="container">
        <div className="md:flex flex gap-x-8 justify-between phone:max-md:flex-col phone:gap-y-8">
          <div className="semi-lg:mt-[35px] phone:w-full phone:mt-[25px] x-phone:mt-5 flex flex-col md:w-[340px] mt-[45px]">
            <h1 className="md:text-[35px]  5x-phone:text-[40px] 5x-phone:leading-[50px] 4x-phone:text-[35px] phone:text-[30px] phone:leading-[40px] text-primary font-normal font-display text-[46px] leading-[50px]">
              Start building your first home deposit today
            </h1>
            <h3 className="semi-md:text-base semi-md:mt-6 semi-md:leading-[23px] md:text-sm md:mt-3 5x-phone:text-base 4x-phone:text-[15px] 4x-phone:mt-6 phone:text-sm phone:leading-[22px] phone:mt-4 mt-[27px] text-title-color font-roboto text-base font-normal leading-6">
              Open a Nude savings or investment account, boost your deposit with
              government bonuses and get ideas to buy your home in record time.
            </h3>
            <h5 className="semi-md:text-sm semi-md:mt-5 md:text-[13px] md:mt-3 5x-phone:text-[15px] 4x-phone:mt-5 4x-phone:text-sm 2x-phone:text-[13px] phone:mt-3 mt-4 text-title-color font-roboto text-xs font-normal leading-6">
              Already got a Lifetime ISA? Transferring to Nude only takes 5
              minutes.
            </h5>
            <h5 className="semi-md:text-sm semi-md:mt-5 md:text-[13px] md:mt-3 5x-phone:text-[15px] 4x-phone:text-sm 4x-phone:mt-3 2x-phone:text-[13px] phone:mt-2 mt-[11px] text-title-color font-roboto text-xs font-normal leading-6">
              Install Nude today and start the countdown to buying your first
              place.
            </h5>
            <div className="semi-md:mt-11 4x-phone:mt-10 4x-phone:gap-x-3 flex gap-x-2 phone:mt-6 phone:w-full mt-[47px]">
              <img
                className="md:w-[120px] phone:w-[130px] 4x-phone:w-[160px] 2x-phone:w-[145px]"
                src={img1}
                alt="app-store"
              />
              <img
                className="md:w-[120px] phone:w-[130px] 4x-phone:w-[160px] 2x-phone:w-[145px]"
                src={img2}
                alt="google-play"
              />
            </div>
          </div>
          <div className="flex gap-x-10 phone:gap-x-5 justify-center">
            <div className="flex flex-col ">
              <div>
                <img src={banner1} alt="banner-img1" />
              </div>
              <div className="relative">
                <img
                  className="5x-phone:right-0 object-contain w-[250px] absolute right-10 phone:right-0"
                  src={banner4}
                  alt="banner-img2"
                />
                <img
                  className="5x-phone:top-16 4x-phone:right-0 4x-phone:bottom-0 object-contain w-[190px] absolute z-10 top-16 phone:top-9"
                  src={banner3}
                  alt="banner-img3"
                />
                <h3 className="5x-phone:top-60  4x-phone:top-56 3x-phone:top-52 3x-phone:right-0 2x-phone:top-44 phone:text-xs phone:leading-4 top-[220px] phone:top-36 x-phone:top-40 text-center absolute text-xl font-normal text-primary">
                  Watch: Nude in under 2 mins
                </h3>
              </div>
            </div>
            <div className="w-[290px]">
              <img
                className="w-full object-contain"
                src={banner2}
                alt="banner-img4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
