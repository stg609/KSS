/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import {
    Empty, List, Skeleton, Tabs, Space, Typography, Dropdown, Menu
} from 'antd';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { MessageOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { DefaultLayout } from '../layouts';
import { BackTopWithStyle } from '../../common/backTop';
import { Star } from '../../common/star';
import { ThumbsUp } from '../../common/thumbsUp';

const { TabPane } = Tabs;

const FilterType = {
    Latest: '最新',
    Subscribers: '订阅数',
    Score: '评分',
};

export const CoursesPage = () => {
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState(FilterType.Latest);
    const [isfilterOrderDown, setFilterOrder] = useState(true);
    const match = useRouteMatch();
    const history = useHistory();

    useState(nprogress.configure({ showSpinner: false }).start());

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            nprogress.done();
        }, 2000);
    });

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

    function handleMenuClick(e) {
        setFilter(e.key);
        setFilterOrder(true);
    }

    function handleButtonClick(e) {
        setFilterOrder(!isfilterOrderDown);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key={FilterType.Latest}>
                最 新
            </Menu.Item>
            <Menu.Item key={FilterType.Score}>
                评 分
            </Menu.Item>
            <Menu.Item key={FilterType.Subscribers}>
                订阅数
            </Menu.Item>
        </Menu>
    );

    const filterActions = <Space>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
            <Space>
                {filter}
                {isfilterOrderDown ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
            </Space>
        </Dropdown.Button>
    </Space>;

    const onClickStar = (e, id) => {
        console.log(e + id);
    };

    const onThumbsUp = (e, id) => {
        console.log(e + id);
    };

    const onCommentClicked = (id) => {
        history.push(`${match.path}/${id}#comments`);
    };

    return (<DefaultLayout
        header={<title>课程列表 | K.S.S.</title>}>
        <Tabs defaultActiveKey="1" tabBarExtraContent={filterActions}>
            <TabPane tab="全部" key="1">
                <List itemLayout="vertical" size="large"
                    dataSource={listData}
                    renderItem={(item) => (
                        <List.Item
                            key={item.id}
                            actions={!loading && [
                                <Star text="1" onClick={(e) => onClickStar(e, item.id)} />,
                                <ThumbsUp text="156" onClick={(e) => onThumbsUp(e, item.id)} />,
                                <MessageOutlined text="2" key="list-vertical-message" onClick={() => onCommentClicked(item.id)} />,
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
            <TabPane tab=".Net" key="2">
                <Empty />
            </TabPane>
            <TabPane tab="数据库" key="3">
                <Empty />
            </TabPane>
        </Tabs>

        <BackTopWithStyle>
            <div>UP</div>
        </BackTopWithStyle>


    </DefaultLayout>);
};
