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
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import VideoCard from "./VideoCard"
  const particulars = [
    {
        key:"Location",
        value:"Veliky Novgorod, Russia"
    },
    {
        key:"Establishment year",
        value:"1993"
    },
    {
        key:"Website",
        value:"www.velikynovgorod.ru"
    },
    {
        key:"Temperature range",
        value:"12° to 22° C in July and -6° to -13° C in January"
    },
    {
        key:"Quality Education",
        value:"Safety on top priority"
    },
    {
        key:"Entrance Exam",
        value:"No Entrance Exam, No Donation"
    }
  ]

  const collegeFees= [
    {
      key:"Tuition Fee",
      fees: ["2,78,000","2,78,000","2,78,000","2,78,000","2,78,000","2,78,000"]
    },
    {
      key:"One Time Charges",
      fees:["1500","N/A","N/A","N/A","N/A","N/A"]
    },
    {
      key: "Hostel Fee",
      fees: ["20,000","20,000","20,000","20,000","20,000","20,000"]
    },
    {
      key:"Total Fee",
      fees: ["2,78,000","2,78,000","2,78,000","2,78,000","2,78,000","2,78,000"]
    }

  ]


  
  
export default function CollegeDetailsTab() {

    
  return (
    <Tabs defaultValue="c1">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="c1">College Info</TabsTrigger>
        <TabsTrigger value="c2">Course & Fees</TabsTrigger>
        <TabsTrigger value="c3" className="md:block hidden">Admissions</TabsTrigger>
        <TabsTrigger value="c4" className="md:block hidden">Hostel & Campus</TabsTrigger>
      </TabsList>
      <TabsContent value="c1">
                <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Particulars</TableHead>
                        <TableHead>Info</TableHead>
            
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {particulars.map((particular,index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{particular.key}</TableCell>
                        <TableCell>{particular.value}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                
                </Table>
      </TabsContent>
      <TabsContent value="c2">
          <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Tuition Fee</TableHead>
                            <TableHead>One Time Charges</TableHead>
                            <TableHead>Hostel Fee</TableHead>
                            <TableHead>Total</TableHead>
                
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array(6).fill(0).map((_,index) =>(
                            <TableRow key={index}>
                                <TableCell>{collegeFees[0].fees[index]}</TableCell>
                                <TableCell>{collegeFees[1].fees[index]}</TableCell>
                                <TableCell>{collegeFees[2].fees[index]}</TableCell>
                                <TableCell>{collegeFees[3].fees[index]}</TableCell>
                            </TableRow>
                            ))
                        }
                    </TableBody>
                    
          </Table>    
      </TabsContent>
      <TabsContent value="c3">
        <Card>
         
          <CardContent className="space-y-2 py-8">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              AIIMS Delhi Admission 2024: Eligibility & Selection Criteria
            </h3>

            <p className="text-sm text-muted-foreground">
              AIIMS Delhi admission is conducted in online mode and is entrance-based only. The institute offers undergraduate, postgraduate, super speciality and doctoral programmes at UG, PG and doctorate programmes in streams such as Medical, Nursing, Applied Science and Dental Studies, among others.
            </p>

            <p className="text-sm text-muted-foreground">
              For admission to the flagship course i.e. MBBS at AIIMS Delhi, candidates are required to pass NEET-UG exam. Selected candidates are further required to participate in counselling to get a seat in AIIMS. NEET UG exam 2024 will be held on May 5, 2024. The NEET UG Result 2024 will be released on June 14, 2024.
            </p>            

          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="c4">
        <Card>
         
          <CardContent className="space-y-2 py-8">
            <p className="text-sm text-muted-foreground">
              The dream college for every medical aspirant, All India Institute of Medical Sciences (AIIMS) Delhi is said to have one of the biggest and most beautiful campuses in India. The campus is spread over an area of 213.12 acres and is located in Ansari Nagar, Delhi (adjacent to the South Extension-II market). This prestigious college tops the charts of the NIRF Ranking for the Medical category every year. Hence, lakhs of students appear for its entrance exam every year and aspire to join this college, only a lucky few make it to AIIMS Delhi. The institute offers a residential facility, however, students get this facility on a first-come first-serve basis.
            </p>
            <VideoCard/>           
          </CardContent>
          
        </Card>
      </TabsContent>
      
    </Tabs>
  )
}
