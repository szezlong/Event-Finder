import React, { useState } from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const HeartButton = () => {
  const [filled, setFilled] = useState(true);

  const handleClick = () => {
    setFilled(!filled);
  };

  return (
    <Button
      shape="circle"
      icon={filled ? <HeartFilled /> : <HeartOutlined />}
      onClick={handleClick}
      style={{
        color: filled ? '#ff4d4f' : '#ff4d4f',
        border: 'none',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    />
  );
};

export default HeartButton;