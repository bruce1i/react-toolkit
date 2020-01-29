import React from 'react'
import ReactDom from 'react-dom'
import style from './index.css'

console.log('> style', style)

function HelloWorld(props) {
    return (
        <div className={style.hello}>
            <h1>Hello World!!!</h1>
            <div className={style.red}>red</div>
            <div className={style.blueGbc}>blue background color</div>
            <div className={style.blue_two}>blue two</div>
            <div className={style.three_wowHa}>three</div>
            <div className={style.bobImg}></div>
            <div className={style.kevinImgS}></div>
        </div>

    )
}

const $app = document.getElementById('app')
ReactDom.render(<HelloWorld/>, $app)
