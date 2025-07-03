import { Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="flex items-center flex-col min-h-screen max-w-[1200px]">

            <Header />

            <main className="flex-grow ">
                <Outlet />
            </main>

            <Footer />
        </div>
            
    )
}