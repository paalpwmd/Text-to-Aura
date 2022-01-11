import React from 'react'

let Directions = () => {
    return (
        <h2 id='directions'>
            Enter your text here and witness as the letters are turned, alchemy like
            into a beautiful color palette
        </h2>
    )
}

const MemoizedDirections = React.memo(Directions)

export default MemoizedDirections;
