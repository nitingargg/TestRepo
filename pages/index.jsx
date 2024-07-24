import Link from "next/link"

export default function Home(){

    return<div className="flex flex-col items-center pt-8 min-h-[90vh]">
        <p>Join your hands with</p>
        <p className="mt-6 font-bold text-rose-600 text-3xl">Suvidha Foundation</p>
        <p className="mt-6">An NGO with a global aim to promote women empowerment</p>
        <div className="mt-8 flex flex-row items-center space-x-4">
            <img className="h-48 rounded-xl hover:h-64" src="/images/img1.jpg"/>
            <img className="h-48 rounded-xl hover:h-64" src="/images/img2.jpg"/>
            <img className="h-48 rounded-xl hover:h-64" src="/images/img3.jpg"/>
        </div>
        <p className="my-auto text-3xl font-semibold">Read more about our mission and vision <Link href="/about"><span className="text-rose-600">here...</span></Link></p>
        <footer className="bg-rose-600 w-full text-white text-center py-4">
        Suvidha Foundation. R. 2024
      </footer>
    </div>

}