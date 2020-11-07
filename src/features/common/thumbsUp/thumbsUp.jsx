import React,{ useState }  from 'react';
import {Space} from 'antd';
import {  LikeOutlined, LikeFilled } from '@ant-design/icons';

export const ThumbsUp = ({ text, onClick }) => {
    const [liked, setLiked] = useState(false);
    const onLikeClick = () => {
        setLiked(!liked);
        onClick(liked);
    }
    return (
        <Space>
            {liked ? <LikeFilled onClick={onLikeClick} /> : <LikeOutlined onClick={onLikeClick} />}
            {text}
        </Space>
    );
}
