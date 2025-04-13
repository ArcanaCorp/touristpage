import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

export default function LayoutPage () {

    return (

        <>
        
            <Header/>

            <main>
                <Outlet/>
            </main>

            <h1>Footer</h1>
        </>

    )

}