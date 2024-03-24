import { sendMessageWsp } from "../../helpers/helper";
import { Text } from "../atoms/Text";
import { Card } from "../molecules/Card";
import { ServicesTexts } from "../particles/Data";

const Membership = () => {
  return (
    <section className="w-full h-auto py-20 md:py-28 lg:py-40 bg-zinc-950 flex flex-col md:gap-28 gap-20 justify-center items-center">
      <div className="flex flex-col items-center relative before:absolute before:-bottom-6 before:left-30 before:w-36 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
        <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">
          Nuestros Servicios
        </Text>
        <Text as="h1" className="w-full absolute text-zinc-500/40 md:text-5xl text-3xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10">
          ¿Qué Ofrecemos?
        </Text>
      </div>
      <main className="grid lg:w-[90%] md:w-[96%] w-[90%] md:grid-cols-3 items-start gap-8 md:gap-4 lg:gap-8" style={{ alignItems: 'stretch' }}>
        {ServicesTexts && ServicesTexts.map((service, index) => (
          <div key={index} className="flex justify-center">
            <Card className={`w-full flex flex-col items-center justify-between gap-4 border border-zinc-500 transition-all duration-200 hover:border-red-500/50 pb-5`}>
              <img src={service.image} alt={service.title} />
              <div className="px-5 pb-5 flex flex-col">
                <Text as="h3" className={`uppercase text-lg font-bold w-full py-2 text-center text-blue-300`}>
                  {service.title}
                </Text>
                <p className="text-zinc-100 pb-4 text-justify">
                  {service?.description}
                </p>
                <ul className="text-zinc-100 flex flex-col gap-1">
                  {service?.services && service.services.map((ser, i) => (
                    <li key={i} className="text-justify">
                      {ser.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full px-5">
                <a href={sendMessageWsp(service.title)} target="_blank" className="bg-indigo-600 w-full text-center py-2 text-white uppercase font-medium">
                  Solicitar Información
                </a>
              </div>
            </Card>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Membership;
