let inventario = [];

function agregarProducto() {
    document.getElementById('agregarProductoModal').style.display = 'block';
}

function guardarProducto() {
    const nombre = document.getElementById('nombre').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);

    if (nombre && !isNaN(cantidad) && cantidad > 0 && !isNaN(precio) && precio > 0) {
        const producto = { nombre, cantidad, precio };
        inventario.push(producto);
        alert('Producto agregado al inventario');
        limpiarCampos();
    } else {
        alert('Por favor, ingrese datos válidos.');
    }
}

function verInventario() {
    const inventarioLista = document.getElementById('inventarioLista');
    inventarioLista.innerHTML = '';

    for (let i = 0; i < inventario.length; i++) {
        const producto = inventario[i];
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre}: ${producto.cantidad} -> ${producto.precio}`;

        const editarButton = document.createElement('button');
        editarButton.textContent = 'Editar';
        editarButton.onclick = function() { editarProducto(i); };

        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.onclick = function() { eliminarProducto(i); };

        const despacharButton = document.createElement('button');
        despacharButton.textContent = 'Despachar';
        despacharButton.onclick = function() { despachar(i); };

        listItem.appendChild(editarButton);
        listItem.appendChild(eliminarButton);
        listItem.appendChild(despacharButton);

        inventarioLista.appendChild(listItem);
    }

    document.getElementById('verInventarioModal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('agregarProductoModal').style.display = 'none';
    document.getElementById('verInventarioModal').style.display = 'none';
    document.getElementById('BuscarModal').style.display = 'none';
}

function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
    cerrarModal();
}

function limpiarBusqueda() {
    document.getElementById('nombreBuscar').value='';
}

function editarProducto(index) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre:');
    const nuevaCantidad = parseInt(prompt('Ingrese la nueva cantidad:'), 10);
    const nuevoPrecio = parseFloat(prompt('Ingrese el nuevo precio:'));

    if (nuevoNombre && !isNaN(nuevaCantidad) && nuevaCantidad > 0 && !isNaN(nuevoPrecio) && nuevoPrecio > 0) {
        inventario[index].nombre = nuevoNombre;
        inventario[index].cantidad = nuevaCantidad;
        inventario[index].precio = nuevoPrecio;
        alert('Producto editado exitosamente');
        verInventario();
    } else {
        alert('Por favor, ingrese datos válidos.');
    }
}

function eliminarProducto(index) {
    const confirmacion = confirm('¿Está seguro que desea eliminar este producto?');

    if (confirmacion) {
        inventario.splice(index, 1);
        alert('Producto eliminado exitosamente');
        verInventario();
    }
}

function despachar(index){
    if (index >= 0 && index < inventario.length) {
        const cantidadEliminar = parseInt(prompt("Ingrese la cantidad a eliminar:"));

        if (cantidadEliminar > 0 && cantidadEliminar <= inventario[index].cantidad) {
            inventario[index].cantidad -= cantidadEliminar;
            inventario[index].despachado += cantidadEliminar;
            alert("Cantidad eliminada con éxito");
            verInventario();
        } else {
            alert("Cantidad a eliminar inválida");
        }
    } else {
        alert("Producto no encontrado");
    }
}
/*
function ventas(){
    let ventaT=0;
    const ventasLista = document.getElementById('ventasLista');
    ventasLista.innerHTML = '';

    for (let i = 0; i < inventario.length; i++) {
        const ventaProdu = inventario[i].despachado*inventario[i].precio;
        ventaT+=ventaProdu;
    }
    if(ventaT>0){
        alert(`\nLa venta generada es de: $${ventaT.toFixed(2)}`);
    }
    document.getElementById('ventasModal').style.display = 'block';
}
*/
function buscarProductoPorNombre() {
    let nombreBusqueda = document.getElementById('nombreBuscar').value;
    let resultados = document.getElementById('resultadoBusqueda');
    resultados.innerHTML = '';

    for(let i=0; i<inventario.length; i++){
        if(inventario[i].nombre.toLowerCase().includes(nombreBusqueda.toLowerCase())){
            //resultados.innerHTML=`<p>${inventario[i].nombre} - precio: ${inventario[i].precio}</p>`
            alert(`${inventario[i].nombre} - cantidad: ${inventario[i].cantidad} - precio: ${inventario[i].precio}`);
            limpiarBusqueda();
        }
    }
}

function buscarProducto(){
   document.getElementById('BuscarModal').style.display = 'block';

}
/*
function buscarProducto1() {
    const nombreBusqueda = prompt('Ingrese el nombre del producto a buscar:');
    if (nombreBusqueda) {
        const resultados = buscarProductoPorNombre(nombreBusqueda);
        mostrarResultadosBusqueda(resultados);

        if (resultados.length > 0) {
            alert('Productos encontrados. Ver los resultados en la lista de búsqueda.');
        } else {
            alert('No se encontraron productos con el nombre especificado.');
        }
    } else {
        alert('Nombre de búsqueda inválido.');
    }
}

function mostrarResultadosBusqueda(resultados) {
    const resultadoBusquedaLista = document.getElementById('resultadoBusqueda');
    resultadoBusquedaLista.innerHTML = '';

    for (const producto of resultados) {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre}: ${producto.cantidad}`;
        resultadoBusquedaLista.appendChild(listItem);
    }
}
*/
