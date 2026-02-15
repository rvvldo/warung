
import { useState } from "react"
import { foods, drinks } from "../data/products"
import ProductCard from "./ProductCard"

export default function ProductSection() {
    const [activeTab, setActiveTab] = useState<'makanan' | 'minuman'>('makanan')
    const products = activeTab === 'makanan' ? foods : drinks

    return (
        <section id="Produk" className="bg-[#fcfaf7] py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header with Artistic Touch */}
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                    <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Menu Pilihan</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 italic">
                        Kelezatan yang Nyata
                    </h2>

                    {/* Minimalist Tabs */}
                    <div className="grid grid-cols-2 inline-flex p-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                        <button
                            onClick={() => setActiveTab('makanan')}
                            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'makanan'
                                ? 'bg-gray-900 text-white shadow-md'
                                : 'text-gray-500 hover:text-orange-600'
                                }`}
                        >
                            Makanan |
                        </button>

                        <button
                            onClick={() => setActiveTab('minuman')}
                            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'minuman'
                                ? 'bg-gray-900 text-white shadow-md'
                                : 'text-gray-500 hover:text-orange-600'
                                }`}
                        >
                            | Minuman
                        </button>
                    </div>
                </div>

                {/* Aesthetic Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
