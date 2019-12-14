import React from 'react';
import fetch from 'isomorphic-unfetch';
import {Layout} from '../src/components/lib/layout';

import '../src/styles/performance.less';

const Performance = ({pageProps}) => {
    return (
        <Layout>
            <div className='monitor-insight-container'>
                <div className='item'>
                    <span>页面加载</span>
                    <span>{pageProps.load / 1000}秒</span>
                </div>
                <div className='item'>
                    <span>白屏时间</span>
                    <span>{pageProps.whiteScreen / 1000}秒</span>
                </div>
                <div className='item'>
                    <span>DOM渲染</span>
                    <span>{pageProps.dom / 1000}秒</span>
                </div>
                <div className='item'>
                    <span>请求时长</span>
                    <span>{pageProps.request / 1000}秒</span>
                </div>
                <div className='item'>
                    <span>DOM解析</span>
                    <span>{pageProps.domReady / 1000}秒</span>
                </div>
                <div className='item'>
                    <span>ttfb</span>
                    <span>{pageProps.ttfb / 1000}秒</span>
                </div>
                <div className='item'>
                    <span>DNS查询</span>
                    <span>{pageProps.lookupDomain / 1000}秒</span>
                </div>
            </div>
        </Layout>
    );
};

Performance.getInitialProps = async ({pageProps}) => {
    const url = `${pageProps.apiPrefix}/performance`;
    const res = await fetch(url);
    const {data} = await res.json();

    return {...data};
};

export default Performance;
