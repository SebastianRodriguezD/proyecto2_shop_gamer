const mainElement = document.querySelector('main')

const Header = document.createElement('header')

const imgHeader = document.createElement('img')
imgHeader.className = 'img_header'
imgHeader.src =
  'https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_513,h_513/https://blog.vsgamers.es/wp-content/uploads/2018/06/blog_versus_logo-1.jpg'
imgHeader.alt = 'logo_vs_gamer'

const label = document.createElement('label')
const inputSearch = document.createElement('input')
inputSearch.className = 'recuadro'
inputSearch.type = 'search'
inputSearch.name = 'busquedamusica'
inputSearch.placeholder = ' Buscar tu silla Gamer'
const inputSubmit = document.createElement('input')
inputSubmit.className = 'buscar'
inputSubmit.type = 'submit'
inputSubmit.value = 'Buscar'
label.appendChild(inputSearch)
label.appendChild(inputSubmit)

const navList = document.createElement('nav')
navList.className = 'nav-list'
const ul = document.createElement('ul')
const li1 = document.createElement('li')
const a1 = document.createElement('a')
a1.href = '#'
a1.textContent = 'Accesorios'
const li2 = document.createElement('li')
const a2 = document.createElement('a')
a2.href = '#'
a2.textContent = 'Componentes'
const li3 = document.createElement('li')
const a3 = document.createElement('a')
a3.href = '#'
a3.textContent = 'Ofertas'
li1.appendChild(a1)
li2.appendChild(a2)
li3.appendChild(a3)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
navList.appendChild(ul)

Header.appendChild(imgHeader)
Header.appendChild(label)
Header.appendChild(navList)

document.body.insertBefore(Header, mainElement)

const products = [
  {
    name: 'DR250 BLACK / GREEN',
    price: 25.99,
    estrellas: 4,
    reviews: 10,
    seller: 'Verde',
    image: 'https://media.game.es/COVERV2/3D_L/155/155910.png'
  },
  {
    name: 'DR50 BLACK / BLUE',
    price: 35.5,
    estrellas: 5,
    reviews: 15,
    seller: 'Azul',
    image: 'https://d7rh5s3nxmpy4.cloudfront.net/CMP2741/550NB_%28002%29.png'
  },
  {
    name: 'DR111 BLACK / RED',
    price: 15.75,
    estrellas: 2,
    reviews: 8,
    seller: 'Rojo',
    image:
      'https://img.phoenixtechnologies.es/img/869c8/163f5/R--YH9P6O2R0T0H0P-0.jpg'
  },
  {
    name: 'DR111 BLACK / BLUE',
    price: 42.0,
    estrellas: 5,
    reviews: 20,
    seller: 'Azul',
    image:
      'https://valkgaming.com/773-thickbox_default/valk-nyx-silla-gaming-de-tela.jpg'
  },
  {
    name: 'DR35 BLACK / FUCHSIA',
    price: 19.99,
    estrellas: 5,
    reviews: 12,
    seller: 'Rosa',
    image:
      'https://isamuebles.com/wp-content/uploads/2021/03/488755_a1a535ce323545f9879fafde0946d91e_mv2.png'
  },
  {
    name: 'DR35 BLACK / DARK GRAY',
    price: 28.49,
    estrellas: 4,
    reviews: 18,
    seller: 'Negro',
    image:
      'https://levelupworld.com/assets/img/dt/gaming-station/batman-gotham/1.png'
  },
  {
    name: 'DR35 BLACK / RED',
    price: 10.0,
    estrellas: 4,
    reviews: 5,
    seller: 'Rojo',
    image:
      'https://dataimport.com/wp-content/uploads/2023/06/My-project-1-2023-06-30T094316.441-600x600.png'
  },
  {
    name: 'BARBIE X DRIFT',
    price: 50.25,
    estrellas: 3,
    reviews: 25,
    seller: 'Rosa',
    image:
      'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw468a2909/images/imagenes-productos/800/MK46/MK46318UUG-0650-001.png?sw=320&sh=409&sm=fit'
  },
  {
    name: 'DR90 PRO GRAY / BLUE',
    price: 33.99,
    estrellas: 4,
    reviews: 14,
    seller: 'Negro',
    image:
      'https://www.mc-haus.com/pub/media/catalog/product/cache/644784fd037457212788f5001d16b3b1/g/a/gameplay_x-black_00.png'
  },
  {
    name: 'DR175 GREEN / BLACK',
    price: 22.49,
    estrellas: 5,
    reviews: 9,
    seller: 'Verde',
    image:
      'https://mantisgaming.cl/wp-content/uploads/2020/11/SNAKE-FRENTE_NEGRA-VERDE-853x1024.png'
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

function filtrarPorVendedor() {
  const filtroVendedor = document.getElementById('filtroVendedor').value
  const productosFiltrados = products.filter((producto) => {
    return filtroVendedor === '' || producto.seller === filtroVendedor
  })
  pintarProductos(productosFiltrados)
}

function filtrarPorPrecio() {
  const precioMaximo = parseFloat(document.getElementById('inputPrecio').value)
  const productosFiltrados = products.filter((producto) => {
    return producto.price <= precioMaximo
  })
  pintarProductos(productosFiltrados)
}

function limpiarFiltros() {
  document.getElementById('inputPrecio').value = ''
  document.getElementById('filtroVendedor').selectedIndex = 0
  pintarProductos(products)
}

const Footer = document.createElement('footer')

const ulSR = document.createElement('p')
ulSR.className = 'p-Footer'
ulSR.textContent = 'By Sebastian Rodriguez'

Footer.appendChild(ulSR)

document.body.insertBefore(Footer, mainElement.nextSibling)
