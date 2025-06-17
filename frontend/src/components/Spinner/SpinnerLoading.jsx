import React from 'react'

function SpinnerLoading() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen absolute top-0 left-0 right-0  bg-transparent">
                <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
            </div>
        </>
    )
}

export default SpinnerLoading