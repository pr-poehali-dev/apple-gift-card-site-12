import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface GiftSet {
  id: number;
  title: string;
  price: number;
  items: string[];
  image: string;
  savings: number;
  badge?: string;
}

const giftSets: GiftSet[] = [
  {
    id: 1,
    title: "Стартовый набор",
    price: 9990,
    items: [
      "Apple Gift Card 5000₽",
      "Чехол для iPhone",
      "Защитное стекло"
    ],
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    savings: 1500,
    badge: "Популярный"
  },
  {
    id: 2,
    title: "Премиум набор",
    price: 24990,
    items: [
      "Apple Gift Card 10000₽",
      "AirPods",
      "MagSafe Charger"
    ],
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    savings: 3000
  },
  {
    id: 3,
    title: "Подарочный набор",
    price: 14990,
    items: [
      "Apple Gift Card 7500₽",
      "Apple Watch Band",
      "Power Bank"
    ],
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    savings: 2000,
    badge: "Новинка"
  }
];

const GiftSets = () => {
  const [loading, setLoading] = useState<number | null>(null);

  const handleBuy = (id: number) => {
    setLoading(id);
    
    // Имитация запроса на сервер
    setTimeout(() => {
      setLoading(null);
      toast({
        title: "Набор добавлен в корзину",
        description: "Перейдите в корзину для оформления заказа"
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-medium tracking-tight text-apple-black sm:text-4xl">
            Подарочные наборы
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Комплекты товаров Apple со скидкой для идеального подарка
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {giftSets.map((set) => (
              <Card key={set.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle>{set.title}</CardTitle>
                    {set.badge && (
                      <Badge variant="secondary" className="bg-apple-blue text-white">
                        {set.badge}
                      </Badge>
                    )}
                  </div>
                  <CardDescription>Экономия {set.savings.toLocaleString()} ₽</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-md">
                    <img 
                      src={set.image} 
                      alt={set.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">В комплект входит:</p>
                    <ul className="space-y-1">
                      {set.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-apple-blue" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold">{set.price.toLocaleString()} ₽</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {(set.price + set.savings).toLocaleString()} ₽
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button 
                    className="w-full bg-apple-blue hover:bg-apple-blue/90"
                    onClick={() => handleBuy(set.id)}
                    disabled={loading === set.id}
                  >
                    {loading === set.id ? "Обработка..." : "Купить набор"}
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

export default GiftSets;