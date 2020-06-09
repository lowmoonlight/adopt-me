import React from 'react';
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Mises",
            animal: "Cat",
            breed: "Pretty",
        }),
        React.createElement(Pet, {
            name: "Sheba",
            animal: "Cat",
            breed: "Also pretty",
        }),
        React.createElement(Pet, {
            name: "Pia",
            animal: "Cat",
            breed: "Adorable",
        }),
    ]);
};

render(React.createElement(App), document.getElementById("root"));
