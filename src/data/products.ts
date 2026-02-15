export interface Product {
    id: number
    name: string
    price: number
    category: 'makanan' | 'minuman'
    image: string
}

export const foods: Product[] = [
    {
        id: 1,
        name: "Tahu Campur",
        price: 13000,
        category: "makanan",
        image: "/food/tahucampur.webp"
    },
    {
        id: 2,
        name: "Soto Ayam Ceker",
        price: 12000,
        category: "makanan",
        image: "/food/sotoayamceker.webp"
    },
    {
        id: 3,
        name: "Soto Ayam",
        price: 10000,
        category: "makanan",
        image: "/food/sotoayam.webp"
    },
    {
        id: 4,
        name: "Tahu Telor",
        price: 10000,
        category: "makanan",
        image: "/food/tahutelor.webp"
    },
    {
        id: 5,
        name: "Tahu Lontong",
        price: 7000,
        category: "makanan",
        image: "/food/tahulontong.webp"
    },
    {
        id: 6,
        name: "Tahu Bumbu",
        price: 7000,
        category: "makanan",
        image: "/food/tahubumbu.webp"
    },
    {
        id: 7,
        name: "Batagor",
        price: 10000,
        category: "makanan",
        image: "/food/batagor.webp"
    },
    {
        id: 8,
        name: "Siomay",
        price: 10000,
        category: "makanan",
        image: "/food/siomay.webp"
    }
]

export const drinks: Product[] = [
    {
        id: 9,
        name: "Teh Hangat",
        price: 3000,
        category: "minuman",
        image: "/drink/tehanget.webp"
    },
    {
        id: 10,
        name: "Jeruk Hangat",
        price: 5000,
        category: "minuman",
        image: "/images/jeruk-hangat.jpg"
    },
    {
        id: 11,
        name: "Kopi Hitam",
        price: 5000,
        category: "minuman",
        image: "/images/kopi-hitam.jpg"
    },
    {
        id: 12,
        name: "Kopi Susu",
        price: 7000,
        category: "minuman",
        image: "/images/kopi-susu.jpg"
    },
    {
        id: 13,
        name: "Es Teh",
        price: 3000,
        category: "minuman",
        image: "/drink/esteh.webp"
    },
    {
        id: 14,
        name: "Es Jeruk",
        price: 5000,
        category: "minuman",
        image: "/images/es-jeruk.jpg"
    },
    {
        id: 15,
        name: "Es Nutrisari",
        price: 5000,
        category: "minuman",
        image: "/images/es-nutrisari.jpg"
    },
    {
        id: 16,
        name: "Es Jangelan Cincau",
        price: 7000,
        category: "minuman",
        image: "/images/es-jangelan.jpg"
    }
]

export const allProducts = [...foods, ...drinks]
