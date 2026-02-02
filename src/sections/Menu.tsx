import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Ovo Rafaello',
    description: 'Ovo de colher com casca de chocolate branco com recheio cremoso de coco, amêndoas e decorado com bombom Rafaello',
    price: 45.0,
    image: '/ovo-rafaello.jpeg',
    tag: 'Mais Vendido',
  },
  {
    id: 2,
    name: 'Ovo Óreo',
    description: 'Ovo de colher com casca de chocolate branco com Óreo, recheada de brigadeiro branco e pedaços crocantes de biscoito Óreo',
    price: 55.0,
    image: '/ovo-brownie.jpeg',
  },
  {
    id: 3,
    name: 'Ovo brownie',
    description: 'Ovo de colher com casca de chocolate ao leite, recheado com brownie e brigadeiro cremoso, finalizado com pedaços de brownie',
    price: 65.0,
    image: '/ovo-brownie.jpeg',
    tag: 'Premium',
  },
  {
    id: 4,
    name: ' Ovo doces Fini',
    description: 'Casca de chocolate ao leite recheada com brigadeiro cremoso e finalizada com doces Fini',
    price: 85.0,
    image: '/ovo-fini.jpeg',
    tag: 'Favorito',
  },
  {
    id: 5,
    name: 'Kit Degustação',
    description: 'Monte seu Kit com 3 ovos de colher à sua escolha entre Brownie, Kinder Bueno, Óreo, Rafaello, M&Ms e Kit Kat. Um trio irresistível, com peso médio de 400g, perfeito para experimentar seus sabores favoritos',
    price: 75.0,
    image: '/kit-1.jpeg',
  },
  // {
  //   id: 6,
  //   name: 'Morango Delight',
  //   description: 'Ovo de chocolate com cobertura de morango',
  //   price: 60.0,
  //   image: '/ovo-morango.jpg',
  // },
];

const WHATSAPP_NUMBER = '5511980513236';

function ProductCard({
  product,
  index,
  isRevealed,
}: {
  product: Product;
  index: number;
  isRevealed: boolean;
}) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de fazer um pedido do Ovo de Páscoa: ${product.name} - R$ ${product.price.toFixed(2).replace('.', ',')}`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecionando para WhatsApp!', {
      description: `Pedido: ${product.name}`,
      icon: '🐰',
    });
  };

  return (
    <div
      className={`group bg-white rounded-3xl shadow-lg overflow-hidden card-hover transition-all duration-600 ${
        isRevealed
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative img-zoom">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover object-center"
          // className="w-full h-56 object-cover"
        />
        {product.tag && (
          <div className="absolute top-4 left-4 bg-pink text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-chocolate mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-chocolate-light mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-pink">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            size="sm"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full btn-hover"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Pedir
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Menu() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  const handleWhatsAppGeneral = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de ver o cardápio completo de Ovos de Páscoa da Hemana Doces!'
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-24 bg-cream"
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
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-pink rounded-full" />
            <span className="text-sm font-medium text-pink-dark">
              NOSSO CARDÁPIO
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4">
            Ovos de Páscoa
            <span className="text-pink"> Artesanais</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-chocolate-light max-w-2xl mx-auto">
            Cada ovo é uma obra de arte feita com carinho. Escolha o seu favorito!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isRevealed={isRevealed}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-800 delay-700 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-6 text-lg btn-hover"
            onClick={handleWhatsAppGeneral}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
