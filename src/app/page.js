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

import Link from "next/link"



export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-center align-middle bg-[#5c60dc] py-[130px]">
        <div className=" flex flex-col justify-center align-middle w-1/2 ">
          <h1 className="text-5xl text-white font-bold">Toma el control de tus finanzas con AdminCash</h1>
          <h2 className="text-1xl text-white font-bold py-4">Administra tus ingresos, gastos y ahorros de manera fácil e inteligente.</h2>
          <Link href="/" >
            <div className="bg-[#1D8647] text-white text-center font-bold rounded-md w-[150px] p-3 ">
              Empieza gratis
            </div>
          </Link>
        </div>
    
        <img className="w-[400px] w-1/2" src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/67aa6769519aa08294a66fce_features_hero_test%20(1).avif" alt=""/>
      </div>
      
      <div className="text-center py-20 px-30">
        <h3 className="text-4xl">&quot;Simplifica tus finanzas, controla tus gastos y alcanza tus metas fácilmente.&quot;</h3>
      </div>
      <div className="p-10">
        <div>
          <h3 className="text-4xl">¿Por qué elegir AdminCash?</h3>
          <p>
            AdminCash te ofrece todas las herramientas que necesitas para tomar el control de tus finanzas de manera sencilla y eficiente. Descubre cómo nuestra 
            plataforma puede ayudarte a gestionar tus ingresos, optimizar tus presupuestos y visualizar tu progreso con reportes detallados. 🚀
          </p>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          <li className="w-[300px]">
            <div className="flex justify-center border-1 border-b-blue-950 p-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <path d="M0,128.002 C0,180.416 31.518,225.444 76.619,245.241 C76.259,236.303 76.555,225.573 78.847,215.848 C81.308,205.457 95.317,146.1 95.317,146.1 C95.317,146.1 91.228,137.927 91.228,125.848 C91.228,106.879 102.222,92.712 115.914,92.712 C127.557,92.712 133.182,101.457 133.182,111.929 C133.182,123.633 125.717,141.14 121.878,157.355 C118.671,170.933 128.686,182.008 142.081,182.008 C166.333,182.008 182.667,150.859 182.667,113.953 C182.667,85.899 163.772,64.901 129.405,64.901 C90.577,64.901 66.388,93.857 66.388,126.201 C66.388,137.353 69.676,145.217 74.826,151.307 C77.194,154.104 77.523,155.229 76.666,158.441 C76.052,160.796 74.642,166.466 74.058,168.713 C73.206,171.955 70.579,173.114 67.649,171.917 C49.765,164.616 41.436,145.031 41.436,123.015 C41.436,86.654 72.102,43.054 132.918,43.054 C181.788,43.054 213.953,78.418 213.953,116.379 C213.953,166.592 186.037,204.105 144.887,204.105 C131.068,204.105 118.069,196.635 113.616,188.15 C113.616,188.15 106.185,217.642 104.611,223.337 C101.897,233.206 96.585,243.07 91.728,250.758 C103.24,254.156 115.401,256.007 128.005,256.007 C198.689,256.007 256.001,198.698 256.001,128.002 C256.001,57.309 198.689,0 128.005,0 C57.314,0 0,57.309 0,128.002 Z"></path>                 
                </g>
              </svg>
            </div>
            <div className="bg-[#262973] text-white p-5">
              <h2 className="font-bold">✅ Gestión de ingresos y gastos </h2>
              <p>Registra y categoriza todos tus movimientos.</p>
            </div>
          </li>
          <li className="w-[300px]">
            <div className="flex justify-center border-1 border-b-blue-950 p-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">

              </svg>
            </div>
            <div className="bg-[#262973] text-white p-5">
              <h2 className="font-bold">✅ Presupuestos personalizados</h2>
              <p>Planifica tus gastos según tus necesidades.</p>
            </div>
          </li>
          <li className="w-[300px]">
            <div className="flex justify-center border-1 border-b-blue-950 p-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">

              </svg>
            </div>
            <div className="bg-[#262973] text-white p-5">
              <h2 className="font-bold">✅ Reportes y análisis</h2>
              <p>Obtén gráficos detallados sobre tus finanzas.</p>
            </div>
          </li>
          <li className="w-[300px]">
            <div className="flex justify-center border-1 border-b-blue-950 p-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">

              </svg>
            </div>
            <div className="bg-[#262973] text-white p-5">
              <h2 className="font-bold">✅ Seguridad garantizada</h2>
              <p>Tus datos están protegidos con encriptación avanzada.</p>
            </div>
          </li>
          <li className="w-[300px]">
            <div className="flex justify-center border-1 border-b-blue-950 p-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">

              </svg>
            </div>
            <div className="bg-[#262973] text-white p-5">
              <h2 className="font-bold">✅ Accesible en cualquier dispositivo</h2>
              <p>Disponible en web y móvil.</p>
            </div>
          </li>
        </ul>
      </div>
    
      <div className="flex flex-col justify-center items-center">
        <h2>Características</h2>
        <Carousel>
          <CarouselContent className="w-[1000px]">
            <CarouselItem className="basis-1/2 lg:basis-1/3">
            <div className="w-[300px]">
              <div className="flex justify-center border-1 border-b-blue-950 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">

                </svg>
              </div>
              <div className="bg-[#262973] text-white p-5">
                <h2 className="font-bold">✅ Reportes y análisis</h2>
                <p>Obtén gráficos detallados sobre tus finanzas.</p>
              </div>
            </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/3">
              <div className="w-[300px]">
                <div className="flex justify-center border-1 border-b-blue-950 p-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">

                  </svg>
                </div>
                <div className="bg-[#262973] text-white p-5">
                  <h2 className="font-bold">✅ Reportes y análisis</h2>
                  <p>Obtén gráficos detallados sobre tus finanzas.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/3">
            <div className="w-[300px]">
              <div className="flex justify-center border-1 border-b-blue-950 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">

                </svg>
              </div>
              <div className="bg-[#262973] text-white p-5">
                <h2 className="font-bold">✅ Reportes y análisis</h2>
                <p>Obtén gráficos detallados sobre tus finanzas.</p>
              </div>
            </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/3">
            <div className="w-[300px]">
              <div className="flex justify-center border-1 border-b-blue-950 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">

                </svg>
              </div>
              <div className="bg-[#262973] text-white p-5">
                <h2 className="font-bold">✅ Reportes y análisis</h2>
                <p>Obtén gráficos detallados sobre tus finanzas.</p>
              </div>
            </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/3">
            <div className="w-[300px]">
              <div className="flex justify-center border-1 border-b-blue-950 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 257" version="1.1" role="img">

                </svg>
              </div>
              <div className="bg-[#262973] text-white p-5">
                <h2 className="font-bold">✅ Reportes y análisis</h2>
                <p>Obtén gráficos detallados sobre tus finanzas.</p>
              </div>
            </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex flex-row p-10 h-[650px] ">
        <div className="flex flex-col align-middle justify-center">
          <img src="/home/img-duda.jpg" alt=""/>
        </div>
        <div className="flex flex-col align-middle justify-center">
          <h2 className="text-center text-2xl p-2">Preguntas frecuentes</h2>
          <div className="flex flex-col w-[500px] ">
            <Accordion className="border-1 border-black" type="single" collapsible >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-4">1. ¿Qué es AdminCash y cómo me ayuda?</AccordionTrigger>
                <AccordionContent className="px-4">
                AdminCash es una plataforma de gestión financiera que te permite controlar tus ingresos, gastos y presupuestos en un solo lugar. 
                Con herramientas intuitivas y reportes detallados, podrás mejorar tu administración del dinero y alcanzar tus metas financieras.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion className="border-1 border-black" type="single" collapsible >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-4">2. ¿AdminCash es gratis?</AccordionTrigger>
                <AccordionContent className="px-4">
                AdminCash ofrece un plan gratuito con funciones esenciales para la gestión de tus finanzas. También contamos con planes premium que 
                desbloquean herramientas avanzadas como reportes personalizados, sincronización con cuentas bancarias y más.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion className="border-1 border-black" type="single" collapsible >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-4">3. ¿Necesito conocimientos financieros para usar AdminCash?</AccordionTrigger>
                <AccordionContent className="px-4">
                No, AdminCash es fácil de usar incluso si no tienes experiencia previa en finanzas. Nuestra interfaz intuitiva y nuestras guías te 
                ayudarán a administrar tu dinero sin complicaciones.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion className="border-1 border-black" type="single" collapsible >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-4">4. ¿Puedo acceder a AdminCash desde mi teléfono?</AccordionTrigger>
                <AccordionContent className="px-4">
                Sí, AdminCash está disponible en versión web y móvil, por lo que puedes gestionar tus finanzas desde cualquier dispositivo con 
                conexión a internet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
