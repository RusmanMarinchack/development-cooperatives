import React from 'react';

//Components
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/About-us/About-us';
import Project from '../pages/Project/Project';
import JoinUs from '../pages/Join-us/Join-us';
import WithUs from '../pages/With-us/With-us';
import Contact from '../pages/Contact/Contact';

// style
import 'normalize.css'
import Footer from './Footer/Footer';




function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <Home />
        <AboutUs />
        <Project />
        <JoinUs />
        <WithUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
