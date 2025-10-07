function Nappulo() {
  return (
    <button onClick={() => alert('moi')}>nappulo</button>
  )
}

export default function Home() {
  return (
    <main>
      <div>Next.js on GitHub Pages</div>
      <div>glup</div>
      <Nappulo/>
    </main>
  );
}
