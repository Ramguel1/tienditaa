var productos=["coca","galleta","helado","jugo","papas"];
var precios=[18,20,50,13,18];

var selectProductos=document.getElementById("productos");
var imgProductos=document.getElementById("imgProducto");
var precioProductos=document.getElementById("precioProducto");
var inputCantidad=document.getElementById("inputCantidad");
var agregarCarrito=document.getElementById("agregarCarrito");
var carrito=new Array();

var posProducto=-1;
var cantidadProducto=0;



const cargarProductos=()=>{
    let optionProductos="";
    productos.forEach((producto) => {
        optionProductos+=`<option value="${producto}">${producto.toUpperCase()}</option>`;
    
    })
    selectProductos.innerHTML=optionProductos;
    cargarPrecio();
}
selectProductos.onchange=()=>{
    cargarPrecio();
}
const cargarPrecio=()=>{
    imgProductos.src=`${selectProductos.value.toLowerCase()}.png`;
    precioProductos.innerHTML=`$ ${precios[selectProductos.selectedIndex]}`;
    posProducto=selectProductos.selectedIndex;
}

inputCantidad.oninput=()=>{
    document.getElementById("vcantidad").innerHTML=inputCantidad.value;
    cantidadProducto=parseInt(inputCantidad.value);
}
agregarCarrito.onclick=()=>{
    cantidadProducto=parseInt(inputCantidad.value);
    let item= new Array()
    item.push(posProducto);
    item.push(cantidadProducto);
    carrito.push(item);
    imprimirTabla();
}
const imprimirTabla=()=>{
    let total=0;
    let divCarrito=document.getElementById("carrito");
    let tablaHTML= `<table class="table w-100 m-auto">
    <tr>
    <td>PRODUCTO</td>
    <td>PRECIO</td>
    <td>CANTIDAD</td>
    <td>IMPORTE</td>
    </tr>
    `;
    carrito.forEach(item=>{
        tablaHTML+=`
        <tr>
        <td>${productos[item[0]]}</td>
        <td>$ ${precios[item[0]]}.00</td>
        <td>${item[1]}</td>
        <td>${(precios[item[0]]*item[1])}</td>
        </tr>
        `
        total+=(precios[item[0]]*item[1]);
    })
    tablaHTML+= `
    <tr>
    <td></td>
    <td></td>
    <td><h3>TOTAL</h3></td>
    <td><h3>$ ${total}.00</h3></td>
    </tr>`
    divCarrito.innerHTML=tablaHTML;
}