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
      <div className="flex flex-row justify-center align-middle bg-[#5c60dc] py-[180px]">
        <div className="w-1/2">
          <h1 className="text-5xl text-white">Toma el control de tus finanzas con AdminCash</h1>
          <h2>Administra tus ingresos, gastos y ahorros de manera fácil e inteligente.</h2>
        </div>
    
        <img className="w-[400px] w-1/2" src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/67aa6769519aa08294a66fce_features_hero_test%20(1).avif" alt=""/>
      </div>
      
      
      <div className="text-center py-20 px-30">
        <h3 className="text-4xl">&quot;Simplifica tus finanzas, controla tus gastos y alcanza tus metas fácilmente.&quot;</h3>
      </div>
      <div>
        <h3 className="text-4xl">¿Por qué elegir AdminCash?</h3>
        <ul>
          <li>✅ Gestión de ingresos y gastos → Registra y categoriza todos tus movimientos.</li>
          <li>✅ Presupuestos personalizados → Planifica tus gastos según tus necesidades.</li>
          <li>✅ Reportes y análisis → Obtén gráficos detallados sobre tus finanzas.</li>
          <li>✅ Seguridad garantizada → Tus datos están protegidos con encriptación avanzada.</li>
          <li>✅ Accesible en cualquier dispositivo → Disponible en web y móvil.</li>
        </ul>
      </div>
    
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
