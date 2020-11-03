/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import {
    Empty, List, Skeleton, Tabs, Space, Typography,
} from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { DefaultLayout } from '../layouts';
import { BackTopWithStyle } from '../../common/backTop';

const { TabPane } = Tabs;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export const CoursesPage = () => {
    const [loading, setLoading] = useState(true);
    const match = useRouteMatch();

    useEffect(() => {
        // Update the document title using the browser API
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    console.log(match);
    const listData = [];
    for (let index = 0; index < 10; index++) {
        listData.push({
            id: index,
            title: '.Net Core 基础入门',
            img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
            author: 'Charlie',
            date: '2020-11-1 11:11',
            desc: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            href: `${match.url}/${index}`,
        });
    }

    return (<DefaultLayout
        header={<title>课程列表 | K.S.S.</title>}>
        <Tabs defaultActiveKey="1">
            <TabPane tab="全部" key="1">
                <List itemLayout="vertical" size="large"
                    dataSource={listData}
                    renderItem={(item) => (
                        <List.Item
                            key={item.id}
                            actions={!loading && [
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                        >
                            <Skeleton loading={loading} active>
                                <List.Item.Meta title={<Link to={item.href}>{item.title}</Link>} />
                                <Space align="start">
                                    <img
                                        width={160}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                    <Typography>
                                        <Typography.Paragraph>{item.desc}</Typography.Paragraph>
                                    </Typography>
                                </Space>
                            </Skeleton>
                        </List.Item>
                    )}>

                </List>
            </TabPane>
            <TabPane tab="最新上架" key="2">
                <Empty />
            </TabPane>
        </Tabs>

        <BackTopWithStyle>
            <div>UP</div>
        </BackTopWithStyle>


    </DefaultLayout>);
};
