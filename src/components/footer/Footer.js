import React, { useState } from "react";
import "./footer.css";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { FaGithub, FaFacebook, FaGoogle, FaDiscord } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Snackbar from 'awesome-snackbar'

const Footer = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const showSuccessSnackbar = () => {
    new Snackbar('Email sent successfully', {
      duration: 3000,
      position : 'top-right',
      style: {
        container: [['background-color', 'green'], ['color', 'white']],
      },
    });
  };
  
  const showErrorSnackbar = () => {
    new Snackbar('Failed to send email', {
      duration: 3000,
      position : 'top-right',
      style: {
        container: [['background-color', 'red'], ['color', 'white']],
      },
    });
  };
  
  const showErrorMessageSnackbar = () => {
    new Snackbar('An error occurred while sending the email', {
      duration: 3000,
      position : 'top-right',
      style: {
        container: [['background-color', 'red'], ['color', 'white']],
      },
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `;

    const config = {
      Host: "smtp.elasticemail.com",
      Username: "contact@bishwas-shrestha.com.np",
      Password: "81BFE9F5235FA9334ABBB9A539A65C2A75CC",
      To: "info@bishwas-shrestha.com.np",
      From: "workmail.bishwas@gmail.com",
      Subject: "Contact Form Portfolio website",
      Port: 2525,
      Body: emailMessage,
    };

    try {
      if (window.Email) {
        window.Email.send(config);
        showSuccessSnackbar();
      } else {
        showErrorSnackbar();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      showErrorMessageSnackbar();
    }
  
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact">
      <div className="footer-container">
        <Card className="footer-card" variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              {/* First Column for Heading */}
              <Grid item xs={12} sm={6}>
                <div className="footer-column">
                  <Typography variant="h6" gutterBottom>
                    Contact Me
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="footer-caption"
                  >
                    Feel free to get in touch anytime !
                  </Typography>

                  {/* Social Media Links */}
                  <div className="footer-socials">
                    <a
                      href="https://github.com/BishwasGit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://np.linkedin.com/in/bishwas-shrestha-39b1ba1b5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin />
                    </a>
                    <a
                      href="https://www.facebook.com/justBishwas"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="mailto:workmail.bishwas@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGoogle />
                    </a>
                    <a
                      href="https://discord.com/app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDiscord />
                    </a>
                  </div>
                </div>
              </Grid>

              {/* Second Column for Form */}
              <Grid item xs={12} sm={6} className="footer-form-container">
                <Typography variant="h6" gutterBottom>
                  Send a message
                </Typography>
                <form onSubmit={handleSubmit} className="footer-form">
                  <Grid container spacing={2}>
                    {/* Other form fields */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="form-submit-button"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default Footer;
