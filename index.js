const products = [
  {
    name: 'DR250 NEGRA / VERDE',
    price: 25.99,
    estrellas: 4,
    reviews: 10,
    seller: 'versus_gamers1',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/8632/box/es-sillas-gaming-gaming-ergonomica-drift-dr250-negra---verde.jpg'
  },
  {
    name: 'DR50 BLACK / BLUE',
    price: 35.5,
    estrellas: 5,
    reviews: 15,
    seller: 'versus_gamers2',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/6946/box/es-sillas-gaming-gaming-pu-drift-dr50-black---blue.jpg'
  },
  {
    name: 'DR111 BLACK / RED',
    price: 15.75,
    estrellas: 2,
    reviews: 8,
    seller: 'versus_gamers3',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/6937/box/es-sillas-gaming-gaming-polipiel-drift-dr111-black---red.jpg'
  },
  {
    name: 'DR111 BLACK / BLUE',
    price: 42.0,
    estrellas: 5,
    reviews: 20,
    seller: 'versus_gamers4',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/6936/box/es-sillas-gaming-gaming-polipiel-drift-dr111-black---blue.jpg'
  },
  {
    name: 'DR35 BLACK / FUCHSIA',
    price: 19.99,
    estrellas: 5,
    reviews: 12,
    seller: 'versus_gamers5',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/14989/box/es-sillas-gaming-gaming-drift-dr35-black---fuchsia.jpgjpg'
  },
  {
    name: 'DR35 BLACK / DARK GRAY',
    price: 28.49,
    estrellas: 4,
    reviews: 18,
    seller: 'versus_gamers1',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/14712/box/es-sillas-gaming-gaming-drift-dr35-black---dark-gray.jpg'
  },
  {
    name: 'DR35 BLACK / RED',
    price: 10.0,
    estrellas: 4,
    reviews: 5,
    seller: 'versus_gamers2',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/14713/box/es-sillas-gaming-gaming-drift-dr35-black---red.jpg'
  },
  {
    name: 'BARBIE X DRIFT',
    price: 50.25,
    estrellas: 3,
    reviews: 25,
    seller: 'versus_gamers3',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/14678/box/es-sillas-gaming-gaming-silla-oficial-de-barbier-drift-barbie-x-drift.jpg'
  },
  {
    name: 'DR90 PRO GRAY / BLUE',
    price: 33.99,
    estrellas: 4,
    reviews: 14,
    seller: 'versus_gamers4',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/14414/box/es-sillas-gaming-gaming-drift-dr90-pro-gray---blue.jpg'
  },
  {
    name: 'DR175 GREEN / BLACK',
    price: 22.49,
    estrellas: 5,
    reviews: 9,
    seller: 'versus_gamers5',
    image:
      'https://www.vsgamers.es/thumbnails/images/products/11646/box/es-sillas-gaming-gaming-comodidad-extrema-drift-dr175-green---black.jpg'
  }
]

const pintarProductos = (sillas) => {
  const divProducts = document.querySelector('#SillasGamer')
  divProducts.innerHTML = ''
  for (const silla of sillas) {
    const divSilla = document.createElement('div')
    const divImg = document.createElement('div')
    const nombre = document.createElement('h3')
    const precio = document.createElement('p')
    const divEstrellas = document.createElement('div')
    const divReviews = document.createElement('div')
    const divSeller = document.createElement('div')
    const img = document.createElement('img')

    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (i <= silla.estrellas) {
        estrella.classList.add('rellena')
      }
      divEstrellas.appendChild(estrella)
    }

    divSilla.className = 'flex-container'
    divImg.classList.add('imgContainer')
    divEstrellas.classList.add('estrellas', 'flex-container')
    img.src = silla.image
    nombre.textContent = silla.name
    precio.textContent = `${silla.price} €`

    divSilla.appendChild(divImg)
    divImg.appendChild(img)
    divSilla.appendChild(nombre)
    divSilla.appendChild(precio)
    divSilla.appendChild(divEstrellas)
    divProducts.appendChild(divSilla)
  }
}

pintarProductos(products)

document.addEventListener('DOMContentLoaded', function () {
  const filtroVendedor = document.querySelector('#filtroVendedor')
  const inputPrecio = document.querySelector('#inputPrecio')
  const btnBuscar = document.querySelector('#btnBuscar')
  const btnLimpiarFiltros = document.querySelector('#btnLimpiarFiltros')

  // Obtener vendedores únicos
  const vendedoresUnicos = [
    ...new Set(products.map((producto) => producto.seller))
  ]

  // Crear opciones para el filtro de vendedores
  vendedoresUnicos.forEach((vendedor) => {
    const option = document.createElement('option')
    option.value = vendedor
    option.textContent = vendedor
    filtroVendedor.appendChild(option)
  })

  // Función para aplicar los filtros
  function aplicarFiltros() {
    const vendedorSeleccionado = filtroVendedor.value
    const precioMaximo = parseFloat(inputPrecio.value)

    const productosFiltrados = products.filter((products) => {
      // Filtrar por vendedor
      const filtroVendedor =
        vendedorSeleccionado === 'todos' ||
        products.seller === vendedorSeleccionado
      // Filtrar por precio
      const filtroPrecio = isNaN(precioMaximo) || products.price < precioMaximo
      return filtroVendedor && filtroPrecio
    })

    pintarProductos(productosFiltrados)
  }

  // Event listeners para los filtros
  filtroVendedor.addEventListener('change', aplicarFiltros)
  btnBuscar.addEventListener('click', aplicarFiltros)
  btnLimpiarFiltros.addEventListener('click', function () {
    filtroVendedor.value = 'todos'
    inputPrecio.value = ''
    pintarProductos(products)
  })
})
