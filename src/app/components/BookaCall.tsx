'use client'

import { useEffect, useState } from 'react'
import { getCalApi } from "@calcom/embed-react"

export default function BookCall() {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <section className="bg-black text-white rounded-3xl my-10 py-5 max-w-auto mx-7 overflow-hidden">
      <div className="relative p-8 md:p-16">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-medium mb-8 text-gray-400 font-montreal">(Need an unfair advantage?)</h3>
          <h1 className="text-6xl md:text-6xl font-bold mb-8 font-montreal">LET'S MAKE<br />IT HAPPEN</h1>
          <button
            className={`bg-white text-black px-6 py-3 mt-5 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
              isHovered ? 'transform scale-105' : ''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-cal-namespace="30min"
            data-cal-link="by-technology-c6apcb/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            BOOK A CALL ↗
          </button>
        </div>
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-end text-sm">
          <div className="flex items-center mb-4 md:mb-0">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <div className='text-md font-montreal'>
              <p>Working Globally</p>
              <p>Available Oct '24</p>
            </div>
          </div>
          <div className="text-right text-md font-montreal">
            <p>FOR FURTHER INQUIRIES</p>
            <p>↳ info@bytechnology.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}