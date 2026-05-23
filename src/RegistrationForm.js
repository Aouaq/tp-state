import React, { useState } from 'react';

function RegistrationForm() {

    const [formData, setFormData] = useState({
        prenom: "",
        email: ""
    });

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData(prevState =>({
            ...prevState,
            [name]:value,})
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Inscription réussie !\n\nPrénom : ${formData.prenom}\nEmail : ${formData.email}`);
        setFormData({ firstName: "", email: "" });
    };

    return <div>
        <h2>Exercice 2 : Formulaire d'inscription</h2>
        <form                 onSubmit={handleSubmit}
>
            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="prenom" style={{ display: "block", marginBottom: "5px" }}>
                    Prénom :
                </label>
                <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required

                />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                    email :
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required

                />
            </div>
            <button
                type="submit"

            >
                S'inscrire
            </button>
        </form>
    </div>;
}

export default RegistrationForm;