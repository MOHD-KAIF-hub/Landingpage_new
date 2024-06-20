"use client";
import bodyimg from '../images/Rectangle 89.png'
import pic1 from '../images/Rectangle 90.png'
import pic2 from '../images/Rectangle 91.png'
import pic3 from '../images/Rectangle 92.png'
import pic4 from '../images/Rectangle 93.png'
import arrow from '../images/Group 117.png'
{/* eslint-disable-next-line @next/next/no-img-element */}
import React, { useState } from 'react'
export default function Lower() {
    const [currImg,setcurrImg]=useState(bodyimg);
    const [idx,setidx]=useState(0);
    const Images=[pic1,pic2,pic3,pic4];
    const handleClick=(index:any)=>{
         setcurrImg(Images[index]);
    }
    const handlearrow=()=>{
        if(idx===Images.length-1)
            {
                setcurrImg(Images[0]);
                setidx(0);
            }
            else{
                setcurrImg(Images[idx+1]);
                setidx(idx+1);
            }
    }

    return (
        // Lower components
        <div className=" sm:max-w-6xl mx-auto flex my-8 flex-col ">
            <div className='flex  w-screen  sm:max-w-6xl sm:ml-auto  justify-end items-end my-8 '>
                <p className="text-[#686868] text-sm font-light font-['Poppins']">*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
            </div>
            <div className='flex max-w-6xl ml-auto justify-end  mt-4 mb-6'>
                <div className='flex gap-2'>
                    <button className="bg-[#00357B] font-['Popins'] font-bold rounded-md   text-[#FFFF] w-[150px] h-12 transition-all hover:scale-105 cursor-pointer">EXTERIORS</button>
                    <button className="bg-transparent font-['Popins'] font-bold rounded-md border-2 border-[#00357B] text-[#00357B] w-[150px] h-12 transition-all hover:scale-105 cursor-pointer">INTERIORS</button>
                </div>
            </div>
            <div className="w-full relative bg-no-repeat bg-cover">
                <img src={currImg.src} className='w-full h-[496px]' alt="bodyimg" />
                <img src={arrow.src} alt='arrow' className='absolute left-0 top-1/2 cursor-pointer' onClick ={handlearrow} />
            </div>
            <div className='max-w-6xl mx-auto grid grid-cols-2 gap-4 mt-4 sm:grid-cols-4'>
                <div className='cursor-pointer' onClick={()=>handleClick(0)}>
                    <img src={pic1.src} alt="pic1" />
                </div>
                <div className='cursor-pointer' onClick={()=>handleClick(1)}>
                    <img src={pic2.src} alt="pic2" />
                </div>
                <div className='cursor-pointer' onClick={()=>handleClick(2)}>
                    <img src={pic3.src} alt="pic3" />
                </div>
                <div className='cursor-pointer' onClick={()=>handleClick(3)}>
                    <img src={pic4.src} alt="pic4" />
                </div>
            </div>
        </div>
    )
}