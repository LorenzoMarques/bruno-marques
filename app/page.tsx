import { Button } from "./components/button";
import Header from "./components/header";
import Line from "./components/line";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="mt-[50px] w-full p-10">
          <Line />

          <h2 className="text-3xl text-[--primary-color] font-bold mt-[22px]">Seus direitos, nossa missão</h2>

          <p className="mt-[30px]">Com dedicação e expertise, lutamos pelos seus direitos no ambiente de trabalho. Conte conosco em cada passo.</p>

          <Button text="Fale Conosco" className="w-full h-[80px] mt-[30px] text-xl" />

          <Line className="mt-[33px]" />
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
