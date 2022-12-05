
import './App.css';
import { List } from './components/List';

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
      <header className="text-center">
        <h1 className='md:text-8xl text-6xl text-white z-0 font-extrabold '>Aclymate</h1>
        <h2 className='text-4xl text-black z-10  font-extrabold '>Top 100 Albums</h2>
      </header>
      <main>
        <List />
      </main>
    </div>
  );
}

export default App;
