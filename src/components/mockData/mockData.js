import XiaomiPocophone from '../../img/xiaomi-pocophone.jpg'
import SamsungGalaxy from '../../img/samsung-galaxy.jpg'
import AppleiPhone13 from '../../img/apple-iphone-13.jpg'
import NotebookLenovo from '../../img/notebook-lenovo.jpg'
import NotebookAsusZenBook from '../../img/notebook-asus-zenbook.jpg'
import NotebookHuawei from '../../img/notebook-huawei.jpg'
import AuricularesgamerOnikuma from '../../img/auriculares-gamer-onikuma.jpg'
import MouseLogitech from '../../img/mouse-logitech.jpg'

// Articulos y stock
const data = [
    {
        id: '1',
        name: 'Xiaomi Pocophone',
        price: 529,
        image: XiaomiPocophone,
        comentary: 'Xiaomi Pocophone Poco X4 Pro 5G Dual SIM 256 GB laser black 8 GB RAM.',
        category: 'phone',
        discount: 24,
        stock: 8
    },
    {
        id: '2',
        name: 'Samsung Galaxy',
        price: 435,
        image: SamsungGalaxy,
        comentary: 'Samsung Galaxy A52 Dual SIM 128 GB awesome black 6 GB RAM.',
        category: 'phone',
        discount: 8,
        stock: 11
    },
    { 
        id: '3',
        name: 'Apple iPhone 13',
        price: 2229,
        image: AppleiPhone13,
        comentary: 'Iphone 13 iOS 15 chip A15 Bionic.',
        category: 'phone',
        discount: 0,
        stock: 5
    },
    {
        id: '4',
        name: 'Notebook Lenovo',
        price: 375,
        image: NotebookLenovo,
        comentary: 'Notebook Lenovo V15-IGL iron gray 15.6", Intel Celeron N4020 8GB de RAM 256GB SSD.',
        category: 'pc',
        discount: 0,
        stock: 3
    },
    { 
        id: '5',
        name: 'Notebook Asus ZenBook',
        price: 1258,
        image: NotebookAsusZenBook,
        comentary: 'Notebook Asus ZenBook UX425EA gris 14", Intel Core i5 1135G7 8GB de RAM 512GB SSD.',
        category: 'pc',
        discount: 13,
        stock: 2
    },
    { 
        id: '6',
        name: 'Notebook Huawei',
        price: 989,
        image: NotebookHuawei,
        comentary: 'Notebook Huawei D14 Core I3 14 8gb 256gb Ssd W10.',
        category: 'pc',
        discount: 26,
        stock: 7
    },
  
    { 
        id: '7',
        name: 'Auriculares gamer Onikuma',
        price: 30,
        image: AuricularesgamerOnikuma,
        comentary: 'Auriculares gamer Onikuma K5 black y grey con luz LED.',
        category: 'accessory',
        discount: 0,
        stock: 12
    },
    { 
        id: '8',
        name: 'Mouse Logitech',
        price: 45,
        image: MouseLogitech,
        comentary: 'Mouse de juego inalámbrico Logitech G Series Lightspeed G305 black.',
        category: 'accessory',
        discount: 7,
        stock: 20
    }
]

export default data