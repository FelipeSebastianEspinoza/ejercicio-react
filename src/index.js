import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.css'
const container = document.getElementById('root');





//ReactDOM.render(elemento, donde);

ReactDOM.render(<Card
  title="Título "
  description="Learn amazing guides"
  leftColor="#A74CF2"
  rightColor="#617BFB"
/>, container);



