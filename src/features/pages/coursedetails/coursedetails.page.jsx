/* eslint-disable import/prefer-default-export */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {tomorrowNightEighties} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { DefaultLayout } from '../layouts';
import { BackTopWithStyle } from '../../common/backTop';
import styles from './styles.module.scss';

export const CourseDetailsPage = () => {
    React.useState(nprogress.start());
    const { courseId } = useParams();
    React.useEffect(() => {
        nprogress.done();
        return () => nprogress.start();
    });
    const markdown = `# Intro:  
1. First item
1. Second item
1. Third item
1. Fourth item

- First item
- Second item
- Third item
- Fourth item 
![Tux, the Linux mascot](/assets/images/tux.png)
*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third \`list\` item.
***
## Autolink literals

www.example.com, https://example.com, and contact@example.com.  
I just love **bold text**.Italicized text is the *cat's meow*.This text is ***really important***.  
> Dorothy followed her through many of the beautiful rooms in her castle.
## Strikethrough

~one~ or ~~two~~ tildes.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

## Tasklist

* [ ] to do
* [x] done

\`\`\`css
h1 {
  color: red;
}
\`\`\`

 ~~~CSharp
 public class Test
 {
    void main()
    {
        console.log('It works!');
    }
 }
 ~~~
    `;

    const syntaxRender = {
        code: ({ language, value }) => {
            return <SyntaxHighlighter language={language} style={tomorrowNightEighties} wrapLongLines={true} showLineNumbers={true} children={value} /> 
        }
    };
    return (<DefaultLayout
        header={<title>课程《{courseId}》详情 | K.S.S.</title>}>
        <ReactMarkdown className={styles.markdown} plugins={[[gfm, {singleTilde: false}]]} renderers={syntaxRender}  children={markdown} />
        <BackTopWithStyle>
            <div>UP</div>
        </BackTopWithStyle>
    </DefaultLayout>);
};
