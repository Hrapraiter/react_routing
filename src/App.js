import './App.css';

import Home from './components/Home'
import Header from './components/Header';
import About from './components/About';
import Articles from './components/Articles';
import Article from './components/Article';

import NavMenu from './components/NavMenu';

import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header /> 
            {/* <NavMenu /> */}

            {/*<Routes>
                 <Route path="/"         element={<Home />}      />
                 <Route path="/about"    element={<About />}     />
                 <Route path="/articles" element={<Articles />}  />
            </Routes>*/}

            <Routes>
                <Route path="/" element={<NavMenu />}>
                    <Route index                element={<Home />}      />
                    <Route path="/about"        element={<About />}     />
                    <Route path="/articles"     element={<Articles />} />
                    <Route path="/articles/:id" element={<Article/> } />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
