import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='overflow-x-hidden w-[100vw] h-[100vh] relative'>
            <Header />
            <div className="relative z-0">
                {children}
            </div>
            <Footer />
        </div>
    );
}
