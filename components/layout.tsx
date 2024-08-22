import { ReactNode } from "react"
import Navbar from "./navbar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <>
            <Navbar />
            <main>{children}</main>
        </>

    )
}