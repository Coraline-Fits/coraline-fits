export default function Home() {
  const categorias = [
    "FEMININOS",
    "CONJUNTOS",
    "MASCULINOS",
    "KIDS",
    "EVENTOS",
    "EXCLUSIVOS",
  ]

  const produtos = [
    {
      nome: "Vestido Coraline Azul",
      preco: "R$ 39,90",
      imagem: "https://placehold.co/600x700",
      promo: "-10%"
    },
    {
      nome: "Conjunto Dark Doll",
      preco: "R$ 49,90",
      imagem: "https://placehold.co/600x700",
      promo: "-12%"
    },
    {
      nome: "Casaco Botões",
      preco: "R$ 59,90",
      imagem: "https://placehold.co/600x700",
      promo: "-15%"
    },
    {
      nome: "Acessório Cat Button",
      preco: "R$ 19,90",
      imagem: "https://placehold.co/600x700",
      promo: ""
    },
    {
      nome: "Bota Doll Preta",
      preco: "R$ 29,90",
      imagem: "https://placehold.co/600x700",
      promo: ""
    },
    {
      nome: "Vestido Outro Mundo",
      preco: "R$ 42,90",
      imagem: "https://placehold.co/600x700",
      promo: "Novo"
    }
  ]

  return (
    <main
      style={{
        background:
          "linear-gradient(#050816,#0a1030)",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >

<header
style={{
display:"flex",
padding:20,
gap:20,
alignItems:"center",
justifyContent:"space-between",
borderBottom:"1px solid #222"
}}
>

<h1
style={{
fontSize:40
}}
>
🧵 CORALINE FITS
</h1>

<input
placeholder="Buscar produtos..."
style={{
width:"40%",
padding:16,
borderRadius:999,
background:"#111",
border:"1px solid #333",
color:"white"
}}
/>

<div>
♡ Carrinho 🛒
</div>

</header>

<nav
style={{
display:"flex",
gap:30,
padding:20,
overflow:"auto"
}}
>

{categorias.map((c)=>

<div key={c}>
{c}
</div>

)}

</nav>

<section
style={{
display:"grid",
gridTemplateColumns:"1.3fr 1fr",
padding:40,
alignItems:"center"
}}
>

<div>

<h2
style={{
fontSize:80,
margin:0
}}
>
BEM-VINDA AO
OUTRO MUNDO
</h2>

<p
style={{
fontSize:24,
opacity:.8
}}
>
Moda IMVU inspirada em Coraline
</p>

<button
style={{
padding:"18px 50px",
borderRadius:999,
background:"#8b5cff",
color:"white",
border:"none",
fontSize:20
}}
>
COMPRE AGORA
</button>

</div>

<div>

<img
src="https://placehold.co/700x700"
style={{
width:"100%",
borderRadius:30
}}
/>

</div>

</section>

<section
style={{
padding:20
}}
>

<h2>
MAIS VENDIDOS
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(260px,1fr))",
gap:20
}}
>

{produtos.map((p)=>

<div
key={p.nome}
style={{
background:"#0c122b",
borderRadius:20,
overflow:"hidden"
}}
>

<div
style={{
padding:10
}}
>

<span
style={{
background:"#8b5cff",
padding:"6px 12px",
borderRadius:10
}}
>
{p.promo}
</span>

</div>

<img
src={p.imagem}
style={{
width:"100%"
}}
/>

<div
style={{
padding:20
}}
>

<h3>
{p.nome}
</h3>

<h2>
{p.preco}
</h2>

<button
style={{
width:"100%",
padding:16,
background:"#8b5cff",
border:"none",
borderRadius:12,
color:"white"
}}
>
🛒 Adicionar
</button>

</div>

</div>

)}

</div>

</section>

<section
style={{
display:"grid",
gridTemplateColumns:"280px 1fr",
padding:20,
gap:20
}}
>

<div
style={{
background:"#0c122b",
padding:20,
borderRadius:20
}}
>

<h2>
Painel Admin
</h2>

<p>Dashboard</p>
<p>Produtos</p>
<p>Pedidos</p>
<p>Mensagens Pós-Compra</p>
<p>Configurações</p>

</div>

<div
style={{
background:"#0c122b",
padding:20,
borderRadius:20
}}
>

<h2>
Editar mensagem pós-compra
</h2>

<input
placeholder="Slug"
style={{
width:"100%",
padding:12,
marginBottom:12
}}
/>

<textarea
placeholder="Mensagem personalizada"
style={{
width:"100%",
height:200
}}
/>

<button
style={{
marginTop:20,
padding:16,
background:"#8b5cff",
border:"none",
color:"white"
}}
>
Salvar
</button>

</div>

</section>

</main>
  )
}
