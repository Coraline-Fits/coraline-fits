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

placeholder=
"Mensagem enviada após pagamento aprovado"

style={{
width:"100%",
height:240,
padding:20
}}

/>

<button

style={{
marginTop:20,
padding:"18px 40px",
background:"#7c5cff",
border:"none",
color:"white",
borderRadius:16
}}

<a
href="/admin/entrega"
>

<a href="/admin/entrega">

<button
style={{
padding:"18px 40px",
background:"#7c5cff",
border:"none",
color:"white",
borderRadius:16
}}
>

Salvar

</button>

</a>
</div>

<div
style={{
marginTop:30,
background:"#111931",
padding:20,
borderRadius:20
}}
>

<h2>
Exemplo
</h2>

<p>

Produto:
vestido-coraline-azul

</p>

<p>

Obrigada pela compra 💙

Seu item:
LINK

</p>

</div>

</div>

)

}
