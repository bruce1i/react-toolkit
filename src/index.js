import React, {lazy, Suspense} from 'react'
import ReactDom from 'react-dom'
// css
import style from './index.css'
import css from './style/index.less'

console.log('> style', style)
console.log('> css', css)
// components
// import HelloWorld from "./components/hello-world";
// const HelloWorld = lazy(() => import('./components/hello-world'))
const HelloWorld = lazy(() => import('@/components/hello-world'))
const HelloWorld2 = lazy(() => import('@/components/hello-world2'))

function App(props) {
    return (
        <div className={style.hello}>
            <Suspense fallback={<div>Loading...</div>}>
                <HelloWorld/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <HelloWorld2/>
            </Suspense>
            <div className={style.red}>red</div>
            <div className={style.blueGbc}>blue background color</div>
            <div className={style.blue_two}>blue two</div>
            <div className={style.threeWowHa}>three</div>
            <div className={style.bobImg}></div>
            <div className={style.kevinImgS}></div>
            <p className={css.red}>What's up. Oh my god!</p>
            <div className={css.lessMain}>
                <div className={css.firstLevel}>
                    <div className={css.brown}>Brown</div>
                </div>
            </div>
        </div>

    )
}

const $app = document.getElementById('app')
ReactDom.render(<App/>, $app)
