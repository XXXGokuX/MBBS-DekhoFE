import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CollegeDetailsCard } from "@/app/components/CollegeComponents/CollegeDetailsCards"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">All Colleges</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
                <Accordion type="multiple"  className="w-full">
                        <AccordionItem value="item-1" >
                          <AccordionTrigger>COUNTRY</AccordionTrigger>
                          <AccordionContent>
                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="russia" />
                              <label
                                htmlFor="russia"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Russia
                              </label>
                              
                          </div>
                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="srilanka" />
                              <label
                                htmlFor="srilanka"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Sri Lanka
                              </label>
                          </div>  

                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="australia" />
                              <label
                                htmlFor="australia"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Australia
                              </label>
                          </div>  

                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="germany" />
                              <label
                                htmlFor="germany"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Germany
                              </label>
                          </div>  
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>TOTAL FEES</AccordionTrigger>
                          <AccordionContent>
                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="10 LAKH" />
                              <label
                                htmlFor="10 LAKH"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                10 LAKH
                              </label>
                              
                          </div>
                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="25 LAKH" />
                              <label
                                htmlFor="25 LAKH"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                25 LAKH
                              </label>
                          </div>  

                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="50 LAKH" />
                              <label
                                htmlFor="50 LAKH"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                50 LAKH
                              </label>
                          </div>  

                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="75 LAKH+" />
                              <label
                                htmlFor="75 LAKH+"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                75 LAKH+
                              </label>
                          </div>  
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>EXAM ACCEPTED</AccordionTrigger>
                          <AccordionContent>
                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="NEET PG" />
                              <label
                                htmlFor="NEET PG"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                NEET PG
                              </label>
                              
                          </div>
                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="NEET" />
                              <label
                                htmlFor="NEET"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                NEET
                              </label>
                          </div>  

                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="CBSE" />
                              <label
                                htmlFor="CBSE"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                CBSE
                              </label>
                          </div>  

                          <div className="flex items-center space-x-2 mt-4">
                              <Checkbox id="MET" />
                              <label
                                htmlFor="MET"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                MET
                              </label>
                          </div>  
                          </AccordionContent>
                        </AccordionItem>
              </Accordion>
           
          </nav>
          <div className="grid gap-6">
            {/* ALL COLLEGE DETAILS */}
            <CollegeDetailsCard/>
          </div>
        </div>
      </main>
    </div>
  )
}
