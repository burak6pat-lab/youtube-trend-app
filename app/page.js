export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex">

      {/* Sol Menü (Sidebar) */}
      <aside className="w-64 bg-gray-900 p-5 border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">Filtreler</h2>

        <p className="text-gray-400">Yakında buraya filtreler gelecek...</p>
      </aside>

      {/* Sağdaki Ana İçerik */}
      <section className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6">
          YouTube Trend Analyzer
        </h1>

        <p className="text-gray-400">
          Soldaki filtreleri kullanarak son 7–365 gün arası hızlı yükselen videoları listeleyebilirsiniz.
        </p>
      </section>

    </main>
  );
}
