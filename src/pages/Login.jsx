import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

function Login({ setIsLoggedIn }) {
    const [user, setUser] = useState({
        Username: "",
        Password: ""
    });
    const [recaptchaVerified, setRecaptchaVerified] = useState(false);
    const navigate = useNavigate();

    const handleRecaptchaChange = (value) => {
        if (value) {
            setRecaptchaVerified(true); // Mark reCAPTCHA as verified
        } else {
            setRecaptchaVerified(false); // Reset verification
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!recaptchaVerified) {
            alert("Please complete the reCAPTCHA verification.");
            return;
        }

        console.log("User logged in:", user);
        setIsLoggedIn(true); // Update authentication state
        navigate('/'); // Redirect to homepage
    };

    return (
        <div className="col-lg-12 col-md-6 d-flex justify-content-center align-items-center m-1">
            <div className="p-5 rounded w-45 login">
                <h3 className="m-3 fw-bold" style={{ textDecoration: "none", background: "transparent", color: "green" }}>
                    Login
                </h3>
                <Form className="border shadow p-5 rounded" onSubmit={handleLogin}>
                    {/* Username Field */}
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your username"
                            value={user.Username}
                            onChange={(e) => setUser({ ...user, Username: e.target.value })}
                        />
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={user.Password}
                            onChange={(e) => setUser({ ...user, Password: e.target.value })}
                        />
                    </Form.Group>

                    {/* reCAPTCHA */}
                    <Form.Group className="mb-3">
                        <ReCAPTCHA
                            sitekey="6Lc056QqAAAAAGxgZqasIL1C-A4D7EfAVrEK9byu" // Replace with your actual site key
                            onChange={handleRecaptchaChange}
                        />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button variant="outline-success" type="submit" disabled={!recaptchaVerified}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
