export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-brand-dark mb-4">
          Your Project Starts Here
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Built with Next.js + Tailwind + Supabase
        </p>
        <a 
          href="mailto:matt2build@gmail.com"
          className="btn-primary"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
}
