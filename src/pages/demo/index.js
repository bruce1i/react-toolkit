import 'core-js/stable';
import React, { lazy, Suspense } from 'react';
import { includes } from 'lodash';
// assets
import portraitUrl, { ReactComponent as Portrait } from '@/images/icon_head.svg';
import '@/assets/test.csv';
import helloTxt from '@/assets/hello.txt';
import helloTxtRaw from '@/assets/doc/test/hello.txt';
import readmeDM from '@/assets/doc/README.md';
import dochelloTxt from '@/assets/dochello.txt';
// css
import css from './style/index.less';
import style from './index.css';

console.log('> style', style);
console.log('> css', css);
// components
// import HelloWorld from "./components/hello-world";
// const HelloWorld = lazy(() => import('./components/hello-world'))
const HelloWorld = lazy(() => import('@/components/hello-world'));
const HelloWorld2 = lazy(() => import('@/components/hello-world2'));

const arr1 = ['hello', 3, 'test'];
console.log('> includes world', includes(arr1, 'world'));
console.log('> includes 3', includes(arr1, 3));
console.log('> includes string 3', includes(arr1, '3'));
console.log('> includes hello', includes(arr1, 'hello'));

function Demo() {
    return (
        <div className={style.hello}>
            <Suspense fallback={<div>Loading...</div>}>
                <HelloWorld />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <HelloWorld2 />
            </Suspense>
            <div className={style.red}>red</div>
            <div className={style.blueGbc}>blue background color</div>
            <div className={style.blue_two}>blue two</div>
            <div className={style.threeWowHa}>three</div>
            <div className={style.bobImg} />
            <div className={style.kevinImgS} />
            <p className={css.red}>What&#39;s up. Oh my god!</p>
            <div className={css.lessMain}>
                <div className={css.firstLevel}>
                    <div className={css.brown}>Brown</div>
                </div>
            </div>
            <div>
                <Portrait />
                <img src={portraitUrl} alt="" />
                <div className={css.divSvg} />
            </div>
            <div className={css.diyFont}>
                这里显示的是自定义字体~Wow!
            </div>
            <a href={helloTxt}>点击下载hello文件</a>
            <br />
            <a href={helloTxtRaw}>来之doc的hello文件</a>
            <br />
            <a href={readmeDM}>readme</a>
            <br />
            <a href={dochelloTxt}>dochello</a>
        </div>

    );
}

export default Demo;
