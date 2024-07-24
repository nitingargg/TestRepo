import Link from "next/link";

export default function Explore() {
  const stories = [
    {
      id: 1,
      name: "Jane Doe",
      image: "/images/jane1.jpg",
      quote: "Empowerment is about making your own choices.",
      story: "Jane started her journey in tech with a passion for coding...",
      link: "/stories/jane"
    },
    {
      id: 2,
      name: "Aisha Khan",
      image: "/images/aisha.jpg",
      quote: "The only way to achieve the impossible is to believe it is possible.",
      story: "Aisha founded her own startup to bridge the digital divide...",
      link: "/stories/aisha"
    },
    {
      id: 3,
      name: "Maria Garcia",
      image: "/images/maria.jpg",
      quote: "Breaking barriers is not just about success; it's about inspiring others.",
      story: "Maria's work in the community has transformed many lives...",
      link: "/stories/maria"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-rose-600 mb-12">Explore Women Success Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={story.image} alt={story.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-rose-600">{story.name}</h2>
                <p className="italic text-gray-700 my-4">"{story.quote}"</p>
                <p className="text-gray-600">{story.story.slice(0, 100)}...</p>
                <Link href={story.link}>
                  <span className="text-rose-600 font-semibold mt-4 block cursor-pointer hover:underline">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-rose-600 w-full text-white text-center py-4 mt-12">
        Suvidha Foundation. R. 2024
      </footer>
    </div>
  );
}
