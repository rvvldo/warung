import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProductSection from "../components/ProductSection"
import ContactSection from "../components/ContactSection"

export default function Index() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <ProductSection />
            <ContactSection />

            {/* Footer is inside ContactSection now */}
        </>
    )
}