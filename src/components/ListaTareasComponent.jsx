import { useReducer } from 'react'
import { useForm } from '../hooks/useForm'
export const ListaTareasComponent = () => {


    //Este es el estado inicial
    const initialState = [
        { id: 1, name: 'Explicar Reducers', finalizada: false }
    ]

    //Esto es un reducer una funcion pura que recibe un estado y una accion
    const tareaReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[TAREAS] Agregar Tarea':
                return [...state, action.payload]
            case '[TAREAS] Finalizar Tarea':
                return state.map(tarea => {
                    if (tarea.id === action.payload) {
                        return {
                            ...tarea,
                            finalizada: !tarea.finalizada
                        }
                    } else return tarea
                })
            case '[TAREAS] Eliminar Tarea':
                return state.filter(tarea => tarea.id !== action.payload)
            case '[TAREAS] Borrar Tarea':
                return []
            default:
                break;
        }
        return state
    }

    const addTask = (event) => {
        event.preventDefault()
        if(tarea == '') return
        const nuevaTarea = {
            id: new Date().getTime(),
            name: tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: nuevaTarea
        }
        dispatch(action)
    }


    const endTask = (id) => {
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)

    }

    const deleteTask = (id) =>{
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const deleteAll = () => {
        const action = {
            type: '[TAREAS] Borrar Tarea',
        }
        dispatch(action)
    }
    const { tarea, onInputChange } = useForm({ tarea: '' })
    const [state, dispatch] = useReducer(tareaReducer, initialState)


    return (
        <>
            <form onSubmit={addTask}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        name="tarea"
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
                <button type="button" className="btn btn-danger" onClick={deleteAll}>Borrar Todas</button>
            </form>
            <hr />
            <ul className='list-group'>
                {state.map(tarea => {
                    return (
                        <li
                            className='list-group-item d-flex justify-content-between align-items-start'
                            key={tarea.id}
                        >
                            <span>{tarea.name}</span>
                            <input type="checkbox"
                                value={tarea.finalizada}
                                onChange={() => endTask(tarea.id)}
                            />
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteTask(tarea.id)}
                            >
                                Eliminar
                            </button>
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}
