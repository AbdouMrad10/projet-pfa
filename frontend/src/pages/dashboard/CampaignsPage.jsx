import React, { useEffect, useState } from 'react';
import { Table, Space, Spin, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'; // Import des icônes
import api from '../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

const CampaignsPage = () =>{

  let navigate = useNavigate()
    
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      showSorterTooltip: {
        target: 'full-header',
      },
      onFilter: (value, record) => record.Titre.indexOf(value) === 0,
      sorter: (a, b) => a.Titre.length - b.Titre.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      render: (text) => (
        <div
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: 'Target Quantity',
      dataIndex: 'targetQuantity',
    },
    {
      title: 'Collected Quantity',
      dataIndex: 'collectedQuantity',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      render: (date) => new Date(date).toLocaleDateString(), // Formate la date
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      render: (date) => new Date(date).toLocaleDateString(), // Formate la date
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* Icône Update */}
          <EditOutlined
            className="text-blue-500 cursor-pointer hover:text-blue-700"
            onClick={() => handleUpdate(record)}
          />
          {/* Icône Delete */}
          <Popconfirm
            className="text-red-500 cursor-pointer hover:text-red-700"
            onConfirm={() => handleDelete(record)}
            title="Delete the campaign"
            description="Are you sure to delete this campaign?"
          >
            <DeleteOutlined/>
          </Popconfirm>
        </Space>
      ),
    },
  ];


  // Fonction pour gérer l'action "Update"
  const handleUpdate = (record) => {
    // console.log(record)
    navigate(`/dashboard/update-campaign/${record._id}`)
    // alert(`Mise à jour de la campagne : ${record.Titre}`);
  };

  // Fonction pour gérer l'action "Delete"
  const handleDelete = async (record) => {
    console.log('Delete:', record);
    try {
    let result= await api.delete(`/api/admin/delete-campaign/${record._id}`)
    console.log(result)
    getCampaigns()
    } catch (err) {
      console.error(err)
    }finally{

    }
    // alert(`Suppression de la campagne : ${record.Titre}`);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


    const [campaigns, setCampaigns] = useState()
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [deletePopup, setDeletePopup] = useState(true)

    const getCampaigns = async()=>{
      try {
        setLoading(true)
        let result = await api.get('/api/admin/campaings')
        if(result.status===200){
          const newList = result.data.data.map((item, index) => ({
            ...item,  // Keep existing properties
            key: index  // Add key as the index
          }));  
          setCampaigns(newList)
        }
        // console.log(result.data.data)
      } catch (error) {
        console.error(error)
      }finally{
        setLoading(false)
      }
    }
    useEffect(()=>{
      getCampaigns()

    }, [])

  return  (
    <>
      <Spin spinning={loading}>
        <Table
          columns={columns}
          dataSource={campaigns}
          onChange={onChange}
          showSorterTooltip={{
            target: 'sorter-icon',
          }}
        />
      </Spin>
    </>
)
}

export default CampaignsPage;