export default function Carrinho(){

const itens=[

{
nome:
"Vestido Coraline Azul",

preco:
39.90
},

{
nome:
"Conjunto Dark Doll",

preco:
49.90
}

]

const total=
itens.reduce(
(a,b)=>
a+b.preco,
0
)

return(

<div
style={{
background:"#050816",
minHeight:"100vh",
padding:60,
color:"white"
}}
>

<h1>
Seu Carrinho
</h1>

<div
style={{
display:"grid",
gap:20,
marginTop:30
}}
>

{

itens.map(
(item)=>

<div
key={item.nome}

style={{
background:"#111931",
padding:24,
borderRadius:20
}}
>

<h2>
{item.nome}
</h2>

<p>
R$ {item.preco}
</p>

</div>

)

}

</div>

<div
style={{
marginTop:50
}}
>

<h2>

Total

</h2>

<h1>

R$ {total}

</h1>

<button

style={{
padding:20,
width:400,
maxWidth:"100%",
background:"#7c5cff",
border:"none",
borderRadius:20,
color:"white"
}}

>

Finalizar Compra

</button>

</div>

</div>

)

}
