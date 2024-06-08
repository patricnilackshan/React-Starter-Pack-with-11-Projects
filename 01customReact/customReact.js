const mainContainer = document.getElementById("root")

const reactElement = {
    "type" : "a",
    "children" : "Click me to Visit Google",
    "props" : {
        "href" : "https://www.google.lk",
        "target" : "_blank"
    }
}


function customRender(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

customRender(reactElement,mainContainer)
