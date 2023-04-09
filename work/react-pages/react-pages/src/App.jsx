import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
function App() {
  const [page,setPage] = useState('/');
  function onNav(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setPage(target);
  }
  return (
    <div className="app">
      <Header className="header" onNav={onNav}/>
      <Main className="main" page={page} onNav={onNav} />
      <Footer className="footer"/>
    </div>
  );
}

export default App;
