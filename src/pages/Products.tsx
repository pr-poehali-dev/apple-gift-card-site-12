import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

interface GiftCard {
  id: number;
  title: string;
  price: number;
  value: number;
  description: string;
}

const giftCards: GiftCard[] = [
  {
    id: 1,
    title: "Apple Gift Card",
    price: 1050,
    value: 1000,
    description: "Пополните свой счет iTunes или App Store на 1 000 рублей"
  },
  {
    id: 2,
    title: "Apple Gift Card",
    price: 2600,
    value: 2500,
    description: "Пополните свой счет iTunes или App Store на 2 500 рублей"
  },
  {
    id: 3,
    title: "Apple Gift Card",
    price: 5150,
    value: 5000,
    description: "Пополните свой счет iTunes или App Store на 5 000 рублей"
  }
];

const Products = () => {
  const [loading, setLoading] = useState<number | null>(null);

  const handleBuy = (id: number) => {
    setLoading(id);
    
    // Имитация запроса на сервер
    setTimeout(() => {
      setLoading(null);
      toast({
        title: "Товар добавлен в корзину",
        description: "Перейдите в корзину для оформления заказа"
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-medium tracking-tight text-apple-black sm:text-4xl">
            Apple Gift Cards
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Выберите подходящий номинал для пополнения вашего аккаунта
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {giftCards.map((card) => (
              <Card key={card.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center rounded-md bg-apple-gray p-8">
                    <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6725 7.33282C16.4396 7.63412 15.1194 8.50954 15.1194 10.2491C15.1194 12.2597 16.7946 13.0456 16.9175 13.0991C16.9054 13.1402 16.6122 14.1068 15.9356 15.0952C15.3361 15.9647 14.7124 16.8328 13.7556 16.8328C12.7988 16.8328 12.5531 16.2644 11.4435 16.2644C10.3217 16.2644 9.9638 16.8328 9.06893 16.8328C8.17405 16.8328 7.50143 15.9127 6.84978 15.0432C6.09588 14.0235 5.4653 12.4131 5.4653 10.8735C5.4653 8.44442 7.08441 7.14325 8.64921 7.14325C9.56507 7.14325 10.335 7.76461 10.9141 7.76461C11.4676 7.76461 12.3371 7.10833 13.3897 7.10833C13.6588 7.10833 14.7003 7.14325 15.4905 7.96562C15.4299 7.99848 16.6725 7.33282 16.6725 7.33282ZM13.1199 5.9125C13.5131 5.44117 13.7919 4.79427 13.7919 4.14736C13.7919 4.07103 13.7798 3.9947 13.7677 3.94165C13.1561 3.96783 12.4471 4.30301 11.9944 4.82825C11.6376 5.20938 11.3081 5.85629 11.3081 6.51257C11.3081 6.59827 11.3323 6.68398 11.3444 6.71952C11.3807 6.73089 11.4413 6.74225 11.502 6.74225C12.0591 6.74225 12.7023 6.42934 13.1199 5.9125Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="mt-6 flex items-baseline justify-between">
                    <span className="text-2xl font-bold">{card.value.toLocaleString()} ₽</span>
                    <span className="text-muted-foreground">Цена: {card.price.toLocaleString()} ₽</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button 
                    className="w-full bg-apple-blue hover:bg-apple-blue/90"
                    onClick={() => handleBuy(card.id)}
                    disabled={loading === card.id}
                  >
                    {loading === card.id ? "Обработка..." : "Купить сейчас"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
