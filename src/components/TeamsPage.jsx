import worker1 from '../images/worker1.PNG';
import worker2 from '../images/worker2.PNG';

const TeamsPage = () => {

    return(
    <>
     <h1 style={{
      fontSize: '28px', textAlign: 'center', 
      fontFamily:'serif', fontWeight: 'bold',
      paddingTop:'40px', paddingBottom:'20px'
      }}>🐾Vi på PawFect🐾</h1>

      <div style={{
        display:'flex', gap:'20px',
        justifyContent:'center'}}>
        <div style={{
          display:'flex', 
          flexDirection:'column', 
          textAlign:'center'}}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
       <img src={worker1} alt="worker" 
       style={{width:'200px',
       borderRadius:'20px', 
       boxShadow:'2px 2px 5px #333'}}/>
       <p>Anna & Jack</p>
       </div>


       <div style={{
        display:'flex', 
        flexDirection:'column', 
        textAlign:'center'}}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
       <img src={worker2} alt="worker" 
       style={{width:'200px', 
       borderRadius:'30px', 
       boxShadow:'2px 2px 5px #333'}}/>
       <p>Frida & Zigge</p>
       </div>
       </div>
    </>
    )
}

export default TeamsPage;