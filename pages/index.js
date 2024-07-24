import Image from "next/image";
import { Lato} from "next/font/google";

const inter = Lato({ subsets: ["latin"] , weight:'400'});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p className="font-bold text-3xl">Hello World!</p>
    </main>
  );
}
