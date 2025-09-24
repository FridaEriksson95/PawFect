import { useState } from "react";
import '../index.css'

const ContactPage = () => {

    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("meddelandet skickat", formData);
        alert("Meddelandet har skickats! Vi återkopplar så snart vi kan.")
        setFormData({email: "", subject: "", message: ""})
    }

    return (
        <div className='contactContainer'>
            <h1>Kontakta oss</h1>

            <form onSubmit={handleSubmit} style={{
                display:'flex', 
                flexDirection:'column', 
                gap:'15px', flex:1}}>

                <div>
                    <label>Email: </label>
                    <input className="contactInput" type="text" name="email" value={formData.email} 
                    onChange={handleChange} placeholder="Ange din mejladress" />
                </div>

                <div>
                    <label>Ämne: </label>
                    <input className="contactInput" type="text" name="subject" value={formData.subject} 
                    onChange={handleChange} placeholder="Ange ämne"/>
                </div>
                <div>
                    <label>Meddelande: </label>
                    <input className="contactInputMessage" type="text" name="message" value={formData.message} 
                    onChange={handleChange}  placeholder="Skriv ditt meddelande här.."/>
                </div>

                <button type="submit" style={{
                    padding:'12px 25px', 
                    background:'#FFFFFF', 
                    color:'#000', 
                    border:'none', 
                    cursor:'pointer',
                    fontSize:'16px', 
                    alignSelf:'flex-end'
                    }}>Skicka</button>
            </form>
        </div>
    )

}

export default ContactPage;