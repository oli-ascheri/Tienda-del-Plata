// Celulares
import XiaomiPocophone from '../../img/xiaomi-pocophone.jpg'
import SamsungGalaxy from '../../img/samsung-galaxy.jpg'
import AppleiPhone13 from '../../img/apple-iphone-13.jpg'
import HuaweiNova from '../../img/huawei-nova.jpg'

// Computacion
import NotebookLenovo from '../../img/notebook-lenovo.jpg'
import NotebookAsusZenBook from '../../img/notebook-asus-zenbook.jpg'
import NotebookHuawei from '../../img/notebook-huawei.jpg'
import MouseLogitech from '../../img/mouse-logitech.jpg'

// Camaras 
import NikonCoolpix from '../../img/nikon-coolpix.jpg'
import SonyKit from '../../img/sony-kit.jpg'
import GoProHero9 from '../../img/gopro-hero9.jpg'
import KitFiltro from '../../img/kit-lente.jpg'

// VideoJuegos
import PlayStation from '../../img/playstation.jpg'
import NintendoSwitch from '../../img/nintendo-switch.jpg'
import XboxOne from '../../img/xbox-one.jpg'
import AuricularesgamerOnikuma from '../../img/auriculares-gamer-onikuma.jpg'

// Articulos y stock
const data = [

    // Celulares
    {
        id: '1',
        name: 'Xiaomi Pocophone',
        price: 529,
        image: XiaomiPocophone,
        comentary: 'Xiaomi Pocophone Poco X4 Pro 5G Dual SIM 256 GB laser black 8 GB RAM.',
        category: 'celulares',
        discount: 24,
        stock: 8
    },
    {
        id: '2',
        name: 'Samsung Galaxy',
        price: 435,
        image: SamsungGalaxy,
        comentary: 'Samsung Galaxy A52 Dual SIM 128 GB awesome black 6 GB RAM.',
        category: 'celulares',
        discount: 8,
        stock: 11
    },
    { 
        id: '3',
        name: 'Apple iPhone 13',
        price: 2229,
        image: AppleiPhone13,
        comentary: 'Iphone 13 iOS 15 chip A15 Bionic.',
        category: 'celulares',
        discount: 0,
        stock: 5
    },
    { 
        id: '4',
        name: 'Huawei Nova 9',
        price: 799,
        image: HuaweiNova,
        comentary: 'Huawei Nova 9 (Global) Dual SIM 128 GB black 8 GB RAM.',
        category: 'celulares',
        discount: 13,
        stock: 36
    },
    
    // Computacion
    {
        id: '5',
        name: 'Notebook Lenovo',
        price: 375,
        image: NotebookLenovo,
        comentary: 'Notebook Lenovo V15-IGL iron gray 15.6", Intel Celeron N4020 8GB de RAM 256GB SSD.',
        category: 'computacion',
        discount: 0,
        stock: 3
    },
    { 
        id: '6',
        name: 'Notebook Asus ZenBook',
        price: 1258,
        image: NotebookAsusZenBook,
        comentary: 'Notebook Asus ZenBook UX425EA gris 14", Intel Core i5 1135G7 8GB de RAM 512GB SSD.',
        category: 'computacion',
        discount: 13,
        stock: 2
    },
    { 
        id: '7',
        name: 'Notebook Huawei',
        price: 989,
        image: NotebookHuawei,
        comentary: 'Notebook Huawei D14 Core I3 14 8gb 256gb Ssd W10.',
        category: 'computacion',
        discount: 26,
        stock: 7
    },
    { 
        id: '8',
        name: 'Mouse Logitech',
        price: 45,
        image: MouseLogitech,
        comentary: 'Mouse de juego inalámbrico Logitech G Series Lightspeed G305 black.',
        category: 'computacion',
        discount: 7,
        stock: 20
    },
    
    // Camaras
    { 
        id: '9',
        name: 'Nikon Coolpix B B500',
        price: 490,
        image: NikonCoolpix,
        comentary: 'Nikon Coolpix B B500 compacta avanzada color negro.',
        category: 'camaras',
        discount: 0,
        stock: 9
    },
    { 
        id: '10',
        name: 'Sony Kit Alpha 6400',
        price: 1499,
        image: SonyKit,
        comentary: 'Sony Kit Alpha 6400 + lente SELP1650 ILCE-6400L sin espejo color negro.',
        category: 'camaras',
        discount: 8,
        stock: 2
    },
    { 
        id: '11',
        name: 'GoPro Hero9',
        price: 642,
        image: GoProHero9,
        comentary: 'Cámara GoPro Hero9 5K CHDHX-901 NTSC/PAL negra.',
        category: 'camaras',
        discount: 14,
        stock: 11
    },
    { 
        id: '12',
        name: 'Kit Filtro De Lente 52mm',
        price: 12,
        image: KitFiltro,
        comentary: 'Kit De Filtro De Lente 52mm Uv Cpl Fld Cámara Reflex.',
        category: 'camaras',
        discount: 0,
        stock: 56
    },

    // Videojuegos
    { 
        id: '13',
        name: 'PlayStation 5',
        price: 1149,
        image: PlayStation,
        comentary: 'Sony PlayStation 5 825GB Digital Edition.',
        category: 'videojuegos',
        discount: 0,
        stock: 5
    },
    { 
        id: '14',
        name: 'Xbox One S',
        price: 700,
        image: XboxOne,
        comentary: 'Xbox One S 4k 1tb.',
        category: 'videojuegos',
        discount: 7,
        stock: 9
    },
    { 
        id: '15',
        name: 'Nintendo Switch',
        price: 689,
        image: NintendoSwitch,
        comentary: 'Nintendo Switch OLED 64GB Standard.',
        category: 'videojuegos',
        discount: 20,
        stock: 25
    },
    { 
        id: '16',
        name: 'Auriculares gamer Onikuma',
        price: 30,
        image: AuricularesgamerOnikuma,
        comentary: 'Auriculares gamer Onikuma K5 black y grey con luz LED.',
        category: 'videojuegos',
        discount: 5,
        stock: 54
    }
]

export default data