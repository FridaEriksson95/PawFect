import { useEffect, useState } from "react";
import { Link } from "react-router";
import noPic from '../images/noPic.jpg';
import { useSearch } from "./SearchContext";
import { useDogs } from "./DogContext";

const DogsPage = () => {
    const { dogs, loading } = useDogs();
    const {search} = useSearch();

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
        <div style={{ 
           padding:'20px', margin:'0 auto',
           display:'grid', justifyContent:'center',
           gridTemplateColumns:'repeat(auto-fit, minmax(200px, 250px))',
           gap:'20px', maxWidth:'1200px'}}>

            {filteredDogs.length > 0 ? (
            filteredDogs.map((dog, index) => (
                <Link key={index} 
                to={`/DogDetailPage/${dog.chipNumber}`} 
                style={{ 
                    textDecoration: 'none',
                    color:'inherit'}}>

                <div style={{ 
                    background: '#DCE6E7',  borderRadius:'15px',
                    textAlign:'left', transition:'transform 0.2s', 
                    boxShadow:'2px 2px 5px rgba(0,0,0,0.2)', 
                    flexDirection:'column', display:'flex', 
                    width:'100%', height:'100%'}}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <img src={dog.img || noPic} 
                         alt={dog.img ? dog.name : 'noPic'} 
                         style={{ 
                         width:'100%', height:'150px', 
                         objectFit:'cover', borderRadius:'15px 15px 0 0', 
                         marginBottom:'5px'}} 
                         onError={(e) => {
                            console.log(`Image failed to load for ${dog.name}, using noPic`);
                            e.target.src = noPic;}}/>

                <section 
                    style={{
                        fontFamily:'serif', 
                         margin:'5px 0', paddingLeft:'10px'}}>
                    <h3 style={{
                        fontWeight:'bold', fontSize:'18px', 
                        color:'#333'}}>{dog.name}</h3>
                    <p style={{fontSize:'14px', color:'#666'}}>
                        {dog.description}</p>
                </section>
            </div>
        </Link>
            )) 
        ) : (
            <p style={{
                textAlign: 'center', padding:'20px', 
                color: '#666'}}>Inga hundar hittades.</p>)}
        </div>
    )
}

export default DogsPage;