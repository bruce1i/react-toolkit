/**
 * Hello World 组件
 * @license bruce
 */

/**
 * 保留项
 * @preserve bruce
 */
import React from 'react'
// css
import style from './hello-world.less'

function HelloWorld(props) {
    return (
        <div className={style.main}>
            Hello World!
        </div>
    )
}

export default HelloWorld
