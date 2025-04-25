import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

interface Accessory {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
}

const accessories: Accessory[] = [
  {
    id: 1,
    title: "AirPods Pro 2",
    price: 24990,
    description: "Беспроводные наушники с активным шумоподавлением",
    image: "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    badge: "Хит"
  },
  {
    id: 2,
    title: "Apple Watch Ultra",
    price: 79990,
    description: "Самые прочные и функциональные часы в линейке",
    image: "https://images.unsplash.com/photo-1680752927938-81611498f9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "MagSafe Charger",
    price: 5490,
    description: "Беспроводная зарядка для iPhone с магнитным креплением",
    image: "https://images.unsplash.com/photo-1625762337519-5e827dd2cca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    badge: "Новинка"
  }
];

const Accessories = () => {
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
            Аксессуары Apple
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Оригинальные аксессуары для ваших устройств Apple
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {accessories.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle>{item.title}</CardTitle>
                    {item.badge && (
                      <Badge variant="secondary" className="bg-apple-blue text-white">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square overflow-hidden rounded-md">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="text-2xl font-bold">{item.price.toLocaleString()} ₽</div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button 
                    className="w-full bg-apple-blue hover:bg-apple-blue/90"
                    onClick={() => handleBuy(item.id)}
                    disabled={loading === item.id}
                  >
                    {loading === item.id ? "Обработка..." : "Купить сейчас"}
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

export default Accessories;
