import React from 'react'

function Title({ children, addClass }) {
    return (
        <div className={`${addClass}`}>{children}</div>
    )
}

export default Title