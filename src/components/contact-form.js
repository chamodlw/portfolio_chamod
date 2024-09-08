import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import emailjs from 'emailjs-com';
import img1 from '../images/chamod1.png'; // Import your image

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        if (formData.email === '') {
            alert('Email is required.');
            return;
        }
        e.preventDefault();
        emailjs.send(
            'service_l4qb9q5',  // Replace with your EmailJS service ID
            'template_5ttw6hy', // Replace with your EmailJS template ID
            {
                name: formData.name,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                message: formData.message
            },
            '2GoenmWXZO0r3S2IL'       // Replace with your EmailJS user ID
        )
        .then((result) => {
            alert('Message sent successfully! Thank you.');
            setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                message: ''
            });
        }, (error) => {
            console.error('Error sending message:', error);
        });
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', paddingTop: '35px', paddingBottom: '25px', borderRadius: '8px', width: '40%',minWidth: '400px', margin: '15px auto', border: '2px solid black', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <img 
                src={img1}  // Replace with your image URL or path
                alt="Contact Form" 
                style={{ width: '150px', marginBottom: '1px', display: 'block', marginLeft: 'auto',marginTop:'10px' ,marginRight: 'auto' , border: '2px solid black', borderRadius: '50%' }} 
            />
            <h1 style={{ textAlign: 'center', marginBottom: '25px' }}>Chamod Weerasinghe</h1>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            required
                            name="phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            required
                            multiline
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            style={{ width: '100%' }}
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Contact
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default ContactForm;
