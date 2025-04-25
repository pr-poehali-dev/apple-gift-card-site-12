import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Instructions = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight text-apple-black sm:text-4xl">
            Инструкции
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Все что вам нужно знать о покупке и активации Apple Gift Card
          </p>

          <div className="mt-12 space-y-10">
            <Card>
              <CardHeader>
                <CardTitle>Как активировать карту</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-blue text-white">
                      1
                    </div>
                    <h3 className="mt-4 font-medium">Откройте App Store</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Войдите в свой Apple ID аккаунт
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-blue text-white">
                      2
                    </div>
                    <h3 className="mt-4 font-medium">Нажмите на свой профиль</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Найдите иконку профиля в правом верхнем углу
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-blue text-white">
                      3
                    </div>
                    <h3 className="mt-4 font-medium">Выберите "Погасить карту"</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Введите код с купленной карты
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Что можно купить с Apple Gift Card?</AccordionTrigger>
                <AccordionContent>
                  <p>Apple Gift Card позволяет вам покупать:</p>
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground">
                    <li>Приложения и игры из App Store</li>
                    <li>Подписки (Apple Music, iCloud+, Apple TV+, Apple Arcade)</li>
                    <li>Музыку, фильмы и сериалы</li>
                    <li>Книги и аудиокниги</li>
                    <li>Внутриигровые покупки</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Как долго действует карта?</AccordionTrigger>
                <AccordionContent>
                  Apple Gift Card не имеет срока действия. После активации средства будут доступны на вашем Apple ID аккаунте до их полного использования.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Можно ли использовать карту для покупок в Apple Store?</AccordionTrigger>
                <AccordionContent>
                  Нет, Apple Gift Card может быть использована только для цифровых покупок в App Store, iTunes Store, Apple Books и для оплаты подписок Apple. Для покупок в физических магазинах Apple или на apple.com требуется другой тип подарочных карт.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Сколько времени занимает доставка кода?</AccordionTrigger>
                <AccordionContent>
                  Доставка кода происходит моментально после подтверждения оплаты. Код будет отправлен на указанный вами email адрес.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Что делать, если код не активируется?</AccordionTrigger>
                <AccordionContent>
                  Если у вас возникли проблемы с активацией кода, пожалуйста, свяжитесь с нашей службой поддержки. Мы гарантируем работоспособность всех продаваемых кодов и поможем решить любые проблемы с активацией.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Instructions;
