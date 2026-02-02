import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gift } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-hero flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg transition-all duration-700 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Gift className="w-5 h-5 text-pink" />
              <span className="text-sm font-medium text-chocolate">
                Especial de Páscoa 2026
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-chocolate leading-tight mb-6 transition-all duration-700 delay-100 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              Hemana Doces
              <br />
              <span className="text-pink">Ovos de Páscoa</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-chocolate-light mb-8 max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-200 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Descubra a magia da Páscoa com nossos ovos de chocolate artesanais.
              Feitos com amor, ingredientes selecionados e recheios que derretem na boca.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Button
                onClick={() => scrollToSection('#menu')}
                size="lg"
                className="bg-pink hover:bg-pink-dark text-white rounded-full px-8 py-6 text-lg btn-hover animate-pulse-soft"
              >
                Fazer Pedido
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection('#menu')}
                variant="outline"
                size="lg"
                className="border-2 border-pink text-pink hover:bg-pink hover:text-white rounded-full px-8 py-6 text-lg transition-all"
              >
                Ver Cardápio
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${
              isLoaded
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90'
            }`}
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-caramel/30 rounded-full blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-light/50 rounded-full blur-3xl" />

              {/* Main Image */}
              <div className="relative animate-float">
                <img
                  src="/hero-ovos.jpg"
                  alt="Ovos de Páscoa artesanais decorados"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-fade-in-up delay-500">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-mint/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-chocolate">
                        100% Artesanal
                      </div>
                      <div className="text-xs text-chocolate-light">
                        Feito com amor
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price badge */}
                <div className="absolute -top-4 -right-4 bg-pink text-white rounded-2xl shadow-xl p-4 animate-fade-in-up delay-600">
                  <div className="text-center">
                    <div className="text-xs opacity-80">A partir de</div>
                    <div className="text-2xl font-bold">R$ 45,00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
