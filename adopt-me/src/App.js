const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ])
}

const App = () => {
    return  React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Mises",
            animal: "Cat",
            breed: "Pretty"
        }),
        React.createElement(Pet, {
            name: "Sheba",
            animal: "Cat",
            breed: "Also pretty"
        }),
        React.createElement(Pet, {
            name: "Pia",
            animal: "Cat",
            breed: "Adorable"
        })
    ]);
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);