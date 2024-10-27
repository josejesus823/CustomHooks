import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
export const ListaTareasComponent = () => {

    const tareas = useSelector(state => state)
    const dispatch = useDispatch()
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
                {tareas.map(tarea => {
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
