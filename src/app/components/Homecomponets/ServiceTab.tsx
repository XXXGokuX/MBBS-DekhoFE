import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"

export function ServiceTab() {
  return (
    <Tabs defaultValue="s1">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="s1">Service 1</TabsTrigger>
        <TabsTrigger value="s2">Service 2</TabsTrigger>
        <TabsTrigger value="s3">Service 3</TabsTrigger>
        <TabsTrigger value="s4">Service 4</TabsTrigger>
      </TabsList>
      <TabsContent value="s1">
        <Card>
         
          <CardContent className="space-y-2 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column (Image) */}
                <div className="md:order-1">
                    <Image src="/images/students/s2.png" alt="Student" layout="responsive" width={300} height={300} objectFit="contain"/>
                </div>

                {/* Right Column (Text) */}
                <div className="md:order-2">
                    <div>
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            Discover your strengths
                        </h2>
                        <h3 className="text-lg mb-6 font-semibold">Career Compass Assessment Test</h3>
                        <p>Introducing our CollegeDekho Career Compass test, designed to provide you with valuable insights into your personality traits and abilities. This comprehensive assessment tool measures various aspects of your cognitive, emotional, and behavioral characteristics, enabling you to gain a deeper understanding of yourself and how you interact with the world around you.</p>
                        <ul className="my-6 list-none [&>li]:mt-2">
                            <li>With the help of professionals, plan your career, stream/subject combinations, course, college, and more.</li>
                            <li>About 1 million+ student have received mentoring from each of our career coaches, who are all internationally certified career coaches.</li>
                            <li>Personalized career counselling and all-around support for all your questions will help you make the best decision.</li>
                        </ul>
                    </div>
                    <Button>Call us now</Button>
                </div>
            </div>
          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="s2">
        <Card>
         
          <CardContent className="space-y-2 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column (Image) */}
                <div className="md:order-2">
                    <Image src="/images/students/s3.png" alt="Student" layout="responsive" width={300} height={300} objectFit="contain"/>
                </div>

                {/* Right Column (Text) */}
                <div className="md:order-1">
                    <div>
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            Discover your strengths
                        </h2>
                        <h3 className="text-lg mb-6 font-semibold">Career Compass Assessment Test</h3>
                        <p>Introducing our CollegeDekho Career Compass test, designed to provide you with valuable insights into your personality traits and abilities. This comprehensive assessment tool measures various aspects of your cognitive, emotional, and behavioral characteristics, enabling you to gain a deeper understanding of yourself and how you interact with the world around you.</p>
                        <ul className="my-6 list-none [&>li]:mt-2">
                            <li>With the help of professionals, plan your career, stream/subject combinations, course, college, and more.</li>
                            <li>About 1 million+ student have received mentoring from each of our career coaches, who are all internationally certified career coaches.</li>
                            <li>Personalized career counselling and all-around support for all your questions will help you make the best decision.</li>
                        </ul>
                    </div>
                    <Button>Call us now</Button>
                </div>
            </div>
          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="s3">
        <Card>
         
          <CardContent className="space-y-2 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column (Image) */}
                <div className="md:order-1">
                    <Image src="/images/students/s2.png" alt="Student" layout="responsive" width={300} height={300} objectFit="contain"/>
                </div>

                {/* Right Column (Text) */}
                <div className="md:order-2">
                    <div>
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            Discover your strengths
                        </h2>
                        <h3 className="text-lg mb-6 font-semibold">Career Compass Assessment Test</h3>
                        <p>Introducing our CollegeDekho Career Compass test, designed to provide you with valuable insights into your personality traits and abilities. This comprehensive assessment tool measures various aspects of your cognitive, emotional, and behavioral characteristics, enabling you to gain a deeper understanding of yourself and how you interact with the world around you.</p>
                        <ul className="my-6 list-none [&>li]:mt-2">
                            <li>With the help of professionals, plan your career, stream/subject combinations, course, college, and more.</li>
                            <li>About 1 million+ student have received mentoring from each of our career coaches, who are all internationally certified career coaches.</li>
                            <li>Personalized career counselling and all-around support for all your questions will help you make the best decision.</li>
                        </ul>
                        <Button>Call us now</Button>
                    </div>
                </div>
            </div>
          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="s4">
        <Card>
         
          <CardContent className="space-y-2 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column (Image) */}
                <div className="md:order-2">
                    <Image src="/images/students/s3.png" alt="Student" layout="responsive" width={300} height={300} objectFit="contain"/>
                </div>

                {/* Right Column (Text) */}
                <div className="md:order-1">
                    <div>
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            Discover your strengths
                        </h2>
                        <h3 className="text-lg mb-6 font-semibold">Career Compass Assessment Test</h3>
                        <p>Introducing our CollegeDekho Career Compass test, designed to provide you with valuable insights into your personality traits and abilities. This comprehensive assessment tool measures various aspects of your cognitive, emotional, and behavioral characteristics, enabling you to gain a deeper understanding of yourself and how you interact with the world around you.</p>
                        <ul className="my-6 list-none [&>li]:mt-2">
                            <li>With the help of professionals, plan your career, stream/subject combinations, course, college, and more.</li>
                            <li>About 1 million+ student have received mentoring from each of our career coaches, who are all internationally certified career coaches.</li>
                            <li>Personalized career counselling and all-around support for all your questions will help you make the best decision.</li>
                        </ul>
                    </div>
                    <Button>Call us now</Button>
                </div>
            </div>
          </CardContent>
          
        </Card>
      </TabsContent>
      
    </Tabs>
  )
}
