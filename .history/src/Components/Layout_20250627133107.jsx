import { Outlet, Layout } from "react-router-dom";

export default function Layout() {

    return (
        <div>

            <Outlet />

            <main>
                <Layout />
            </main>
        </div>
        
    )
}