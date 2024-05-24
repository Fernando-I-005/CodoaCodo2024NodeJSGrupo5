
var headerJs= `<h5>ENVÍOS GRATIS A PARTIR DE $ 10.000</h5> `
document.getElementById("headerID").innerHTML=headerJs;


var navJs= ` <div id="contenedorIcono">
<a class="animate__animated animate__bounceInDown iconoMondo" href="index.html"><img id="iconoVaso" src="./recursos/iconoVasoCafe-light.png" 
    alt="Icono de Café Mondo: Vaso de café"></a> <!-- se agrega para poder linkear animate.css ++++++++++++++++ -->
</div>

<div id="contenedorHamburguesa">
<input type="checkbox" id="menuHamburguesa-check" />
<label id="menuHamburguesa" for="menuHamburguesa-check">
  <span id="menuHamburguesa-abrir">&#9776</span>
  <span id="menuHamburguesa-cerrar">x</span>
</label>

<div class="menu-iconos">
  <div class="grupo1IconosNav">
    <a class="botonMenu" href="./menu.html">Menú</a>
    <a class="botonMenu" href="./promociones.html">Promociones</a>
  </div>

  <div class="grupo2IconosNav">
    <a class="botonMenu" href="./conocenos.html">Conócenos</a>
    <a class="botonMenu" href="./locales.html">Locales</a>
  </div>
</div>
` //comilla invertida ALT+96! - Otras comillas no aceptan el texto multilineas copiado

document.getElementById("navID").innerHTML=navJs;



var footerJs= `
<div class="grupoIconosFooter">
        <a class="iconoFooter" href="https://www.instagram.com/" title="Seguinos" target="_blank"> <i
            class="fa-brands fa-square-instagram"> </i></a>
        <a class="iconoFooter" href="https://web.whatsapp.com/" title="Comunicate" target="_blank"> <i
            class="fa-brands fa-whatsapp"> </i></a>
        <a class="iconoFooter" href="https://www.pedidosya.com/" title="Pedidos Ya" alt="Encontranos en Pedidos Ya"><img
            src="./recursos/pedidosya-icono.png" alt="Ícono de Pedidos Ya"></a>
        <a class="iconoFooter" href="./contacto.html" title="Contacto" target=""> <i class="fa-solid fa-envelope"></i></a> 
            
      </div>
      <div>
        <p> Copyright 2024 &copy; Grupo 5 Node.js 24136. Todos los derechos reservados.
        <p>
      </div>
`
document.getElementById("footerID").innerHTML=footerJs;
