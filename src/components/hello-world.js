/**
 * Hello World 组件
 * @license bruce
 */
import React from 'react'
// css
import style from './hello-world.less'

function HelloWorld(props) {
    const handleClick = () => {
        console.log('> click')
    }

    return (
        <div className={style.main}>
            Hello World!
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default HelloWorld
