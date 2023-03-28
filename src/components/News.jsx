import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100 })

  if(!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[ 24, 24]}>
      {cryptoNews.value.map((news) => (

      ))}
    </Row>
  )
}

export default News