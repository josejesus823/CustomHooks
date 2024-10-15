import { useState } from "react"

// En caso de no recibir el initialForm estoy colocando un objeto vacio para que nunca se rompa el formulario
export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm)
    const onInputChange = ({ target }) => {
        const { name, value } = target
        setformState({
            //Con el form State que estamos haciendo aqui, manteniendo la informacion anterior y solamente pisamos la nueva informacion que estemos mandando
            ...formState,
            [name]: value
        })

    }


    return {
        ...formState,
        onInputChange
    }
}
