import { Outlet, Layout } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">

            <Header />

            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
        
    )
}