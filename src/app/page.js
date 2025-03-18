import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div >
      <div>
        <h1>Toma el control de tus finanzas con AdminCash</h1>
        <Image src="/public/main-page/img-main.jpg" alt="" width={100} height={100}/>
      </div>
      
      <h2>Administra tus ingresos, gastos y ahorros de manera fácil e inteligente.</h2>
    
    <div className="flex flex-col justify-center items-center">
      <h2>Características</h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/2 lg:basis-1/3 ">Mejora manejo finaziero</CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/3">...</CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/3">...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

    <div>
      <h2>Preguntas frecuentes</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </div>

  );
}
