class Nappulo extends React.component {
  joo = () => {
    alert("aaaaaaaaa")
  }

  render() {
    return (
      <button onClick={this.joo}>nappulo</button>
    )
  }
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
