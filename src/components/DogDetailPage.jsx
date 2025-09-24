import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import '../index.css'

const DogDetailPage = () => {
    const { chipNumber } = useParams();
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dogbookEntries, setDogbookEntries] = useState([]);
    const [inputText, setInputText] = useState('');
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

                const savedEntries = localStorage.getItem(`dogbookEntries_${chipNumber}`);
                if(savedEntries) {
                    setDogbookEntries(JSON.parse(savedEntries));
                }
        }catch (err){
            console.log(err.message);
        } finally{
            setLoading(false); 
        }
    }
    fetchDogs();
    }, [chipNumber]);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputText.trim() !== '') {
            const today = new Date().toLocaleDateString('sv-SE');
            const newEntry = {text: inputText, date: today};
            const updatedEntries = [newEntry, ...dogbookEntries];
            setDogbookEntries(updatedEntries);
            localStorage.setItem(`dogbookEntries_${chipNumber}`, JSON.stringify(updatedEntries));
            setInputText('');
        }
    }

    const showOwnerAlert = () => {
        const fullName = `${dog.owner.name} ${dog.owner.lastName}`;
        const phoneNumber = dog.owner.phoneNumber;
        alert(`Ägare: ${fullName}\nTelefonnummer: ${phoneNumber}`);
    }

    if (!dog){
        return (
            <div style={{
                padding:'20px', color:'#333', display:'flex', gap:'10px'}}>
                    <button onClick={() => navigate('/DogsPage')} 
                    style={{ marginTop: '10px', padding:'5px 10px', 
                    textAlign:'left'}}>↩</button><br />
                    Hund kunde inte hittas.
                </div>
        )
    }

    return (
        <div className="detailContainer">
                <div id='buttonDiv'>
                    <button style={{ 
                        backgroundColor:'rgba(250, 250, 250, 0.60)', 
                        color: 'purple'}}>♡ Lägg till som favorit</button>
                    <button style={{ backgroundColor:'transparent', 
                        border:'1px solid rgba(250, 250, 250, 0.60)', 
                        color: 'black'}}>💬 Skicka meddelande om {dog.name}</button>
                </div>

                 <div id='dogbookContainer'>
                    <div>
                    <h1 style={{fontSize:'18px'}}>DogBook</h1>
                        <ul id="listDogbook">{dogbookEntries.length > 0 ? (
                            dogbookEntries.map((entry, index) => (
                                <li key={index} style={{
                                    marginBottom:'10px'
                                }}><strong>{entry.date}</strong>: {entry.text}</li>
                            )) ): ( 
                            <li>Här visar vi upp vad vi gjort idag, kika in igen efter dagens slut!</li>
                            )} </ul>
                        </div>

                        <input 
                        type="text"
                        placeholder="Vad har hänt idag?"
                        id="dogbookInput"
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}/>
                 </div>

             <button onClick={() => navigate('/DogsPage')} 
             style={{margintop:'10px', padding:'2px 10px'}}>↩</button>

             <div style={{
                display:'flex', gap:'100px'}}>
             <h1 style={{marginTop:'100px'}}>{dog.name}</h1>
             <img id="detailImg"
                src={dog.img || noPic} alt={dog.name} 
                onError={(e) => {e.target.src = noPic;}}/>
            </div>

            <div id="detailDogColumn">
                <p><strong>Ålder:</strong> {dog.age}</p>
                <p><strong>Ras:</strong> {dog.breed}</p>
                <p><strong>Kön:</strong> {dog.sex}</p>
                <p><strong>ChipNr:</strong> {dog.chipNumber}</p>
                <p><strong>Ägare:</strong>
                <span style={{
                    color: '#3498db', cursor: 'pointer', 
                    textDecoration: 'underline'}} onClick={showOwnerAlert}> 
                    {dog.owner.name}</span></p>
                <p><strong>Hat objekt:</strong> {dog.hateobject}</p>
                <p><strong>Favorit aktivitet:</strong> {dog.favoriteactivity}</p>
                <p><strong>Superpower:</strong> {dog.superpower}</p>
            </div>
     </div>
    )
}

export default DogDetailPage;