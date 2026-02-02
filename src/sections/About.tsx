import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Heart, Award, Sparkles } from 'lucide-react';

export function About() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-800 ${
              isRevealed
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink/20 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-caramel/20 rounded-full" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/about-kitchen.jpg"
                  alt="Nossa cozinha artesanal"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-8 -right-4 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-pink rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-chocolate">6+</div>
                    <div className="text-sm text-chocolate-light">
                      Anos de Experiência
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-800 delay-200 ${
              isRevealed
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-16'
            }`}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-pink-light rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-pink rounded-full" />
              <span className="text-sm font-medium text-pink-dark">
                NOSSA HISTÓRIA
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-6">
              Paixão por
              <br />
              <span className="text-pink">Chocolate</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-chocolate-light mb-6 leading-relaxed">
              Tudo começou com uma paixão por chocolate e o desejo de criar
              ovos de Páscoa especiais. Hoje, a Hemana Doces é sinônimo de
              qualidade e sabor inigualável, conquistando corações a cada Páscoa.
            </p>

            <p className="text-lg text-chocolate-light mb-8 leading-relaxed">
              Cada ovo de Páscoa é cuidadosamente preparado à mão, usando apenas
              os melhores chocolates e recheios selecionados. Nossa missão é
              levar momentos de felicidade e doçura para a sua Páscoa.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                'Ingredientes Premium',
                'Produção Artesanal',
                'Entrega Rápida',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-mint/20 rounded-full flex items-center justify-center">
                    <span className="text-mint text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium text-chocolate">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
              <div
                className={`text-center transition-all duration-600 ${
                  isRevealed
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <Award className="w-6 h-6 text-pink mx-auto mb-2" />
                <div className="text-2xl font-bold text-chocolate">
                  Artesanal
                </div>
                <div className="text-xs text-chocolate-light">
                  Feito à mão
                </div>
              </div>
              <div
                className={`text-center transition-all duration-600 ${
                  isRevealed
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <Sparkles className="w-6 h-6 text-pink mx-auto mb-2" />
                <div className="text-2xl font-bold text-chocolate">
                  Premium
                </div>
                <div className="text-xs text-chocolate-light">
                  Qualidade superior
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
