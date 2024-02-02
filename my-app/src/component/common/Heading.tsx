import React from 'react'

function Heading() {
    return (
        <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-between">
                <div>
                    <p>Mobile Number </p>
                    <p>1234567890</p>
                </div>
                <div>
                    <button className='text-blue-800'
                    // onClick={() => setShow((pre: boolean) => !pre)}
                    >Change</button>
                </div>
            </div>
        </div>
    )
}

export default Heading
