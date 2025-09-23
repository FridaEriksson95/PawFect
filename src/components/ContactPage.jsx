import { useState } from "react";
import { useNavigate } from "react-router";

const ContactPage = () => {

    const [formData, setFormData] = useState({
        address: "",
        subject: "",
        message: "",
    })
    const navigate = useNavigate();

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
        setFormData({address: "", subject: "", message: ""})
    }

    return (
        <div style={{textAlign:'center', margin:'20px'}}>
            <h1 style={{ textAlign: 'center'}}>Kontakta oss</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Adress: </label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} 
                    placeholder="Ange din mejladress" />
                </div>
                <div>
                    <label>Ämne: </label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} 
                    placeholder="Ange ämne" />
                </div>
                <div>
                    <label>Meddelande: </label>
                    <input type="text" name="message" value={formData.message} onChange={handleChange} 
                    placeholder="Skriv ditt meddelande här.." />
                </div>
                <button type="submit">Skicka</button>
            </form>
        </div>
    )

}

export default ContactPage;