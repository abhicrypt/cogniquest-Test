// // EmailForm.js
// import React from 'react';

// const EmailForm = ({ email }) => {
//   return (
//     <div className="email-form">
//       <h2>Welcome, {email}!</h2>
//       <p>This is the email form. Add your email-related content here.</p>
//     </div>
//   );
// };

// export default EmailForm;


import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const MyForm = ({ email }) => {
  const [formData, setFormData] = useState({
    company: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    aboutMe: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form Data:', formData);
  };

  const fixedValue = 'Creative Code Inc';
  return (
    <div className="mx-auto mt-4" style={{ maxWidth: '800px' }}>
        <h1 className='mx-2'>Profile</h1>
    <Card >
        <h4 className='mx-2'>Edit Profile</h4>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company"
                name="company"
                value={fixedValue}
                onChange={handleChange}
                required
                disabled
              />
            </Form.Group>

            <Form.Group as={Col} controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                // value={formData.email}
                value={email}
                onChange={handleChange}
                required
                disabled
              />
              
            </Form.Group>
          </Row>

          {/* Row 2 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          {/* Row 3 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          {/* Row 4 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="postalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter postal code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          {/* Row 5 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="aboutMe">
              <Form.Label>About Me</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tell us about yourself"
                name="aboutMe"
                value={formData.aboutMe}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="float-end">
            Update Profile
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
};

export default MyForm;

