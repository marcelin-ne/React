// import { Fragment } from "react"

// const newMessage = "Marceline <3" // Es parte de este componente no en el scope global 
// No va a reporcesar lo que se encuentra fuera del componente

// const  newMessage = {
//     message: " Hello Wordl",
//     title: "Marceline <3"

// }

// const getResult= (a, b) => {
//     return a + b;
// }

// if (!title) {
//     throw new Error("The title does not exist");
// }

import PropTypes from 'prop-types'; 

export const FirstApp = ({title , subtitle, name }) => {

    return (
        // Envolver en un nodo padre como un <di> pero puede dar problemas en los estilos
        <>
            <h1>{title}</h1>
            {/* <code>{ JSON.stringify(newMessage)  }</code> */}

            <p>{subtitle  }</p>
            <h2>{name}</h2>
        </>
        )
    }

    FirstApp.propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.number
    }

    FirstApp.defaultProps = {
        title: 'No title',
        name: 'No name',
        subtitle: 'No subtitle'
    }