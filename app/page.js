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
          {/* Zaman Aralığı Filtresi */}
<div style={{ marginBottom: '24px' }}>
  <label style={{ fontWeight: '600', fontSize: '14px' }}>
    Zaman Aralığı
  </label>

  <select
    style={{
      width: '100%',
      padding: '8px',
      marginTop: '8px',
      backgroundColor: '#1F2937',
      color: 'white',
      borderRadius: '6px',
      border: '1px solid #4B5563',
    }}
  >
    <option value="7">Son 7 Gün</option>
    <option value="30">Son 30 Gün</option>
    <option value="90">Son 90 Gün</option>
    <option value="365">Son 1 Yıl</option>
  </select>
</div>

{/* Ülke Filtresi */}
<div style={{ marginBottom: '24px' }}>
  <label style={{ fontWeight: '600', fontSize: '14px' }}>
    Ülke
  </label>

  <select
    style={{
      width: '100%',
      padding: '8px',
      marginTop: '8px',
      backgroundColor: '#1F2937',
      color: 'white',
      borderRadius: '6px',
      border: '1px solid #4B5563',
    }}
  >
    <option value="TR">Türkiye</option>
    <option value="US">Amerika</option>
    <option value="DE">Almanya</option>
    <option value="IN">Hindistan</option>
    <option value="BR">Brezilya</option>
  </select>
</div>

{/* Kategori Filtresi */}
<div style={{ marginBottom: '24px' }}>
  <label style={{ fontWeight: '600', fontSize: '14px' }}>
    Kategori
  </label>

  <select
    style={{
      width: '100%',
      padding: '8px',
      marginTop: '8px',
      backgroundColor: '#1F2937',
      color: 'white',
      borderRadius: '6px',
      border: '1px solid #4B5563',
    }}
  >
    <option value="all">Tümü</option>
    <option value="music">Music</option>
    <option value="gaming">Gaming</option>
    <option value="news">News</option>
    <option value="sports">Sports</option>
  </select>
</div>

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
