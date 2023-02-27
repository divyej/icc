import Button from "./Button"
import image from "./image.png"
//import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <>
      <div className="bg-black py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
          <div
            className="flex flex-col gap-8 text-center items-center md:text-left md:items-start"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-5xl text-center md:text-left md:text-8xl font-secondary font-semibold text-white">
              Bet{" "}
              <span className="text-tertiary underline decoration">
                on the best Cricketers
              </span>{" "}
              in the{" "}
              <span className="text-tertiary underline decoration-solid">
                World
              </span>
            </h1>
            <p className="text-white md:text-xl">
            Predict the future of cricket NFTs and win big
            </p>
            <div className="flex justify-between w-3/4">
              <div className="text-white text-center">
                <h1 className=" text-xl md:text-3xl font-semibold">1.8M</h1>
                <p className="text-sm md:text-base">Total Users</p>
              </div>
            </div>
            <div>
              <Button text="BET NOW" size="lg" variant="primary-outline" />
            </div>
          </div>
          <div
            className="hidden md:block"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
           <img
              src={image}
              className="cursor-pointer flex justify-between w-3/4 " alt="img"/>
          </div>
        </div>
      </div>
    </>
  );
}
