import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { GraduationCap, Mail, MapPin, MessagesSquare, MoveRight, NotepadText, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ServiceTab } from "./components/Homecomponets/ServiceTab";
import { TestmonialsCards } from "./components/Homecomponets/TestmonialsCards";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto">
       
       {/* FIRST SECTION */}
       <div className="flex flex-col justify-center items-center py-24 md:py-44">
          <div className="first-section__text">
            <div className="heading">
              <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
                  Find top college of your choice at one place
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-center w-2/3 mx-auto">
                  1 single form and get access to 2500+ colleges across India. CAF saves your time, money and makes the college application process easier for you to apply to numerous colleges using one window.
              </p>
            </div>
            <div className="get-started__btn text-center my-10">
              <Button asChild>
                <Link href="/login">Get started</Link>
              </Button>
              <Button asChild variant="outline" className=" ms-8">
                <Link href="/login"><Phone  className="mr-2 h-4 w-4" />Contact Us</Link>
              </Button>
            </div>

          </div>
          
          <div className="first-section__status">
          <div className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Column 1 */}
                <div className="p-6 rounded shadow-md flex items-center">
                    <div className="mr-4">
                      <NotepadText className="h-12 w-12" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">5000+</h2>
                        <p>Applications filled</p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="p-6 rounded shadow-md flex items-center">
                    <div className="mr-4">
                      <MessagesSquare className="h-12 w-12" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">1500+</h2>
                        <p>Expert Counsellors</p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="p-6 rounded shadow-md flex items-center">
                    <div className="mr-4">
                      <GraduationCap className="h-12 w-12" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">1,00,000+</h2>
                        <p>Admission done</p>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="p-6 rounded shadow-md flex items-center">
                    <div className="mr-4">
                      <NotepadText className="h-12 w-12" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">5000+</h2>
                        <p>Applications filled</p>
                    </div>
                </div>
            </div>
          </div>
          </div>

       </div>
       {/* FIRST SECTION ENDS */}

       {/* SECOND SECTION */}
       <div className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column (Image) */}
                <div className="md:order-1">
                  <Image src="/images/students/s1.png" alt="College" layout="responsive" width={300} height={300} objectFit="contain"/>
                </div>

                {/* Right Column (Text) */}
                <div className="md:order-2">
                    <div>
                      <small className=" text-base font-bold leading-none">LEARN ANYTHING</small>
                      <h1 className="scroll-m-20 mt-5 mb-3 text-4xl font-extrabold leading-9 tracking-wide  lg:text-5xl">
                        Benefits About Online Learning Expertise
                      </h1>

                      <div className="second-section__icon-cards mt-8">
                        {/* CARD 1 */}
                        <Card>
                            
                                <div className="p-6 flex items-center">
                                  <div className="mr-4 flex-grow">
                                    <Image src="/images/icons/online-learning (1).png" alt="i1" layout="fixed" width={128} height={128}  objectFit="contain"/>
                                  </div>
                                  <div>
                                      <h3 className="scroll-m-20 leading-10 dark:text-white text-black text-2xl font-semibold tracking-tight">
                                         Online Courses
                                      </h3>                                    
                                      <div>
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                      </div>
                                  </div>
                                </div>
  
                        </Card>
                        {/* CARD 2 */}
                        <Card className="my-6">
                                <div className="p-6 flex items-center">
                                  <div className="mr-4 flex-grow">
                                    <Image src="/images/icons/certificate.png" alt="i1" layout="fixed" width={128} height={128}  objectFit="contain"/>
                                  </div>
                                  <div>
                                      <h3 className="scroll-m-20 leading-10 dark:text-white text-black text-2xl font-semibold tracking-tight">
                                        Earn A Certificates
                                      </h3>                                    
                                      <div>
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                      </div>
                                  </div>
                                </div>
  
                        </Card>

                        {/* CARD 3 */}
                        <Card>
                                <div className="p-6 flex items-center">
                                  <div className="mr-4 flex-grow">
                                    <Image src="/images/icons/experts.png" alt="i1" layout="fixed" width={128} height={128}  objectFit="contain"/>
                                  </div>
                                  <div>
                                      <h3 className="scroll-m-20 leading-10 dark:text-white text-black text-2xl font-semibold tracking-tight">
                                        Learn with Expert
                                      </h3>                                    
                                      <div>
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                      </div>
                                  </div>
                                </div>
  
                        </Card>
                      </div>
                      
                    </div>
                </div>
            </div>
        </div>
       {/* SECOND SECTION ENDS */}

       {/* THIRD SECTION */}
       <div className="max-w-6xl mx-auto p-4">
            <h1 className="scroll-m-20 text-center mt-5 mb-8 text-4xl font-extrabold leading-9 tracking-wide  lg:text-5xl">
              Explore Careers
            </h1>
          <ServiceTab/>
       </div>
       {/* THIRD SECTION ENDS */}

       {/* FOURTH SECTION STARTS */}
       <div className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column (Image) */}
                <div className="md:order-1 relative">
                  <Image src="/images/students/s4.jpg" className=" grayscale" alt="College" layout="responsive" width={300} height={300} objectFit="contain"/>
                  <div className="absolute top-0 left-0 w-full h-full rotate-3 border-2 scale-90"></div>
                  <div className="absolute top-0 left-0 w-full h-full -rotate-1  border-2 scale-90"></div>

                </div>

                {/* Right Column (Text) */}
                <div className="md:order-2 py-10">
                    <div>
                      <small className=" text-base font-bold leading-none">LEARN ANYTHING</small>
                      <h1 className="scroll-m-20 mt-5 mb-3 text-4xl font-extrabold leading-9 tracking-wide  lg:text-5xl">
                        Benefits About Online Learning Expertise
                      </h1>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Introducing our CollegeDekho Career Compass test, designed to provide you with valuable insights into your personality traits and abilities. This comprehensive assessment tool measures various aspects of your cognitive, emotional, and behavioral characteristics, enabling you to gain a deeper understanding of yourself and how you interact with the world around you.
                      </p>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        With our CollegeDekho Career Compass test, youll be able to identify your strengths and weaknesses, which can help you make informed decisions about your career, relationships, and personal growth. Whether youre looking to improve your communication skills, enhance your leadership abilities, or simply better understand yourself, our test can provide you with the guidance you need.
                      </p>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Our test is easy to use and takes just a few minutes to complete. Youll receive a detailed report with personalized feedback, which can help you identify areas for improvement and set achievable goals. With our CollegeDekho Career Compass test, youll be able to take control of your personal and professional development and unlock your full potential. Try it today and see the difference it can make in your life.
                      </p>
                    </div>
                </div>
            </div>
        </div>
       {/* FOURTH SECTION ENDS */}

       {/* FIFTH SECTION STARTS */}
       <div className="max-w-6xl mx-auto p-4">
         <TestmonialsCards/>
       </div>
       {/* FIFTH SECTION ENDS */}

       {/* SIXTH SECTION STARTS */}
       <div className="max-w-6xl mx-auto p-4">
        <div className="sixth-section__apply-now">
          <div className="sixth-section__banner-img relative max-h-80" style={{clipPath:' polygon(0% 100%, 100% 81%, 100% 0%, 0% 0%);'}}>
            <Image src="/images/students/s5.jpg" className="grayscale" alt="College" layout="responsive" width={300} height={300} objectFit="contain" style={{clipPath:' polygon(0% 100%, 100% 81%, 100% 0%, 0% 0%);'}} objectPosition="center"/>
            <div className="absolute top-0 left-0 w-full h-full rotate-3 border-2 scale-90"></div>
            <div className="absolute top-0 left-0 w-full h-full -rotate-1  border-2 scale-90"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-orange-500/30"></div>
            <div className="absolute top-1/2 left-1/2 aspect-square w-48 flex items-center justify-center rounded-full dark:bg-white bg-black dark:text-black text-white -translate-x-[50%] -translate-y-[50%]">
            <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0">
              Admission <br/> Going On
            </h2>
            </div>

          </div>  
          <div className="sixth-section__apply-now-content">
          <div className="flex flex-col justify-center items-center py-24">
          <div className="sixth-section__text">
            <div className="heading text-center">
            <small className=" text-base font-bold mb-4 md:mb-8 block">SPRING SESSION 2024</small>

              <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
                Apply For Admission
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-center w-2/3 mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
              </p>
            </div>
            <div className="get-started__btn text-center my-10">
              <Button asChild>
                <Link href="/login">Apply For Admission <MoveRight className="h-4 w-4 ml-2"/></Link>
              </Button>
            </div>

          </div>
          

       </div>
          </div>  
        </div>
       </div>
       {/* SIXTH SECTION ENDS */}

       {/* SEVENTH SECTION STARTS */}
       <div className="max-w-6xl mx-auto  p-4">
            <div className="flex flex-col md:flex-row">
                {/* Left Column (70% width) */}
                <div className="w-full md:w-7/12 p-4">
                    <div className="p-4">
                        <h2 className="text-medium font-bold mb-2">SCHOLARSHIP PROGRAM</h2>
                        <h2 className="scroll-m-20 pb-2 text-3xl md:text-5xl font-semibold tracking-tight first:mt-0">
                          Our scholarship programs are available.
                        </h2>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                        </p>
                        <Button asChild className="mt-8">
                          <Link href="/login">Apply for scholarship</Link>
                        </Button>

                    </div>
                </div>

                {/* Right Column (30% width) */}
                <div className="w-full md:w-5/12 p-4 mt-4 md:mt-0 ">
                    <div className="p-4">
                        <h2 className="scroll-m-20 pb-2 text-xl md:text-3xl font-semibold tracking-tight first:mt-0">
                          Contact for any query
                        </h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <ul className="my-6 list-none [&>li]:mt-2 font-medium text-lg">
                          <li><Mail className="h-6 w-6 text-[#ea580c]" />institute@helpline.com</li>
                          <li> <PhoneCall className="h-6 w-6 text-[#ea580c]"/> (+89) 54321 67890</li>
                          <li><MapPin className="h-6 w-6 text-[#ea580c]" />24/A Mount View, London
                            United Kingdom
                            234567</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       {/* SEVENTH SECTION ENDS */}
    </main>
  );
}
