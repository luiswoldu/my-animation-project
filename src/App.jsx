import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TabBar from './components/TabBar';
import ScrollTransformHeader from './components/ScrollTransformHeader';
import Introduction from './components/Introduction';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 480);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router basename="/my-animation-project">
      <div className="app">
        <CustomCursor />
        <Routes>
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/" element={
            <>
              <TabBar />
              <div style={{ 
                paddingTop: isMobile ? '100px' : '60px', 
                margin: 0, 
                padding: 0, 
                width: '100%' 
              }}>
                <ScrollTransformHeader />
                <Introduction />
                <Work />
                <Contact />
                <Footer />
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;