import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium">Apple Gift Cards</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Пополните свой счет iTunes и App Store.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 text-sm">
            <Link to="/" className="hover:underline">Главная</Link>
            <Link to="/products" className="hover:underline">Карты</Link>
            <Link to="/instructions" className="hover:underline">Инструкции</Link>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© 2025 Apple Gift Cards</p>
            <p className="mt-1">Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
