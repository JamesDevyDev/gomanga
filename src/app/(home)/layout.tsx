import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='overflow-x-hidden'>
            <Header />
            <div className="relative z-0">
                {children}
            </div>
            <Footer />
        </div>
    );
}
