export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '40px',
        boxSizing: 'border-box',
      }}
    >
      {/* Sol Menü (Sidebar) */}
      <aside
        style={{
          width: '260px',
          backgroundColor: '#111827', // koyu gri
          borderRight: '1px solid #374151',
          padding: '20px',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '16px',
          }}
        >
          Filtreler
        </h2>

        <p
          style={{
            color: '#9CA3AF',
            fontSize: '14px',
          }}
        >
          Yakında buraya filtreler gelecek...
        </p>
      </aside>

      {/* Sağdaki Ana İçerik */}
      <section
        style={{
          flex: 1,
          paddingLeft: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '24px',
          }}
        >
          YouTube Trend Analyzer
        </h1>

        <p
          style={{
            color: '#D1D5DB',
            maxWidth: '600px',
            fontSize: '16px',
            lineHeight: 1.5,
          }}
        >
          Soldaki filtreleri kullanarak son 7–365 gün arası hızlı yükselen
          videoları listeleyebilirsiniz.
        </p>
      </section>
    </main>
  );
}
