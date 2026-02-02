import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const quickLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Cardápio', href: '#menu' },
  { name: 'Contato', href: '#contact' },
];

const WHATSAPP_NUMBER = '5511980513236';

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de fazer um pedido de Ovos de Páscoa da Hemana Doces!'
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-chocolate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center">
                <span className="text-white text-xl">🐰</span>
              </div>
              <span className="text-xl font-bold">Hemana Doces</span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Ovos de Páscoa artesanais feitos com amor e os melhores
              ingredientes. Levando doçura e felicidade para a sua Páscoa.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-pink transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Horário</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-white/70">Segunda - Sábado</span>
                <span>9h - 20h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Domingo</span>
                <span>10h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Feriados</span>
                <span>10h - 16h</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70">
                Faça seu pedido pelo WhatsApp
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-white/70 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  (11) 98051-3236
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 Hemana Doces. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-pink transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/50 hover:text-pink transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
