export default function Entrega(){

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
Entrega Automática
</h1>

<div
style={{
background:"#111931",
padding:30,
borderRadius:30,
marginTop:30
}}
>

<input

placeholder="Slug"

style={{
width:"100%",
padding:18,
marginBottom:20
}}

/>

<select

style={{
width:"100%",
padding:18,
marginBottom:20
}}
>

<option>
Texto
</option>

<option>
Link
</option>

<option>
Código
</option>

<option>
Arquivo
</option>

</select>

<textarea

placeholder=
"Conteúdo entregue"

style={{
width:"100%",
height:220
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

>

Salvar

</button>

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
Fluxo
</h2>

<p>
Compra
</p>

<p>
↓
</p>

<p>
Pagamento aprovado
</p>

<p>
↓
</p>

<p>
Mensagem do produto
</p>

<p>
↓
</p>

<p>
Entrega automática
</p>

</div>

</div>

)

}
