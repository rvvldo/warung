import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollTop() {
    const [isScrollOpen, setIsScrollOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrollOpen(window.scrollY > 40)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-3 rounded-full hover:bg-orange-600 transition-colors">
            {isScrollOpen && (
                <button
                    onClick={scrollToTop}
                ><ArrowUp className="w-4 h-4" /></button>
            )}
        </div>
    )
}