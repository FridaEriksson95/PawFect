import worker1 from '../images/worker1.PNG';
import worker2 from '../images/worker2.PNG';
import '../index.css'

const TeamsPage = () => {

    return(
    <>
     <h1>🐾Vi på PawFect🐾</h1>

      <div id='teamContainer'>
        <div className='workerContainer'
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
       <img className='workerImg' src={worker1} alt="worker"/>
       <p>Anna & Jack</p>
       </div>


       <div className='workerContainer'
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
       <img className='workerImg' src={worker2} alt="worker"/>
       <p>Frida & Zigge</p>
       </div>
       </div>
    </>
    )
}

export default TeamsPage;