import TemperatureDisplay from '../components/TemperatureDisplay.jsx'
import SensorEdge from '../components/TemperatureDisplay.jsx'

function DashBoard() {

    return (
      <body className="DashBoard">
        <section className="dados">
          <h1>Confira os dados da nossa Api em tempo real!</h1>
          <ul>
            <li className="api">petroleo/oleos
            Não detectado
            <SensorEdge />
            </li>
            
            <li className="api">fluorescencia
            <SensorEdge />
            O valor da fluorescencia é de: 110
            </li>
          
            <li className="api">plastico
              <div>
            Não detectado
            <SensorEdge />
            </div>
            </li>
           
            <li className="api">temperatura/ph
            <div>
            Temperature : 23.46
            Unit : Celsius
            <TemperatureDisplay />
      </div>
            </li>


          </ul>
        </section>   
      </body>
    );
  }

  export default DashBoard;