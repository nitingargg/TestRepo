import Link from "next/link";

function Navbar(){
    return <div className="w-full px-6 border-b py-4 flex flex-row items-center justify-between h-[10vh]">
        <p className="text-rose-600 text-xl font-bold">Suvidha Foundation</p>
        <div className="flex flex-row items-center space-x-8 font-semibold">
            <Link href="/"><p>Home</p></Link>
            <Link href="/about"><p>About</p></Link>
            <Link href="/explore"><p>Explore</p></Link>
            <Link href="/contact"><p>Contact Us</p></Link>
            <Link href="/login"><button className="bg-rose-600 rounded-lg px-4 py-2 text-white">Login</button></Link>
        </div>
    </div>
}

export default Navbar;