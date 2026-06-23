export default function Mensagens(){

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
Mensagens Pós Compra
</h1>

<div
style={{
marginTop:40,
background:"#111931",
padding:30,
borderRadius:30
}}
>

<input
placeholder="Slug do Produto"
style={{
width:"100%",
padding:18,
marginBottom:20
}}
/>

<input
placeholder="Título"
style={{
width:"100%",
padding:18,
marginBottom:20
}}
/>

<textarea
placeholder="Mensagem"
style={{
width:"100%",
height:220
}}
/>

<a href="/admin/entrega">

<button
style={{
marginTop:20,
padding:"18px 40px",
background:"#7c5cff",
color:"white",
border:"none",
borderRadius:16
}}
>

Salvar

</button>

</a>

</div>

</div>

)

}
