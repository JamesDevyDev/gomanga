import Footer from "@/components/Footer";
import Header from "@/components/Header";
import '../globals.css'

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='overflow-x-hidden w-[100vw] h-[100vh] relative'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
