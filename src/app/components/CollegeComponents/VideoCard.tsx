"use client"

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";

function VideoCard() {

    const [youtube,setYoutube]= useState(false);

    // if(isLoading)
    // return <Loader3/>

    return ( 
        <>
           <div className="collge-video-intro mt-20">
                
                <div className="college-video aspect-video relative">
                    <Image src="/images/colleges/c1.jpg" alt='college' width={1920} height={1080} layout='responsive' objectFit='cover' />
                    <div className="wrapper absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-700/30">
                        <div className="icon cursor-pointer rounded-full absolute bg-[#ea580c]/30 scale-150 animate-ping flex items-center justify-center p-8">
                        </div>
                        <div className="icon cursor-pointer rounded-full absolute bg-[#ea580c]/80 scale-125 md:scale-[2] animate-ping flex items-center justify-center p-8">
                        </div>
                        <div className="icon cursor-pointer rounded-full absolute bg-[#ea580c] animate-pulse flex items-center justify-center p-5 md:p-8" onClick={()=> setYoutube(true)}>
                            <Play  className="text-white text-4xl cursor-pointer "/>
                        </div>
                    </div>
                </div>

                {youtube && 
                <div className="youtube-video-player fixed top-0 left-0 z-20 w-screen h-screen bg-black/80 flex items-center">
                    
                    <div className="h-[80%] w-[95%]  md:w-[90%] mx-auto md:px-0">

                        <div className="close-icon fixed right-4 md:right-7 top-6" onClick={()=> setYoutube(false)}>
                            <X  className="text-white/80 transition-all hover:scale-125 hover:text-white cursor-pointer text-right text-xl"/>
                        </div>

                        <div className="flex items-center justify-center h-full md:w-auto ">
                             
                            <iframe className="w-full h-[65%] md:h-full px-2 md:px-0"  src="https://www.youtube.com/embed/IkeraXTdVS0?si=VJICOY9gxKsda3g_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>

                    </div>
                   
                </div>
                }

           </div>
        </>
     );
}

export default VideoCard;