import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import SkipLink from './SkipLink';
function App() {
  const [page,setPage] = useState("/");
  const [theme,setTheme] = useState("light");
   function onNav(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setPage(target);
  }
  function toggleTheme() {
     const newTheme = theme === 'light' ? 'dark' :'light';
     setTheme(newTheme);
  }
  return (
    <div className={`app ${theme}`}>
      <SkipLink/>
      <Header onNav={onNav} className={"header"} />
      <Main page={page} className={"main"} theme={theme} toggleTheme= {toggleTheme}/>
      <Footer className={"footer"}/>
    </div>
  );
}

export default App;
