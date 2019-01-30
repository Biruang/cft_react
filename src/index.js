import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/*document.getElementsByClassName("container")[0].onclick = function(event) 
{
    var target = event.target
    while (target !== this) {
        if (target.className === "card text-left m-2 shadow custom-card custom-card") {
            //console.log(target.id);
        }
        target = target.parentNode;
    }
}*/
serviceWorker.unregister();
