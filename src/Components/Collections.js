import Button from "./Button";
import { FaEthereum } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import data from "../data/item-nft.js";
import Buy from "./buy"
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Collections() {
  let navigate=  useNavigate()

  return (
    <>
      <div
        className="container mx-auto py-4 md:py-20 px-3 md:px-0"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-tertiary font-bold text-3xl md:text-5xl">
            Top Players
          </h1>
        </div>
      
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-14 py-8">
          {data.map((item) => {
            return (
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="border-2 md:border-4 bg-background rounded-2xl border-primary w-full p-3 flex flex-col gap-4 hover:scale-105 transition-all cursor-pointer">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full rounded-xl"
                  />
                  <div>
                    <h1 className="font-primary text-tertiary font-bold text-xl md:text-3xl">
                      {item.title}
                    </h1>
                    <p className="text-tertiary">{item.username}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-tertiary font-bold">{item.price} ETH</p>
                    <div className="bg-secondary p-2 rounded-full">
                     
                     <FaEthereum color="#ECDBBA" size="1rem" onClick={() => {
                navigate("/buy");
              }}/>
                     
                  
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       
      </div>
      <div
        className="container mx-auto py-4 md:py-20 px-3 md:px-0"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-tertiary font-bold text-3xl md:text-5xl">
            Top Players
          </h1>
        </div>
      
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-14 py-8">
          {data.map((item) => {
            return (
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="border-2 md:border-4 bg-background rounded-2xl border-primary w-full p-3 flex flex-col gap-4 hover:scale-105 transition-all cursor-pointer">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full rounded-xl"
                  />
                  <div>
                    <h1 className="font-primary text-tertiary font-bold text-xl md:text-3xl">
                      {item.title}
                    </h1>
                    <p className="text-tertiary">{item.username}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-tertiary font-bold">{item.price} ETH</p>
                    <div className="bg-secondary p-2 rounded-full">
                      
                      <FaEthereum color="#ECDBBA" size="1rem" onClick={() => {
                navigate("/buy");
              }}  />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
       
      </div>
      <div
        className="container mx-auto py-4 md:py-20 px-3 md:px-0"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-tertiary font-bold text-3xl md:text-5xl">
            Top Players
          </h1>
        </div>
      
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-14 py-8">
          {data.map((item) => {
            return (
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="border-2 md:border-4 bg-background rounded-2xl border-primary w-full p-3 flex flex-col gap-4 hover:scale-105 transition-all cursor-pointer">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full rounded-xl"
                  />
                  <div>
                    <h1 className="font-primary text-tertiary font-bold text-xl md:text-3xl">
                      {item.title}
                    </h1>
                    <p className="text-tertiary">{item.username}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-tertiary font-bold">{item.price} ETH</p>
                    <div className="bg-secondary p-2 rounded-full">
                      <FaEthereum color="#ECDBBA" size="1rem" onClick={() => {
                navigate("/buy");
              }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       
      </div>
      
    </>
  );
}
