export default function Config(){

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
Configurações Coraline Fits
</h1>

<div
style={{
display:"grid",
gap:20,
marginTop:30
}}
>

<input
placeholder="Nome da Loja"
/>

<input
placeholder="Slug"
/>

<input
placeholder="Logo URL"
/>

<input
placeholder="Cor Principal"
/>

<input
placeholder="PIX"
/>

<input
placeholder="Gateway Cartão"
/>

<input
placeholder="Carteira Digital"
/>

<button
style={{
padding:20,
background:"#7c5cff",
color:"white",
border:"none",
borderRadius:16
}}
>

Salvar

</button>

</div>

<div
style={{
marginTop:40,
background:"#111931",
padding:24,
borderRadius:24
}}
>

<h2>
Autonomia
</h2>

<p>
✓ editar aparência
</p>

<p>
✓ editar checkout
</p>

<p>
✓ editar produtos
</p>

<p>
✓ editar mensagens
</p>

<p>
✓ editar pagamentos
</p>

<p>
✓ editar slugs
</p>

</div>

</div>

)

}
