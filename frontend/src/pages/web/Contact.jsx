import React from 'react';
import bg2 from '../../assets/bg.png';
import { Form, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;

export const Contact = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Left Side - Image with Overlay */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          minHeight: '100vh',
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
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

        {/* Text inside overlay */}
        <div
          style={{
            position: 'relative',
            color: '#BFAF99',
            padding: '2rem',
            height: '100%',
            display: 'flex',
            marginTop:'70%',
            marginLeft:'30%',
            fontSize: '35px',
            fontWeight: 600,
            flexDirection: 'column',
            lineHeight: '40px',
            fontFamily:'Montserrat'
          }}
        >
          We’d Love To<br /> Hear From You
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div
        style={{
          flex: 1,
          height: '100vh',
          display: 'flex',
          
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ width: '100%', maxWidth: 500 }}>
          <Title level={3} style={{ color: '#003366', marginBottom: '2rem' }}>
            Contact Us
          </Title>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Enter Your Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder="Enter Your Email" />
            </Form.Item>

            <Form.Item label="Subject" name="subject">
              <Input placeholder="Message Subject" />
            </Form.Item>

            <Form.Item label="Message" name="message">
              <Input.TextArea placeholder="What on your mind" rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="default" htmlType="submit" style={{ borderColor: '#a0522d', color: '#a0522d' }}>
                Donate To Campaign
              </Button>
            </Form.Item>
          </Form>

          <Text type="secondary">
            Email Us On <a href="mailto:exampleemail@email.com">exampleemail@email.com</a>
          </Text>
        </div>
      </div>
    </div>
  );
};
