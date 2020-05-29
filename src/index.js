/*const element = document.createElement('h1');
element.innerText = 'Hola';
const container = document.getElementById('root');
container.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';



const name = 'Felipe';
const user = {
  firstName: 'Felipe',
  lastName: 'Esp',
  avatar: 'https://static2.abc.es/media/play/2019/03/08/sauron-kSCB--620x349@abc.jpg'
};

function getName(user) {
  return `${user.firstName} ${user.lastName}`
}
function getGreeting(user) {
  if (user) {
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hola extraño</h1>
}

//const element =  <div>{getGreeting(user)}</div>;
//const element = <img src= {user.avatar} />  

const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>
)

const container = document.getElementById('root');

//ReactDOM.render(elemento, donde);

ReactDOM.render(element, container);