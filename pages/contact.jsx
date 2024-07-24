import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center pt-12 min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold text-center text-rose-600 mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          We'd love to hear from you! Whether you have a question, want to volunteer, or just want to say hello, drop us a line.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0 items-start">
          <div className="flex flex-col items-start space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-rose-600">Office Address:</h2>
              <p>123 NGO Street, City, Country</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-rose-600">Phone:</h2>
              <p>+123 456 7890</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-rose-600">Email:</h2>
              <p>contact@suvidhafoundation.org</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-rose-600">Follow Us:</h2>
              <div className="flex space-x-4 text-rose-600">
                <Link href="https://facebook.com/suvidhafoundation">
                  <span className="cursor-pointer hover:text-rose-800 transition duration-300">Facebook</span>
                </Link>
                <Link href="https://twitter.com/suvidhafound">
                  <span className="cursor-pointer hover:text-rose-800 transition duration-300">Twitter</span>
                </Link>
                <Link href="https://instagram.com/suvidhafoundation">
                  <span className="cursor-pointer hover:text-rose-800 transition duration-300">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md">
            <h2 className="text-xl font-semibold text-rose-600 mb-4">Send Us a Message</h2>
            <form className="flex flex-col space-y-6">
              <input type="text" placeholder="Your Name" className="border-2 border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-rose-600 transition duration-300" />
              <input type="email" placeholder="Your Email" className="border-2 border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-rose-600 transition duration-300" />
              <textarea placeholder="Your Message" className="border-2 border-gray-300 p-3 rounded-md w-full h-40 focus:outline-none focus:border-rose-600 transition duration-300"></textarea>
              <button type="submit" className="bg-rose-600 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-rose-700 hover:shadow-xl transition duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-rose-600 w-full text-white text-center py-4 mt-12">
        Suvidha Foundation. R. 2024
      </footer>
    </div>
  );
}
