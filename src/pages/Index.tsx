import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="relative bg-apple-gray py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="animate-fade-in text-4xl font-medium tracking-tight text-apple-black sm:text-5xl md:text-6xl">
              Apple Gift Cards
            </h1>
            <p className="mt-6 animate-fade-in text-lg text-muted-foreground">
              Пополните свой счет iTunes и App Store с моментальной доставкой кода на email
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/products">
                <Button size="lg" className="rounded-full bg-apple-blue text-white hover:bg-apple-blue/90">
                  Купить сейчас
                </Button>
              </Link>
              <Link to="/instructions">
                <Button variant="outline" size="lg" className="rounded-full">
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-apple-black sm:text-4xl">
              Почему выбирают нас
            </h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 14-6 6h9v-3" />
                  <path d="M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium">Моментальная доставка</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Получите код карты сразу после оплаты
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="mt-4 text-lg font-medium">100% гарантия</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Все карты официальные и с гарантией активации
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                </svg>
                <h3 className="mt-4 text-lg font-medium">Удобство покупки</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Простая и безопасная оплата онлайн
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-apple-gray py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-apple-black sm:text-4xl">
              Доступные номиналы
            </h2>
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              <Link to="/products" className="group">
                <div className="rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                  <div className="text-center">
                    <div className="font-medium text-apple-black">1 000 ₽</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Базовое пополнение
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/products" className="group">
                <div className="rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                  <div className="text-center">
                    <div className="font-medium text-apple-black">2 500 ₽</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Стандартное пополнение
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/products" className="group">
                <div className="rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                  <div className="text-center">
                    <div className="font-medium text-apple-black">5 000 ₽</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Премиум пополнение
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
