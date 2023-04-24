
import Body from './components/Body';
import Header from './components/Header';
import './App.css';
const App = () => {
  return (
    <main>
        <div className="main"></div>
        <div className="gradient"/>
        <div className="app">
            <Header/>
            <Body/>
        </div>
    </main>
  )
}

export default App