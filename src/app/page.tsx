import Link from "next/link";

export default function HomePage() {
  const maisPedidos = [
    {
      id: "smash-brasa-duplo",
      tag: "Mais Vendido",
      rating: "★ 4.9",
      title: "Smash Brasa Duplo",
      desc: "Dois smash burgers de 90g Angus com crosta crocante, queijo cheddar inglês derretido, cebola caramelizada e maionese defumada no pão brioche amanteigado.",
      price: "R$ 38,90",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "smoked-cheddar-bacon",
      tag: "Defumado na Brasa",
      rating: "★ 4.9",
      title: "Smoked Cheddar Bacon",
      desc: "Hambúrguer de 180g Angus grelhado no fogo alto, generosas fatias de bacon artesanal crocante, barbecue rústico artesanal de café e creme de cheddar.",
      price: "R$ 44,50",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "grao-trufa-burger",
      tag: "Exclusivo",
      rating: "★ 4.9",
      title: "Grão & Trufa Burger",
      desc: "Burger Angus 180g selado na brasa com crosta de especiarias e café moído na hora, queijo gouda cremoso, maionese trufada e mix de cogumelos salteados.",
      price: "R$ 46,90",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-tag">🔥 Hamburgueria & Cafeteria Artesanal</div>
            <h1 className="hero-title">
              Sabor defumado na brasa, <span>crosta perfeita</span> a cada mordida.
            </h1>
            <p className="hero-description">
              Carnes nobres com blend 100% Angus preparadas no fogo alto, queijos selecionados e cafés de torrefação própria. A experiência definitiva para os amantes do sabor rústico e autêntico.
            </p>
            <div className="hero-actions">
              <Link href="/cardapio" className="btn btn-primary">
                Explorar Cardápio →
              </Link>
              <a href="#mais-pedidos" className="btn btn-secondary">
                Ver Mais Pedidos
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
                alt="Smash Burger Artesanal Brasa & Grão"
              />
            </div>

            {/* Card Flutuante de Preço */}
            <div className="floating-price-card">
              <span className="floating-badge">★ O Favorito da Casa</span>
              <span className="floating-name">Smash Brasa Duplo</span>
              <span className="floating-price">R$ 38,90</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAIXA DE DIFERENCIAIS */}
      <section className="features-section" id="diferenciais">
        <div className="container">
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon-wrapper">🥩</div>
              <h3 className="feature-title">Blend 100% Angus</h3>
              <p className="feature-description">
                Cortes nobres moídos e moldados diariamente, grelhados no calor intenso da brasa para selar o suco e criar a clássica crosta crocante.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">☕</div>
              <h3 className="feature-title">Torrefação Própria</h3>
              <p className="feature-description">
                Grãos especiais de pequenos produtores torrados artesanalmente em pequenos lotes, com notas sensoriais de chocolate, caramelo e nozes.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">🚀</div>
              <h3 className="feature-title">Entrega Quente em 30 min</h3>
              <p className="feature-description">
                Embalagens inteligentes e ecológicas que retêm o calor e a crocância das fritas e do pão sem abafar, direto na sua porta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO OS MAIS PEDIDOS DA SEMANA */}
      <section className="popular-section" id="mais-pedidos">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Destaques da Cozinha</span>
            <h2 className="section-title">Os Mais Pedidos da Semana</h2>
            <p className="section-subtitle">
              Hambúrgueres artesanais montados com ingredientes frescos e nosso tempero autoral defumado.
            </p>
          </div>

          <div className="products-grid">
            {maisPedidos.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-image-container">
                  <img src={item.image} alt={item.title} />
                  <span className="product-tag">{item.tag}</span>
                  <span className="product-rating">{item.rating}</span>
                </div>
                <div className="product-body">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-desc">{item.desc}</p>
                  <div className="product-footer">
                    <span className="product-price">{item.price}</span>
                    <button className="btn btn-primary btn-sm" type="button">
                      + Pedir Agora
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}