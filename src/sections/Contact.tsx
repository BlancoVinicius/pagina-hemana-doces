import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { MessageCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

const WHATSAPP_NUMBER = '5511980513236';

export function Contact() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de fazer um pedido de Ovos de Páscoa da Hemana Doces!'
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecionando para WhatsApp!', {
      description: 'Aguardamos seu pedido!',
      icon: '🐰',
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-pink-light"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-pink rounded-full" />
            <span className="text-sm font-medium text-pink-dark">CONTATO</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4">
            Faça seu Pedido
            <span className="text-pink"> pelo WhatsApp</span>
          </h2>

          <p className="text-lg text-chocolate-light max-w-2xl mx-auto">
            É rápido e fácil! Clique no botão abaixo e fale diretamente conosco.
          </p>
        </div>

        {/* WhatsApp Card */}
        <div
          className={`bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center transition-all duration-800 delay-200 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
          }`}
        >
          {/* WhatsApp Icon */}
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <MessageCircle className="w-12 h-12 text-white" />
          </div>

          {/* Phone Number */}
          <h3 className="text-2xl font-bold text-chocolate mb-2">
            (11) 98051-3236
          </h3>
          <p className="text-chocolate-light mb-8">
            Clique no botão abaixo para iniciar a conversa
          </p>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-12 py-7 text-lg btn-hover w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Falar no WhatsApp
          </Button>

          {/* Hours */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-pink" />
              <span className="font-semibold text-chocolate">Horário de Atendimento</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-chocolate-light mb-1">Segunda - Sábado</div>
                <div className="font-semibold text-chocolate">9h às 20h</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-chocolate-light mb-1">Domingo</div>
                <div className="font-semibold text-chocolate">10h às 18h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
