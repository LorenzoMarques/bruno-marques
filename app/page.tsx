import Image from "next/image";
import { Button } from "./components/button";
import Header from "./components/header";
import Line from "./components/line";
import BGCircle from "./components/bgCircle";
import { Card } from "./components/card";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="mt-[50px] lg:mt-0 w-full pl-10 pr-10 lg:p-20 flex justify-between mt-[100px]" id="about">
          <div>
            <Line className="lg:hidden" />
            <h2 className="text-4xl lg:text-[80px] lg:leading-[1.0] text-[--primary-color] font-bold mt-[22px] lg:max-w-[650px]">Seus direitos, nossa missão</h2>

            <p className="mt-[30px] lg:max-w-[600px] lg:text-[22px]">Bruno Marques Advocacia e Consultoria Jurídica — Compromisso, excelência e defesa dos seus direitos.

              Somos um escritório especializado em Direito Trabalhista, dedicado a oferecer suporte jurídico de qualidade, com ética, transparência e resultados. Lutamos incansavelmente para garantir que seus direitos no ambiente de trabalho sejam respeitados, acompanhando você em cada etapa do processo com atenção e expertise.

              Conte conosco para estar ao seu lado, transformando desafios em soluções.</p>

            <a href="#contact">
              <Button text="Fale Conosco" className="w-full h-[80px] mt-[30px] text-xl lg:w-[180px]" />
            </a>
            <Line className="mt-[33px] lg:hidden" />

          </div>


          <div className="h-[830px] hidden lg:block relative"
          >
            <BGCircle size="630px" />
            <BGCircle size="800px" />

            <div className="h-full overflow-hidden">
              <Image src={'/Bruno.png'} alt="Bruno Marques" width={600} height={600} />
            </div>

            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[350px] text-center p-4 border border-[--foreground] bg-[--secondary-font-color] rounded-xl">
              <h3 className="text-2xl font-bold text-[--primary-color]">Bruno Marques</h3>
              <p>- Advogado</p>
            </div>
          </div>
        </section>
      </main>

      <section className="mt-0 w-full p-10 lg:p-20 lg:flex lg:justify-between" id="testimonials">
        <div className="lg:max-w-96">
          <h2 className="text-4xl lg:text-[50px] lg:leading-[1.0] text-[--primary-color] font-bold lg:max-w-[650px]">
            O que podemos fazer por você?
          </h2>
          <p className="mt-10">
            Nosso escritório é especializado em direito trabalhista,
            oferecendo soluções para questões como demissões,
            salários atrasados, assédio e acidentes de trabalho.
            Estamos prontos para garantir que seus direitos sejam respeitados com ética e dedicação.
          </p>
        </div>

        <Card
          title="Auxilio Doença"
          description="Orientamos e ajudamos você a conquistar o auxílio-doença, assegurando seus direitos em caso de incapacidade para o trabalho"
          imgPath="imageCard1.svg"
        />
      </section>

      <section className="mt-[50px] lg:mt-0 w-full p-10 lg:p-20 flex justify-between" id="contact">
        CONTACT
      </section>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
