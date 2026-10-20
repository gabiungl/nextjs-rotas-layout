"use client";

import { useState } from "react";

interface Product {
  id: string;
  category: "burgers" | "sides" | "drinks";
  title: string;
  desc: string;
  price: string;
  tag?: string;
  rating?: string;
  image: string;
}

export default function CardapioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const burgers: Product[] = [
    {
      id: "smash-brasa-duplo",
      category: "burgers",
      tag: "Mais Vendido",
      rating: "★ 4.9",
      title: "Smash Brasa Duplo",
      desc: "Dois smash burgers de 90g Angus com crosta ultra crocante, cheddar inglês derretido, cebola caramelizada artesanal e maionese defumada no brioche amanteigado.",
      price: "R$ 38,90",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "smoked-cheddar-bacon",
      category: "burgers",
      tag: "Defumado na Brasa",
      rating: "★ 4.9",
      title: "Smoked Cheddar Bacon",
      desc: "Burger de 180g Angus assado na brasa, tiras espessas de bacon artesanal crocante, barbecue rústico com redução de café e queijo cheddar cremoso.",
      price: "R$ 44,50",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "grao-trufa-burger",
      category: "burgers",
      tag: "Exclusivo",
      rating: "★ 4.9",
      title: "Grão & Trufa Burger",
      desc: "Hambúrguer 180g Angus com crosta de especiarias e café nobre moído, fatias de queijo gouda derretido, maionese trufada e cogumelos frescos na chapa.",
      price: "R$ 46,90",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const acompanhamentos: Product[] = [
    {
      id: "fritas-rusticas",
      category: "sides",
      title: "Fritas Rústicas com Alecrim",
      desc: "Batatas cortadas à mão com casca dourada e crocante, temperadas com sal de parrilla e folhas frescas de alecrim. Acompanha maionese verde artesanal.",
      price: "R$ 22,00",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "shake-espresso",
      category: "drinks",
      title: "Shake Espresso",
      desc: "Sorvete cremoso artesanal de baunilha batido com duplo shot do nosso espresso Brasa & Grão e generosa calda quente de caramelo salgado.",
      price: "R$ 24,50",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "latte-artesanal",
      category: "drinks",
      title: "Latte Artesanal",
      desc: "Café especial 100% Arábica extraído sob alta pressão com leite vaporizado em microespuma aveludada e um leve toque aromático de canela em pó.",
      price: "R$ 16,00",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "brownie-chapa",
      category: "sides",
      title: "Brownie na Chapa",
      desc: "Brownie quente e úmido de chocolate nobre 70% selado na chapa com nozes pecã, servido com bola de sorvete de nata pura e redução aveludada de café.",
      price: "R$ 26,00",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const showBurgers = selectedCategory === "all" || selectedCategory === "burgers";
  const showSidesAndDrinks =
    selectedCategory === "all" ||
    selectedCategory === "sides" ||
    selectedCategory === "drinks";

  const filteredAcompanhamentos = acompanhamentos.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="container">
      {/* 1. BANNER DO CABEÇALHO DO CARDÁPIO & COMBO DO DIA */}
      <section className="menu-page-header">
        <div className="menu-banner-box">
          <div className="menu-banner-info">
            <span className="autumn-tag">🍂 Edição Especial de Outono</span>
            <h1 className="menu-banner-title">Cardápio Completo</h1>
            <p className="menu-banner-desc">
              Hambúrgueres defumados na brasa, cafés de pequenos produtores e sobremesas feitas no fogo. Selecione sua categoria favorita e monte seu pedido.
            </p>
          </div>

          {/* Destaque: Combo do Dia */}
          <div className="combo-card">
            <div className="combo-header">
              <span className="combo-badge">🔥 Combo do Dia</span>
              <span className="badge badge-success">Economize R$ 15,50</span>
            </div>
            <h3 className="combo-title">Combo Brasa Master</h3>
            <p className="combo-desc">
              Smash Brasa Duplo + Fritas Rústicas Alecrim + Shake Espresso
            </p>
            <div className="combo-pricing">
              <span className="combo-price-old">R$ 85,40</span>
              <span className="combo-price-new">R$ 69,90</span>
            </div>
            <button className="btn btn-primary btn-sm" type="button">
              + Pedir Combo
            </button>
          </div>
        </div>

        {/* 2. FILTROS DE CATEGORIA */}
        <div className="category-filter-wrapper">
          <div className="category-filter-list">
            <button
              type="button"
              className={`filter-pill ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              Todos os Itens (7)
            </button>
            <button
              type="button"
              className={`filter-pill ${selectedCategory === "burgers" ? "active" : ""}`}
              onClick={() => setSelectedCategory("burgers")}
            >
              🍔 Smash Burgers (3)
            </button>
            <button
              type="button"
              className={`filter-pill ${selectedCategory === "sides" ? "active" : ""}`}
              onClick={() => setSelectedCategory("sides")}
            >
              🍟 Porções & Entradas (2)
            </button>
            <button
              type="button"
              className={`filter-pill ${selectedCategory === "drinks" ? "active" : ""}`}
              onClick={() => setSelectedCategory("drinks")}
            >
              ☕ Cafés & Shakes (2)
            </button>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO LINHA SMASH & BRASA */}
      {showBurgers && (
        <section className="menu-section">
          <div className="menu-section-title-wrap">
            <h2 className="menu-section-title">Linha Smash & Brasa</h2>
            <span className="menu-section-count">Blend 100% Angus no fogo alto</span>
          </div>

          <div className="products-grid">
            {burgers.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-image-container">
                  <img src={item.image} alt={item.title} />
                  {item.tag && <span className="product-tag">{item.tag}</span>}
                  {item.rating && <span className="product-rating">{item.rating}</span>}
                </div>
                <div className="product-body">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-desc">{item.desc}</p>
                  <div className="product-footer">
                    <span className="product-price">{item.price}</span>
                    <button className="btn btn-primary btn-sm" type="button">
                      + Adicionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. SEÇÃO ACOMPANHAMENTOS & CAFETERIA (GRID DE 2 COLUNAS / HORIZONTAL) */}
      {showSidesAndDrinks && filteredAcompanhamentos.length > 0 && (
        <section className="menu-section">
          <div className="menu-section-title-wrap">
            <h2 className="menu-section-title">Acompanhamentos & Cafeteria</h2>
            <span className="menu-section-count">Porções crocantes e receitas com grãos nobres</span>
          </div>

          <div className="horizontal-cards-grid">
            {filteredAcompanhamentos.map((item) => (
              <div className="product-card-horizontal" key={item.id}>
                <div className="card-horiz-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-horiz-content">
                  <h3 className="card-horiz-title">{item.title}</h3>
                  <p className="card-horiz-desc">{item.desc}</p>
                  <div className="card-horiz-footer">
                    <span className="product-price">{item.price}</span>
                    <button className="btn btn-secondary btn-sm" type="button">
                      + Adicionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}