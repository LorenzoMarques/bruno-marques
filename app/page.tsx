import Image from "next/image";
import { Button } from "./components/button";
import Header from "./components/header";
import Line from "./components/line";
import BGCircle from "./components/bgCircle";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="mt-[50px] lg:mt-0 w-full p-10 lg:p-20 flex justify-between" id="about">
          <div>
            <Line className="lg:hidden" />
            <h2 className="text-3xl lg:text-[80px] lg:leading-[1.0] text-[--primary-color] font-bold mt-[22px] lg:max-w-[650px]">Seus direitos, nossa missão</h2>

            <p className="mt-[30px] lg:max-w-[600px] lg:text-[22px]">Bruno Marques Advocacia e Consultoria Jurídica — Compromisso, excelência e defesa dos seus direitos.

              Somos um escritório especializado em Direito Trabalhista, dedicado a oferecer suporte jurídico de qualidade, com ética, transparência e resultados. Lutamos incansavelmente para garantir que seus direitos no ambiente de trabalho sejam respeitados, acompanhando você em cada etapa do processo com atenção e expertise.

              Conte conosco para estar ao seu lado, transformando desafios em soluções.</p>

            <Button text="Fale Conosco" className="w-full h-[80px] mt-[30px] text-xl lg:w-[180px]" />
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

        <section className="mt-[50px] lg:mt-0 w-full p-10 lg:p-20 flex justify-between" id="testimonials">
          <div>
            <Line className="lg:hidden" />
            <h2 className="text-3xl lg:text-[80px] lg:leading-[1.0] text-[--primary-color] font-bold mt-[22px] lg:max-w-[650px]">Seus direitos, nossa missão</h2>

            <p className="mt-[30px] lg:max-w-[600px] lg:text-[22px]">Bruno Marques Advocacia e Consultoria Jurídica — Compromisso, excelência e defesa dos seus direitos.

              Somos um escritório especializado em Direito Trabalhista, dedicado a oferecer suporte jurídico de qualidade, com ética, transparência e resultados. Lutamos incansavelmente para garantir que seus direitos no ambiente de trabalho sejam respeitados, acompanhando você em cada etapa do processo com atenção e expertise.

              Conte conosco para estar ao seu lado, transformando desafios em soluções.</p>

            <Button text="Fale Conosco" className="w-full h-[80px] mt-[30px] text-xl lg:w-[180px]" />
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

        <section className="mt-[50px] lg:mt-0 w-full p-10 lg:p-20 flex justify-between" id="contact">
          <div>
            <Line className="lg:hidden" />
            <h2 className="text-3xl lg:text-[80px] lg:leading-[1.0] text-[--primary-color] font-bold mt-[22px] lg:max-w-[650px]">Seus direitos, nossa missão</h2>

            <p className="mt-[30px] lg:max-w-[600px] lg:text-[22px]">Bruno Marques Advocacia e Consultoria Jurídica — Compromisso, excelência e defesa dos seus direitos.

              Somos um escritório especializado em Direito Trabalhista, dedicado a oferecer suporte jurídico de qualidade, com ética, transparência e resultados. Lutamos incansavelmente para garantir que seus direitos no ambiente de trabalho sejam respeitados, acompanhando você em cada etapa do processo com atenção e expertise.

              Conte conosco para estar ao seu lado, transformando desafios em soluções.</p>

            <Button text="Fale Conosco" className="w-full h-[80px] mt-[30px] text-xl lg:w-[180px]" />
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

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
