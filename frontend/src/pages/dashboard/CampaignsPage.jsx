import React from 'react';
import { Table, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'; // Import des icônes

const columns = [
  {
    title: 'Title',
    dataIndex: 'Titre',
    showSorterTooltip: {
      target: 'full-header',
    },
    onFilter: (value, record) => record.Titre.indexOf(value) === 0,
    sorter: (a, b) => a.Titre.length - b.Titre.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Etat',
    dataIndex: 'etat',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'QuantiteCible',
    dataIndex: 'QuantiteCible',
  },
  {
    title: 'QuantiteCollecte',
    dataIndex: 'QuantiteCollecte',
  },
  {
    title: 'DateDebut',
    dataIndex: 'DateDebut',
    render: (date) => new Date(date).toLocaleDateString(), // Formate la date
  },
  {
    title: 'DateFin',
    dataIndex: 'DateFin',
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
        <DeleteOutlined
          className="text-red-500 cursor-pointer hover:text-red-700"
          onClick={() => handleDelete(record)}
        />
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    Titre: "Campagne X9Y8Z",
    etat: "completed",
    description: "Collecte de fonds pour la construction d'une école en zone rurale.",
    QuantiteCible: "1000",
    QuantiteCollecte: "1000",
    DateDebut: "2022-06-01T10:00:00.000Z",
    DateFin: "2022-12-31T23:59:59.000Z",
  },
  {
    key: '2',
    Titre: "Campagne A1B2C",
    etat: "active",
    description: "Aide alimentaire pour les familles dans le besoin.",
    QuantiteCible: "500",
    QuantiteCollecte: "250",
    DateDebut: "2023-01-01T09:00:00.000Z",
    DateFin: "2023-06-30T23:59:59.000Z",
  },
];

// Fonction pour gérer l'action "Update"
const handleUpdate = (record) => {
  console.log('Update:', record);
  alert(`Mise à jour de la campagne : ${record.Titre}`);
};

// Fonction pour gérer l'action "Delete"
const handleDelete = (record) => {
  console.log('Delete:', record);
  alert(`Suppression de la campagne : ${record.Titre}`);
};

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const CampaignsPage = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{
      target: 'sorter-icon',
    }}
  />
);

export default CampaignsPage;