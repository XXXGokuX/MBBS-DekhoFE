import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function CollegeAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I get AIIMS Delhi with 650 marks?</AccordionTrigger>
          <AccordionContent>
            Since you havent mentioned your category, we would consider you to belong to the General Category. You should aim for at least 700+ to get AIIMS New Delhi. According to last years data of NEET 2022, an aspirant scoring 650 marks had an AIR of around 4100. Also, with 650 marks, you have greater chances of getting an MBBS seat at AIIMS Jammu, and in the case of a reserved category, a candidate should aim for at least 675+.


          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  