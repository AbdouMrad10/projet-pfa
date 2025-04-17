import React, { useState } from 'react';
import bg2 from '../../assets/bg.png';
import { Form, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;

export const Contact = () => {
  const [focusStates, setFocusStates] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocusStates((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusStates((prev) => ({ ...prev, [field]: false }));
  };

  const getInputStyle = (focused) => ({
    width: '100%',
    padding: '10px 12px',
    height: '50px',
    fontSize: '14px',
    border: focused ? '1px solid #BFAF99' : '1px solid #d9d9d9',
    borderRadius: '8px',
    outline: 'none',
    boxShadow: focused ? '0 0 0 2px rgba(191, 175, 153, 0.2)' : 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  });

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Left Side */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          minHeight: '100vh',
          backgroundImage: `linear-gradient(to bottom, rgba(29, 29, 29, 0.58), rgba(29, 29, 29, 0.58)), url(${bg2})`,




          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <div
          style={{
            position: 'relative',
            color: '#BFAF99',
            padding: '2rem',
            display: 'flex',
            marginTop: '70%',
            marginLeft: '30%',
            fontSize: '35px',
            fontWeight: 699,
            flexDirection: 'column',
            lineHeight: '40px',
            fontFamily: 'Montserrat',
          }}
        >
          We’d Love To<br /> Hear From You
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '3rem',
        }}
      >
        <div style={{ width: '100%', maxWidth: 500 }}>
          <Title level={3} style={{ color: '#033F73', marginBottom: '2rem' }}>
            Contact Us
          </Title>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Full Name" name="name">
              <Input
                placeholder="Enter Your Name"
                style={getInputStyle(focusStates.name)}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
              />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input
                placeholder="Enter Your Email"
                style={getInputStyle(focusStates.email)}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
              />
            </Form.Item>

            <Form.Item label="Subject" name="subject">
              <Input
                placeholder="Message Subject"
                style={getInputStyle(focusStates.subject)}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
              />
            </Form.Item>

            <Form.Item label="Message" name="message">
              <Input.TextArea
                placeholder="What on your mind"
                rows={4}
                style={getInputStyle(focusStates.message)}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="default"
                htmlType="submit"
                className="font-poppins"
                style={{
                  borderColor: '#a0522d',
                  color: '#a0522d',
                  height: 54,
                  width: '100%',
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize: '18px',
                }}
              >
                Donate To Campaign
              </Button>
            </Form.Item>
          </Form>

          <Text  type="secondary" className="font-poppins"  >
            Email Us On <a href="mailto:exampleemail@email.com"style={{color:'#2C2C2CD8',fontSize:'16px',textDecoration:'underline'}} >exampleemail@email.com</a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Contact;
