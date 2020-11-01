import React from 'react';
import { DefaultLayout } from '../layouts';
import { Typography } from 'antd';
import { BackTopWithStyle } from '../../common/backTop';
import { useParams } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

export const CourseDetailsPage = () => {
    let { courseId } = useParams();
    return (<DefaultLayout>
        <Typography>
            <Title>Introduction {courseId}</Title>
            <Paragraph>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties and
                duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
                After massive project practice and summaries, Ant Design, a design language for background
                applications, is refined by Ant UED Team, which aims to
                <Text strong>
                                uniform the user interface specs for internal background projects, lower the unnecessary
                                cost of design differences and implementation and liberate the resources of design and
                                front-end development
                </Text>.
            </Paragraph>
        </Typography>
        <BackTopWithStyle>
            <div>UP</div>
        </BackTopWithStyle>
    </DefaultLayout>)
};
