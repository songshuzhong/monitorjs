import React, {useEffect}  from 'react';
import fetch from 'isomorphic-unfetch';
import {Layout} from '../src/components/lib/layout';

import '../src/styles/float-img.less';

const FloatImg = props => {
    useEffect(() => {
        const url = `/haokan-next/v1/api/blabla`;
        window.fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.log(e));
    }, []);
    return (
        <Layout>
            <div className='gallery'>
                {
                    props.pageProps.list.map((item, index) => {
                        return (
                            <div className='image-item' key={index}>
                                <img src={item.middleURL} alt='an image' />
                                <div className='desc' dangerouslySetInnerHTML={{__html: item.fromPageTitle}} />
                            </div>
                        );
                    })
                }
            </div>
        </Layout>
    );
};

FloatImg.getInitialProps = async() => {
    const url = `http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&fp=result&queryWord=css&cl=2&lm=-1&ie=utf-8&oe=utf-8&&word=css&nc=1&pn=120&rn=60&gsm=&1574236584657=`;
    const res = await fetch(url);
    const {data} = await res.json();

    return {
        list: data
    };
};

export default FloatImg;
