import { CalculoPesadoComponent } from "./components/CalculoPesadoComponent"
import { CallbackComponent } from "./components/CallbackComponent"
import { CounterComponent } from "./components/CounterComponent"
import { FetchComponent } from "./components/FetchComponent"
import { FormsComponent } from "./components/FormsComponent"
import { ListaTareasComponent } from "./components/ListaTareasComponent"

export const HooksApp = () => {
  return (
    <>
      <h1>Aplicacion de Hooks</h1>
      <hr />
      {/* <CalculoPesadoComponent />
      <CounterComponent />
      <FormsComponent />
      <FetchComponent /> 
      <CallbackComponent />*/}
      <ListaTareasComponent/>
    </>
  )
}
