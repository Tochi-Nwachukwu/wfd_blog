export default function NewsletterCard() {
  return (
    <div className="mt-16 bg-gradient-to-r h-92 from-orange-300 to-pink-300 rounded-2xl p-8 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Sign up for our newsletter
        </h3>
        <p className="mb-6 text-gray-700">
          Get updates, resources, and information about abortion care delivered
          to your inbox.
        </p>
        <form className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full max-w-md px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full max-w-md px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
