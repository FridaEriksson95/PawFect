import { useEffect, useState } from "react";
import { Link } from "react-router";
import noPic from '../images/noPic.jpg';
import { useSearch } from "../context/SearchContext";
import { useDogs } from "../context/DogContext";
import '../index.css'

const DogsPage = () => {
    const { dogs, loading } = useDogs();
    const {search} = useSearch();

    if (loading) {
        return <div style={{textAlign:'center'}}>Laddar...</div>;
    }

    //Filter the dogs so user can search by name, breed and sex
    const filteredDogs = dogs.filter(dog => {
        const nameMatch = dog.name.toLowerCase().includes(search.toLowerCase());
        const breedMatch = dog.breed.toLowerCase().includes(search.toLowerCase());
        const sexMatch = dog.sex.toLowerCase().includes(search.toLowerCase());
        return nameMatch || breedMatch || sexMatch;
    })

    return (
    /*Display all dogs from API */
        <div className='dogListContainer'>
            {filteredDogs.length > 0 ? (
            filteredDogs.map((dog, index) => (
                <Link key={index} 
                to={`/DogDetailPage/${dog.chipNumber}`}>

                <div className="eachDogContainer" 
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                        <img id='dogImg' src={dog.img || noPic} 
                         alt={dog.img ? dog.name : 'noPic'} 
                         onError={(e) => {
                            console.log(`Image failed to load for ${dog.name}, using noPic`);
                            e.target.src = noPic;}}/>

                <section 
                    style={{margin:'5px 0', paddingLeft:'10px'}}>
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