import { useState } from 'react'
import './App.css'
import TabBar from './components/TabBar'
import ScrollTransformHeader from './components/ScrollTransformHeader.jsx'
import Introduction from './components/Introduction'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <TabBar />
      <div style={{ paddingTop: '60px', margin: 0, padding: 0, width: '100%' }}>
        <ScrollTransformHeader />
        <Introduction />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;