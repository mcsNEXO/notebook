import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Header from './components/Layout/Header/Header'
import Modal from './components/Modal/Modal'
import Notes from './components/Notes/Notes'
import Footer from './components/Layout/Footer/Footer'

function App() {
  const header = (<Header />)

  const content = (
    <Routes>
      <Route path='/' element={<Notes />} />
    </Routes>
  )

  const footer = (<Footer />)

  return (
    <Router>
      <div className='containerWidth'>
        <Layout
          header={header}
          content={content}
          footer={footer}
        />
      </div >
    </Router>
  );
}

export default App;
