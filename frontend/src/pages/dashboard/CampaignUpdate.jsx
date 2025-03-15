import React, { useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const CampaignUpdate = () => {
    const { TextArea } = Input;
    const [form] = Form.useForm(); // Create a form instance
    const [loading, setLoading] = useState(false)

    const { id } = useParams();

    useEffect(() => {
        const getCampaign = async () => {
            try {
                setLoading(true);
                let response = await api.get(`/api/admin/campaign/${id}`);
                const campaignData = response?.data.data;
                if (campaignData) {
                    form.setFieldsValue({
                        title: campaignData.title,
                        status: campaignData.status,
                        targetQuantity: campaignData.targetQuantity,
                        collectedQuantity: campaignData.collectedQuantity,
                        startDate: campaignData.startDate ? dayjs(campaignData.startDate) : null,
                        endDate: campaignData.endDate ? dayjs(campaignData.endDate) : null,
                        description: campaignData.description,
                    });
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getCampaign();
    }, [id, form]);
    

    const formSubmitHandler = async (values) => {
        try {
            setLoading(true)
            console.log(values);
            let response = await api.put(`/api/admin/update-campaign/${id}`, values)
            console.log(response)
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false)
        }
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

                <Row gutter={16}>
                    <Col span={24} style={{ textAlign: 'left' }}>
                        <Form.Item>
                            <Button htmlType="submit" style={{ marginRight: '8px' }} type="primary">
                                update
                            </Button>
                            <Button>cancel</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Spin>
        </>
    );
};

export default CampaignUpdate;
