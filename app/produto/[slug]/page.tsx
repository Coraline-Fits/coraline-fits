import { products } from "@/app/data/products"

export default function Produto({
params,
}:{
params:{
slug:string
}
}){

const produto =
products.find(
(p)=>
p.slug===params.slug
)

if(!produto){

return(

<div
style={{
padding:60,
background:"#050816",
minHeight:"100vh",
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
background:"#050816",
minHeight:"100vh",
color:"white",
padding:60
}}
>

<div
style={{
display:"grid",
gridTemplateColumns:
"1fr 1fr",
gap:40
}}
>

<img
src={produto.imagem}
style={{
width:"100%",
borderRadius:30
}}
/>

<div>

<h1>
{produto.nome}
</h1>

<h2>
R$ {produto.preco}
</h2>

<p>
Categoria:
{" "}
{produto.categoria}
</p>

<button
style={{
padding:18,
background:"#8b5cff",
color:"white",
border:"none",
borderRadius:18
}}
>
Comprar Agora
</button>

</div>

</div>

</div>

)

}
