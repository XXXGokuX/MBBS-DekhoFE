import Image from "next/image"
import Link from "next/link"
import {
    Bookmark,
  ChevronLeft,
  Download,
  Home,
  LineChart,
  MapPin,
  MessageSquareQuote,
  MoveRight,
  Package,
  Package2,
  PanelLeft,
  Plus,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CollegeDetailsTab from "@/app/components/CollegeComponents/CollegeDetailsTab"
import {  CollegeAccordion } from "@/app/components/CollegeComponents/Accordion"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
       
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                AIIMS Delhi
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
              🌟4.6/5
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" /> Brochure
                </Button>
                <Button size="sm"><Bookmark className="h-4 w-4 mr-2"/> Save</Button>
              </div>
            </div>

            {/* COLLEGE-IMAGE WITH LOGO */}
            <div className="college__image rounded p-2 relative">
                <div className="college__image-container relative">
                    <Image src="/images/colleges/c2.jpg" alt="college" width={100} height={100} layout="responsive" className=" rounded-md object-cover w-full object-center"/>
                <div className="absolute top-0 left-0 h-full w-full bg-black/30 rounded-md"> </div>
                </div>
                <div className="logo-container w-14 md:w-20 ml-3 -mt-8 relative z-10">
                    <Image
                        src="/images/logo/l1.jpeg"
                        alt="Logo"
                        width={40}
                        height={40}
                        layout="responsive"
                        className="rounded-md object-center object-fill md:w-20"
                    />
                </div>

            </div>


            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle className=" leading-8 text-xl">AIIMS Delhi: Fees, Rankings, Courses, Admission 2024, Placements</CardTitle>
                    <CardDescription>
                    <MapPin className="h-4 w-4 inline-block align-baseline" /> Gautam Nagar, Delhi
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AIIMS Delhi is ranked 1st by India Today and NIRF 2023 under the Medical category, 6th by NIRF 2023 under the Overall category, and 12th by US News 2023 under the University (Overall) category. AIIMS is ranked 123rd by the QS WUR Ranking By Subject category 2023. AIIMS Delhi is one of the various AIIMS colleges present in India. At present, there are 23 AIIMS in India out of which 20 are functional and the rest are under construction or yet to be operational.
                  </p>

                  <p className="text-sm text-muted-foreground mt-4">
                    Delhi AIIMS, through more than 40 departments, offers UG, PG, and various other courses to students. These courses are offered across the Medical and various other streams. Located in Gautam Nagar, Delhi, the All-India Institute of Medical Sciences is known as an institution of national importance by an Act of Parliament. The college has more than 600 research publications by its faculty and researchers in a year.
                  </p>


                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Details</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CollegeDetailsTab/>
                  </CardContent>
                  
                </Card>
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Commonly Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid w-full">
                      <div className="grid gap-3">
                        <CollegeAccordion/>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <p>Address</p>
                        <p className="text-sm text-muted-foreground">AIIMS DELHI</p>
                        <p className="text-sm text-muted-foreground -mt-2">Sri Aurobindo Marg, Ansari Nagar East</p>
                        <p className="text-sm text-muted-foreground -mt-2">New Delhi - 110048</p>
                        <Button asChild>
                            <Link href="/login">Go to college website <MoveRight className="ml-2 scale-75" /></Link>
                            </Button>

                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>AIIMS DELHI</CardTitle>
                    <CardDescription>
                        Take a look at Campus
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src="/images/colleges/c3.jpg"
                        width="300"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <button>
                          <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src="/images/colleges/c4.jpg"
                            width="84"
                          />
                        </button>
                        <button>
                          <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src="/images/colleges/c5.jpg"
                            width="84"
                          />
                        </button>
                        <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                          <Plus  className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">2 More</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Hear it from students</CardTitle>
                    <CardDescription>
                    <MessageSquareQuote className="h-4 w-4 align-middle mr-2 inline-block" />835 Student Q&A
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div></div>
                    <iframe className=" w-full rounded-lg"  src="https://www.youtube.com/embed/IkeraXTdVS0?si=VJICOY9gxKsda3g_" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  )
}
