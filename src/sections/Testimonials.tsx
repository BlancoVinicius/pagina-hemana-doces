import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Silva',
    text: 'Os melhores mini donuts que já comi! Super fofinhos e saborosos. Peço toda semana para o café da tarde com minha família.',
    rating: 5,
    avatar: 'AS',
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    text: 'Entrega rápida e produtos sempre frescos. Meus filhos adoram! O de Nutella é o favorito deles. Super recomendo!',
    rating: 5,
    avatar: 'CM',
  },
  {
    id: 3,
    name: 'Juliana Costa',
    text: 'A variedade de sabores é incrível. O de caramelo salgado é meu favorito! Atendimento excelente e embalagem muito bonita.',
    rating: 5,
    avatar: 'JC',
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    text: 'Descobri essa confeitaria há 3 meses e não paro mais de pedir. Qualidade impecável e sabor único. Parabéns!',
    rating: 5,
    avatar: 'PO',
  },
];

export function Testimonials() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-pink-light rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-pink rounded-full" />
            <span className="text-sm font-medium text-pink-dark">
              DEPOIMENTOS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4">
            O que Nossos
            <span className="text-pink"> Clientes Dizem</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-800 delay-200 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
          }`}
        >
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-pink rounded-full flex items-center justify-center shadow-lg z-10">
            <Quote className="w-8 h-8 text-white" />
          </div>

          {/* Cards Container */}
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 pt-16 relative overflow-hidden">
            {/* Testimonial Content */}
            <div className="relative h-64 sm:h-48">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ${
                    index === currentIndex
                      ? 'opacity-100 translate-x-0'
                      : index < currentIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-caramel text-caramel"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg sm:text-xl text-chocolate-light mb-8 max-w-2xl leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-chocolate">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-chocolate-light">
                        Cliente Verificado
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pink hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-pink w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pink hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className={`flex flex-wrap justify-center gap-8 mt-16 transition-all duration-800 delay-400 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {[
            { value: '4.9', label: 'Avaliação Média' },
            { value: '10K+', label: 'Reviews 5 Estrelas' },
            { value: '99%', label: 'Clientes Satisfeitos' },
          ].map((badge, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-pink">{badge.value}</div>
              <div className="text-sm text-chocolate-light">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
