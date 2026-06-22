export default function Carrinho(){

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
🛒 Carrinho
</h1>

<div
style={{
marginTop:30,
display:"grid",
gap:20
}}
>

<div
style={{
background:"#111931",
padding:24,
borderRadius:24
}}
>

<h2>
Vestido Coraline Azul
</h2>

<p>
R$ 39,90
</p>

</div>

<div
style={{
background:"#111931",
padding:24,
borderRadius:24
}}
>

<h2>
Conjunto Dark Doll
</h2>

<p>
R$ 49,90
</p>

</div>

</div>

<div
style={{
marginTop:40
}}
>

<h2>
Total
</h2>

<h1>
R$ 89,80
</h1>

<button
style={{
padding:20,
background:"#7c5cff",
color:"white",
border:"none",
borderRadius:18
}}
<a
href="/checkout"
style={{
textDecoration:"none"
}}
>

<button
style={{
padding:20,
background:"#7c5cff",
color:"white",
border:"none",
borderRadius:18
}}
>

Finalizar Compra

</button>

</a>
