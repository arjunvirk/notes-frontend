import React from 'react'
import { ZapIcon } from 'lucide-react'

const RateLimitedUI = () => {
  return (
    <div className='mx-auto max-w-[1100px] mt-10'>
        <div className='p-3 flex items-center gap-5 bg-green-950 border border-green-300 rounded-lg mx-3 lg:p-5'>
            <div>
                <ZapIcon className='text-green-200 bg-green-500 h-10 w-10 rounded-full p-1 lg:h-14 lg:w-14 lg:p-3' />
            </div>
            <div className='text-white text-sm lg:text-base'>
                <h3 className='mb-2'>Rate Limit Reached</h3>
                <p>You've made too many requests in a short period. Please wait a moment.</p>
                <p>Try again in a few seconds for the best experience..</p>
            </div>
        </div>
    </div>
  )
}

export default RateLimitedUI