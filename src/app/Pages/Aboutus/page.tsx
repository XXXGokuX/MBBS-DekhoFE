
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Aboutus() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className='aboutus__banner relative'>
        <Image src='/images/colleges/c6.jpg' alt='aboutus' width={5000} height={50}  objectFit='cover' />
        <div className='aboutus__banner__content flex justify-center items-center absolute w-full h-full bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 top-0 left-0' >
        <h1 className="scroll-m-20 text-4xl md:text-6xl font-extrabold tracking-tight lg:text-8xl">
          ABOUT US
        </h1>
        </div>  
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
        {/* LEFT TEXT */}
        <div className='md:order-1'>
            <h4 className="scroll-m-20 text-medium text-primary font-semibold tracking-tight">
                HISTORY
            </h4>

            <h1 className="scroll-m-20 text-4xl leading-10 font-extrabold tracking-wider mt-4 lg:text-5xl">
              We are the best institute since <br/> 1995
            </h1>

            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            </p>
        </div>  
        {/* RIGHT TEXT */}
        <div className='md:order-2 py-10'>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </p>
          <p className="leading-7 font-semibold italic [&:not(:first-child)]:mt-6">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
          </p>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </p>
        </div>  
      </div>  


      <div className='apply__for-admissions'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-24'>
          {/* LEFT TEXT */}
          <div className='md:order-1 justify-self-center'>
            <div className='flex justify-center items-center w-80 aspect-square bg-primary rounded-full outline-8 outline outline-[#deedfb] border-4 border-white border-dashed'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Admission <br/> Going On
            </h1>
            </div>      
          </div>
          {/* RIGHT TEXT */}
          <div className='md:order-2 py-10'>
                <h4 className="scroll-m-20 text-medium text-primary font-semibold tracking-tight">
                    SPRING SESSION 2024
                </h4>

                <h1 className="scroll-m-20 text-4xl leading-[38px] font-extrabold tracking-wider mt-4 lg:text-5xl">
                  Apply for <br/> Admissions
                </h1>

                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </p>
                <Button className='mt-4' asChild>
                  <Link href="/login">Apply Now <MoveRight className='h-4 w-4 scale-95 ml-4' /></Link>
                </Button>
          </div>  
        </div>  
      </div>

      <div className='our__experts text-center mt-24'>
            <h4 className="scroll-m-20 text-medium text-primary font-semibold tracking-tight">
              OUR LECTURER
            </h4>

            <h1 className="scroll-m-20 text-4xl leading-[38px] font-extrabold tracking-wider mt-4 lg:text-5xl">
              Our Experienced And<br/> Expert Teachers
            </h1>

            <div className='our__experts_info grid grid-cols-1 md:grid-cols-3 mt-24 justify-items-center gap-10 md:gap-0'>
              <div className=''>
                    <Image src="/images/students/teacher-1.jpg" alt="experts" width={350} height={500} objectFit='contain' />
                    <div className='experts__info'>
                          <h3 className="scroll-m-20 text-4xl text-primary mt-4 font-semibold tracking-tight">
                            Jenny Doe
                          </h3>
                          <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Assistant Professor
                          </p>
                    </div>  
              </div>

              <div className=''>
                <Image src="/images/students/teacher-2.jpg" alt="experts" width={350} height={500} objectFit='contain' />
                <div className='experts__info'>
                          <h3 className="scroll-m-20 text-4xl text-primary mt-4 font-semibold tracking-tight">
                            Jenny Doe
                          </h3>
                          <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Assistant Professor
                          </p>
                </div> 
              </div>

              <div className=''>
                <Image src="/images/students/teacher-4.jpg" alt="experts" width={350} height={500} objectFit='contain' />
                <div className='experts__info'>
                          <h3 className="scroll-m-20 text-4xl text-primary mt-4 font-semibold tracking-tight">
                            Jenny Doe
                          </h3>
                          <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Assistant Professor
                          </p>
                </div> 
              </div>  

            </div>

      </div>
    </div>  
  )
}

export default Aboutus