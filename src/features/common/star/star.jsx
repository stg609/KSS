import React,{ useState }  from 'react';
import {
    Space} from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';


export const Star = ({ text, onClick }) => {
    const [starred, setStar] = useState(false);
    const onStarClick = () => {
        setStar(!starred);
        onClick(starred);
    }
    return (
        <Space>
            {starred ? <StarFilled onClick={onStarClick} /> : <StarOutlined onClick={onStarClick} />}
            {text}
        </Space>
    );
}
