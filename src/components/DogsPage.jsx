import { useEffect, useState } from "react";
import { Link } from "react-router";
import noPic from '../images/noPic.jpg';
import { useSearch } from "./SearchContext";

const DogsPage = () => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const {search, setSearch} = useSearch();

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
                setDogs(dogsArray);
            } catch(err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchDogs();
    }, []);

    if (loading) {
        return <div style={{textAlign:'center'}}>Laddar...</div>;
    }

    const filteredDogs = dogs.filter(dog => {
        const nameMatch = dog.name.toLowerCase().includes(search.toLowerCase());
        const breedMatch = dog.breed.toLowerCase().includes(search.toLowerCase());
        const sexMatch = dog.sex.toLowerCase().includes(search.toLowerCase());
        return nameMatch || breedMatch || sexMatch;
    })

    return (
        <>
        <div style={{ 
           padding:'20px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 250px))',
           gap:'20px', maxWidth:'1200px', margin:'0 auto', justifyContent:'center'}}>

            {filteredDogs.length > 0 ? (
            filteredDogs.map((dog, index) => (
                <Link key={index} to={`/DogDetailPage/${dog.chipNumber}`} style={{ textDecoration: 'none',
                    color:'inherit'}}>
                <div style={{ 
                    background: '#DCE6E7',  borderRadius:'15px',
                    textAlign:'left', boxShadow:'2px 2px 5px rgba(0,0,0,0.2)', transition:'transform 0.2s', width:'100%', 
                    display:'flex', flexDirection:'column', height:'100%'}}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                         <img src={dog.img || noPic} 
                         alt={dog.img ? dog.name : 'noPic'} 
                         style={{ 
                         width:'100%', height:'150px', objectFit:'cover', borderRadius:'15px 15px 0 0', 
                         marginBottom:'5px'}}
                         onError={(e) => {
                            console.log(`Image failed to load for ${dog.name}, using noPic`);
                            e.target.src = noPic;
                        }}/>
                         <section style={{
                            fontFamily:'serif', margin:'5px 0', paddingLeft:'10px'
                         }}>
                    <h3 style={{fontWeight:'bold', fontSize:'18px', color:'#333'}}>{dog.name}</h3>
                    <p style={{fontSize:'14px', color:'#666'}}>{dog.description}</p>
                    </section>
                </div>
            </Link>
            )) 
        ) : (
            <p style={{textAlign: 'center', padding:'20px', color: '#666'}}>Inga hundar hittades.</p>
        )}
        </div>
        </>
    )
}

export default DogsPage;