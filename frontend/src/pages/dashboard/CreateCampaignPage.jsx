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
} from 'antd';
import api from '../../config/axiosConfig';

const { TextArea } = Input;

const sub = () => {
  // alert("Campaign created");
};

const CreateCampaignPage = () => {

  const [loading, setLoading] = useState(false)

  const [form] = Form.useForm()

  const formSubmitHandler = async (values) => {
    console.log(values);
    try {
      setLoading(true)
      let response = await api.post('/api/admin/create-campaign', values)
      console.log(response)
    } catch (error) {
      console.error(error)
    }finally{
      form.resetFields()
      setLoading(false)
    }
  }


  return (
    <>
      <Spin spinning={loading}>
        <Form
          form={form}
          onFinish={formSubmitHandler}
          wrapperCol={{ span: 24 }}
          layout="vertical"
          style={{ maxWidth: 600, marginLeft: '16px' }} // Ajustez la marge à gauche
        >
          {/* Ligne 1 : Titre */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Title" name="title">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="État" name="status">
                <Radio.Group>
                  <Radio value="active">Active</Radio>
                  <Radio value="completed">Completed</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

          {/* Ligne 2 : Description */}
        

          {/* Ligne 3 : Quantité Cible et Quantité Collectée */}
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

          {/* Ligne 4 : Date de Début et Date de Fin */}
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
  <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Description" name="description">
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          {/* Ligne 5 : Boutons Soumettre et Annuler */}
          <Row gutter={16}>
            <Col span={24} style={{ textAlign: 'left' }}> {/* Alignement à gauche */}
              <Form.Item>
                <Button htmlType='submit' onClick={sub} style={{ marginRight: '8px' }} type="primary">
                  Soumettre
                </Button>
                <Button >Annuler</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </>
  );
};

export default CreateCampaignPage;