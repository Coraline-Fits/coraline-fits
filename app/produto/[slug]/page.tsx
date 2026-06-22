import { products } from "../../data/products"

export default async function Produto({
params,
}:{
params:Promise<{
slug:string
}>
}){

const { slug } =
await params

const produto =
products.find(
(p)=>
p.slug===slug
)

if(!produto){

return(

<div
style={{
padding:80,
color:"white"
}}
>

Produto não encontrado

</div>

)

}

return(

<div
style={{
background:
"#050816",
minHeight:
"100vh",

color:
"white",

padding:
50
}}
>

<div
style={{
display:"grid",

gridTemplateColumns:
"1fr 1fr",

gap:
40
}}
>

<img
src={
produto.imagem
}

style={{
width:
"100%",

borderRadius:
30
}}
/>

<div>

<h1>
{
produto.nome
}
</h1>

<h2>

R$

{
produto.preco
}

</h2>

<p>

Categoria:

{
produto.categoria
}

</p>

<button
style={{
padding:
20,

background:
"#8b5cff",

color:
"white",

border:
"none",

borderRadius:
16
}}
>

Adicionar ao carrinho

</button>

</div>

</div>

</div>

)

}
