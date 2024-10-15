import { useForm } from "../hooks/useForm"

export const FormsApp = () => {

    //Aqui estamos agregando el valor inicial del formulario segun el que necesitemos este va a variar
    const initialForm = {
        username: '',
        nickname: '',
        email: '',
        password: ''
    }

    const {username, email, password, nickname, onInputChange} = useForm(initialForm)

    //Con esta linea de codigo ya estamos manejando cualquier formulario 
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username, email, password, nickname)
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="username"
                    name='username'
                    value={username}
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nickname</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="nickname"
                    name='nickname'
                    value={nickname}
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
