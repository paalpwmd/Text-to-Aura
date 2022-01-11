import React from 'react'

let Colophon = () => {
    return (
        <p id='colophon'>
            Site by{' '}
            <a href='https://paaa.al' target='_blank'>
                Paal Williams
            </a>{' '}
            | Design by
            <a href='https://jakehansondesign.com/' target='_blank'>
                Jake Hanson
            </a>
        </p>
    )
}

const MemoizedColophon = React.memo(Colophon)

export default MemoizedColophon
