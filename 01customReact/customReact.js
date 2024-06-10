// This line gets the HTML element with the id "root" and assigns it to the variable 'mainContainer'.
const mainContainer = document.getElementById("root")

// This is a JavaScript object that represents a React element. It has a type, children, and props.
const reactElement = {
    "type" : "a", // The type of the HTML element to create.
    "children" : "Click me to Visit Google", // The inner HTML of the element.
    "props" : { // The properties to set on the element.
        "href" : "https://www.google.lk", // The URL the link points to.
        "target" : "_blank" // Opens the link in a new tab or window.
    }
}

// This function takes a reactElement and a container element, creates a new DOM element based on the reactElement, and appends it to the container.
function customRender(reactElement,mainContainer){
    // Create a new DOM element of the type specified in reactElement.type.
    const domElement = document.createElement(reactElement.type)
    // Set the inner HTML of the new element to the children of the reactElement.
    domElement.innerHTML = reactElement.children
    // Loop over the props in the reactElement and set them on the new DOM element.
    for (prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    // Append the new DOM element to the mainContainer.
    mainContainer.appendChild(domElement)
}

// Call the customRender function with the reactElement and mainContainer as arguments.
customRender(reactElement,mainContainer)