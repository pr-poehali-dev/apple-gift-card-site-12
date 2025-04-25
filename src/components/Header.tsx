import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6725 7.33282C16.4396 7.63412 15.1194 8.50954 15.1194 10.2491C15.1194 12.2597 16.7946 13.0456 16.9175 13.0991C16.9054 13.1402 16.6122 14.1068 15.9356 15.0952C15.3361 15.9647 14.7124 16.8328 13.7556 16.8328C12.7988 16.8328 12.5531 16.2644 11.4435 16.2644C10.3217 16.2644 9.9638 16.8328 9.06893 16.8328C8.17405 16.8328 7.50143 15.9127 6.84978 15.0432C6.09588 14.0235 5.4653 12.4131 5.4653 10.8735C5.4653 8.44442 7.08441 7.14325 8.64921 7.14325C9.56507 7.14325 10.335 7.76461 10.9141 7.76461C11.4676 7.76461 12.3371 7.10833 13.3897 7.10833C13.6588 7.10833 14.7003 7.14325 15.4905 7.96562C15.4299 7.99848 16.6725 7.33282 16.6725 7.33282ZM13.1199 5.9125C13.5131 5.44117 13.7919 4.79427 13.7919 4.14736C13.7919 4.07103 13.7798 3.9947 13.7677 3.94165C13.1561 3.96783 12.4471 4.30301 11.9944 4.82825C11.6376 5.20938 11.3081 5.85629 11.3081 6.51257C11.3081 6.59827 11.3323 6.68398 11.3444 6.71952C11.3807 6.73089 11.4413 6.74225 11.502 6.74225C12.0591 6.74225 12.7023 6.42934 13.1199 5.9125Z" fill="currentColor"/>
          </svg>
          <span className="font-medium">Apple Gift Cards</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Товары</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link to="/products" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-apple-gray/50 to-apple-gray p-6 no-underline outline-none focus:shadow-md">
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Gift Cards
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Пополните счет iTunes и App Store с моментальной доставкой
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link to="/accessories" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Аксессуары</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Оригинальные аксессуары для устройств Apple
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/gift-sets" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Подарочные наборы</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Комплекты товаров Apple со специальными скидками
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/instructions" className={navigationMenuTriggerStyle()}>
                Инструкции
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
