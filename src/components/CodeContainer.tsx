import React from 'react'

let CodeContainer = () => {
    return (
        <div id='codecontainer'>
            <code>cssGradientGeneration = "comingSoon";</code>
        </div>
    )
}

const MemoizedCodeContainer = React.memo(CodeContainer)

export default MemoizedCodeContainer;
