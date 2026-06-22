export default function Checkout(){

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
Finalizar Compra
</h1>

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 420px",
gap:40
}}
>

<div>

<input
placeholder="Nome"

style={{
width:"100%",
padding:18,
marginBottom:20
}}
/>

<input
placeholder="Email"

style={{
width:"100%",
padding:18,
marginBottom:20
}}
/>

<h2>
Pagamento
</h2>

<div
style={{
display:"grid",
gap:16
}}
>

<button
style={{
padding:20,
borderRadius:16
}}
>
PIX
</button>

<button
style={{
padding:20,
borderRadius:16
}}
>
Cartão de Crédito
</button>

</div>

</div>

<div
style={{
background:"#111931",
padding:30,
borderRadius:24
}}
>

<h2>
Resumo
</h2>

<p>
Vestido Coraline Azul
</p>

<p>
R$ 39,90
</p>

<hr/>

<h1>
Total
</h1>

<h2>
R$ 39,90
</h2>

<button
style={{
width:"100%",
padding:20,
background:"#7c5cff",
color:"white",
border:"none",
borderRadius:18
}}
>

Pagar

</button>

</div>

</div>

</div>

)

}
