function joo(){
  alert("aaaaaaaaa")
}

function Nappulo() {
  return (
    <button onClick={joo}>nappulo</button>
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
