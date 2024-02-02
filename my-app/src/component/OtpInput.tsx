"use client"
import { instialArray } from '@/store/staticData'
import React, { createRef, useRef, useState } from 'react'

function OtpInput({setOtp}:any) {
    const [otpArray, setOtpArray] = useState(instialArray);
    const inputRefs:any = useRef([...instialArray].map(() => createRef()));
    const handleInputChange = (index:number, value:string) => {
        if (/^\d*$/.test(value)) {
            const newOtp = [...otpArray];
            newOtp[index] = value;

            setOtpArray(newOtp);
            setOtp(newOtp.join(''));
            if (value !== '' && index < instialArray.length - 1) {
                inputRefs.current[index + 1].current.focus();
            }
        }
    };
    const handleKeyDown = (index:number, event:any) => {
        if (event.key === 'Backspace' && index > 0 && otpArray[index] === '') {
            inputRefs.current[index - 1].current.focus();
        }
    };
    return (
        <div >
            <label htmlFor="otp" className="text-lg font-semibold mb-2 block">Enter OTP:</label>
            <div className="flex justify-between">
                {
                    otpArray.map((value, index) => (
                        <input
                            type="text"
                            ref={inputRefs.current[index]}
                            value={value}
                            maxLength={1}
                            className="w-1/6 p-1.5 border border-gray-300 rounded text-center"
                            onChange={(e:any) => handleInputChange(index, e.target.value)}
                            onKeyDown={(e:any) => handleKeyDown(index, e)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default OtpInput
