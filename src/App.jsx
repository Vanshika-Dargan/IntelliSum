
import Demo from './components/Demo';
import Header from './components/Header';
import './App.css';
const App = () => {
  return (
    <main>
        <div className="main"></div>
        <div className="gradient"/>
        <div className="app">
            <Header/>
            <Demo/>
        </div>
    </main>
  )
}

export default App