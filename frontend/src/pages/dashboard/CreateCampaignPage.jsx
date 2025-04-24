import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Col,
  Spin,
  Upload,
  message,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import api from '../../config/axiosConfig';

const { TextArea } = Input;

const CreateCampaignPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // Upload state
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const formSubmitHandler = async (values) => {
    if (!imageUrl) {
      message.error("Please upload an image before submitting.");
      return;
    }

    const payload = {
      ...values,
      imageUrl, 
    };

    try {
      setLoading(true);
      const response = await api.post('/api/admin/create-campaign', payload);
      console.log(response);
      message.success("Campaign created successfully");
    } catch (error) {
      console.error(error);
      message.error("Error creating campaign");
    } finally {
      form.resetFields();
      setFileList([]);
      setImageUrl(null);
      setLoading(false);
    }
  };

  const uploadProps = {
    name: 'image',
    listType: 'picture',
    maxCount: 1,
    fileList,
    action: 'http://localhost:5000/upload', 
    onChange(info) {
      let newList = [...info.fileList];
      setFileList(newList);

      const { status, response } = info.file;

      if (status === 'done') {
        const uploadedUrl = response.secure_url || response.path;
        setImageUrl(uploadedUrl);
        console.log(uploadedUrl);
        message.success(`${info.file.name} uploaded successfully`);
      } else if (status === 'error') {
        message.error(`${info.file.name} upload failed.`);
      }
    },
    onRemove() {
      setImageUrl(null);
      setFileList([]);
    },
  };

  return (
    <>
      <Spin spinning={loading}>
        <Form
          form={form}
          onFinish={formSubmitHandler}
          wrapperCol={{ span: 24 }}
          layout="vertical"
          style={{ maxWidth: 600, marginLeft: '16px' }}
        >
          {/* Title & Status */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item  label="Upload Image">
                {imageUrl ? (
                  <Upload  style={{ width: '30px', marginLeft: '40px' }} {...uploadProps} fileList={fileList}>
                    {/* No button shown when image is uploaded */}
                  </Upload>
                ) : (
                  <Upload  style={{  marginTop: '0px' }} {...uploadProps}>
                    <Button  icon={<UploadOutlined />} type="primary">
                      Upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
          </Row>

          {/* Quantity */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Quantité Cible" name="targetQuantity">
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Quantité Collectée" name="collectedQuantity">
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>

          {/* Dates */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Date de Début" name="startDate">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Date de Fin" name="endDate">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>

          {/* Description */}
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Description" name="description">
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>


          {/* Buttons */}
          <Row gutter={16}>
            <Col span={24} style={{ textAlign: 'left' }}>
              <Form.Item>
                <Button htmlType="submit" type="primary" style={{ marginRight: 8 }}>
                  Soumettre
                </Button>
                <Button htmlType="button" onClick={() => form.resetFields()}>
                  Annuler
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </>
  );
};

export default CreateCampaignPage;