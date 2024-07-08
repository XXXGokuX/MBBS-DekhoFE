import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function TestmonialsCards() {

  const sliderItems= [
    {img: '/images/profile/p1.png',text:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero vel tortor fermentum, sit amet volutpat nulla congue."',name:'Amit Gupta',profession:'Web Designer'},
    {img: '/images/profile/p2.png',text:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero vel tortor fermentum, sit amet volutpat nulla congue."',name:'Aman Kumar',profession:'Software Engineer'},
    {img: '/images/profile/p3.png',text:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero vel tortor fermentum, sit amet volutpat nulla congue."',name:'Rahul Jain',profession:'Senior Software Engineer'},
  ]  
  return (
    <Carousel>
      <CarouselContent>
        {sliderItems.map((profile, index) => (
          <CarouselItem key={index}>
            <div className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-10 space-y-4 md:space-y-0 md:space-x-4">
                {/* Left Column (Profile Image) */}
                <div className="aspect-square overflow-hidden rounded-full dark:bg-white bg-[#ea580c]">
                <Image
                src={profile.img}
                alt="Profile"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                className=" mx-auto object-cover"
                />               
                </div>

                {/* Right Column (Testimonial Text) */}
                <div className="text-left">
                    <p className="text-lg font-medium">{profile.text}</p>
                    <p className="text-sm font-semibold mt-2">{profile.name}</p>
                    <p className="text-sm">{profile.profession}</p>
                </div>
            </div>
        </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
