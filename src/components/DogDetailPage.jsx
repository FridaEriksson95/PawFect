import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

const DogDetailPage = () => {
    const { chipNumber } = useParams();
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDogs = async () => {
            try{
                const response = await fetch('https://api.jsonbin.io/v3/b/68d255a043b1c97be94caa84', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                const data = await response.json();

                const dogsArray = data.record?.record || [];
                const selectedDog = dogsArray.find(dog => dog.chipNumber === chipNumber); 
                setDog(selectedDog)
        }catch (err){
            console.log(err.message);
        } finally{
            setLoading(false); 
        }
    }
    fetchDogs();
    }, [chipNumber]);

    if (!dog){
        return (
            <div style={{
                padding:'20px', color:'#333'}}>
                    <button onClick={() => navigate('/DogsPage')} 
                    style={{ marginTop: '10px', padding:'5px 10px', textAlign:'left'}}>Back </button><br />
                    Hund kunde inte hittas.
                </div>
        )
    }

    const showOwnerAlert = () => {
        const fullName = `${dog.owner.name} ${dog.owner.lastName}`;
        const phoneNumber = dog.owner.phoneNumber;
        alert(`Ägare: ${fullName}\nTelefonnummer: ${phoneNumber}`);
    }

    return (
        <div style={{
            maxWidth: '900px', minHeight:'calc(100vh - 380px)', margin:'20px auto', padding: '20px', background: 'transparent', 
            borderRadius:'15px', boxShadow:'2px 2px 5px rgba(0,0,0,0.2)', position:'relative', zIndex: 1}}>
                <div style={{ 
                marginTop:'60px', padding:'10px', borderRadius:'10px',
                display:'flex', flexDirection:'column', position:'absolute', width:'350px', height:'300px',
                zIndex: 2, top:'-20px', right:'30px'}}>
                    <button style={{ backgroundColor:'rgba(250, 250, 250, 0.60)', color: 'purple'}}>♡ Lägg till som favorit</button>
                    <button style={{ backgroundColor:'transparent', border:'1px solid rgba(250, 250, 250, 0.60)', color: 'black', margin:'10px'}}>💬 Skicka meddelande om {dog.name}</button>
                </div>
                 <div style={{ 
                marginTop:'10px', padding:'20px', background:'rgba(250, 250, 250, 0.60)', borderRadius:'10px',
                display:'flex', flexDirection:'column', position:'absolute', width:'450px', height:'350px',
                zIndex: 2, bottom:'40px', right:'40px'}}>
                    <span style={{
                        fontSize:'18px', color:'#333', fontWeight:'bold', marginBottom:'10px'}}> DogBook</span>
                        <p>Lite text</p>
                        <input type="text" id="inputDogbook" placeholder="Vad har hänt idag?" style={{
                            marginTop:'210px'
                        }}/>
               </div>

             <button onClick={() => navigate('/DogsPage')} style={{margintop:'10px', padding:'2px 10px'}}>↩</button>
             <img src={dog.img || noPic} alt={dog.name} style={{
                width: '100%', maxWidth:'200px', height:'auto', objectFit:'cover',
                borderRadius:'10px', margin:'20px 150px 0'}} 
                onError={(e) => {
                    e.target.src = noPic;
                }}/>
            <h1 style={{ 
                fontFamily: 'serif', fontSize: '28px', color:'#000'}}>{dog.name}</h1>
                <p style={{ fontSize:'16px', color:'#000'}}><strong>Ålder:</strong> {dog.age}</p>
                <p style={{ fontSize:'16px', color:'#000'}}><strong>Ras:</strong> {dog.breed}</p>
                <p style={{ fontSize:'16px', color:'#000'}}><strong>ChipNr:</strong> {dog.chipNumber}</p>
                <p style={{ fontSize:'16px', color:'#000'}}><strong>Ägare:</strong>
                <span style={{
                    color: '#3498db', cursor: 'pointer', textDecoration: 'underline'
                }} onClick={showOwnerAlert}> {dog.owner.name}</span></p>
                <p style={{ fontSize:'16px', color:'#000'}}><strong>Hat objekt:</strong> {dog.hateobject}</p>
                <p style={{ fontSize:'16px', color:'#000'}}><strong>Favorit aktivitet:</strong> {dog.favoriteactivity}</p>
                <p style={{ fontSize:'16px', color:'#000'}}><strong>Superpower:</strong> {dog.superpower}</p>
               
            
        
        </div>
    )
}

export default DogDetailPage;