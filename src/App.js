import '../style/header.css'
function App() {
  return (
    <>
      <header>
        <ul>
          <li>Home</li>
          <li>Buildings</li>
          <li>Gym</li>
          <li>Schools</li>
          <li>Parks</li>
        </ul>
      </header>
      <main>
        <h1>Welcome to Water Park Town</h1>
      </main>
      <footer>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Mail</li>
          <li>Phone Number</li>
        </ul>
        <p>All Right Reserved {Date()}</p>
      </footer>
    </>
  );
}

export default App;
