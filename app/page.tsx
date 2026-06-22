export default function Home() {
  const produtos = [
    {
      nome: "Coraline Blue Dress",
      preco: "R$ 39,90",
      imagem: "https://placehold.co/400x500",
    },
    {
      nome: "Other World Jacket",
      preco: "R$ 29,90",
      imagem: "https://placehold.co/400x500",
    },
    {
      nome: "Moon Button Outfit",
      preco: "R$ 44,90",
      imagem: "https://placehold.co/400x500",
    },
  ]

  return (
    <main
      style={{
        background:
          "linear-gradient(180deg,#050816,#091328,#0f1835)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <header
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>🧵 Coraline Fits</h1>

        <div>
          Buscar • Carrinho 🛒
        </div>
      </header>

      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            fontSize: 60,
            marginBottom: 10,
          }}
        >
          Vista seu IMVU
        </h2>

        <p>
          Coleções inspiradas no outro mundo
        </p>

        <button
          style={{
            marginTop: 30,
            padding: 16,
            borderRadius: 999,
            border: "none",
            fontSize: 18,
          }}
        >
          Comprar Agora
        </button>
      </section>

      <section
        style={{
          padding: 30,
          display: "grid",
          gap: 24,
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
        }}
      >
        {produtos.map((p) => (
          <div
            key={p.nome}
            style={{
              background: "#12192c",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <img
              src={p.imagem}
              style={{
                width: "100%",
              }}
            />

            <div
              style={{
                padding: 20,
              }}
            >
              <h3>{p.nome}</h3>

              <p>{p.preco}</p>

              <button>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
