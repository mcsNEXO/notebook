import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Notes from './components/Notes/Notes';
import Footer from './components/Layout/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  const header = (<Header />)

  const content = (
    <Routes>
      <Route path='/' element={<Notes />} />
      <Route path='*' element={<NotFound />} />
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
