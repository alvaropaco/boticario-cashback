import React from 'react';
import { Link } from 'react-router-dom'
import notFound from '../../static/images/404_website.svg';
import '../../styles/Home.scss';

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={notFound} className="App-logo" alt="logo" />
        <p>
          Paǵina não encontradada.
        </p>
        <Link to="/">
          Voltar á Home
        </Link>
      </header>
    </div>
  );
}

export default NotFound;
