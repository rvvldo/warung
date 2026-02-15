
import type { Product } from "../data/products"
import { Plus } from "lucide-react"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group flex flex-col items-center text-center cursor-pointer p-2 md:p-0">
            {/* Image Box (Aesthetic) */}
            <div className="relative w-full aspect-square bg-[#fcfaf7] border border-orange-100 rounded-2xl md:rounded-[32px] overflow-hidden mb-3 md:mb-6 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-orange-100/50">

                {/* Visual Placeholder (Soft Gradient or Image) */}
                <div className="absolute inset-2 md:inset-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl md:rounded-[24px] flex items-center justify-center text-4xl md:text-6xl group-hover:bg-white transition-colors duration-500 overflow-hidden">
                    <span className="group-hover:scale-110 transition-transform duration-500 ease-elastic drop-shadow-sm filter saturate-150">
                        {product.category === 'makanan' ? '🥘' : '🍹'}
                    </span>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
                        onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                    />
                </div>


            </div>

            {/* Typography */}
            <h3 className="text-sm md:text-lg font-serif font-medium text-gray-900 mb-1 md:mb-2 group-hover:text-orange-700 transition-colors duration-300">
                {product.name}
            </h3>

            <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-500 font-medium tracking-wide">
                <span className="text-orange-500 font-bold">Rp</span>
                {product.price.toLocaleString('id-ID')}
            </div>
        </div>
    )
}
