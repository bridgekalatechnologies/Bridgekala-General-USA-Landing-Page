import React from 'react'
import { useNavigate } from 'react-router-dom'
import CtaBtn from '../CtaBtn'

export default function ThankYou() {
  const navigate = useNavigate()

  const handleScheduleCall = () => {
    // Open a calendar link or scheduling tool (e.g., Calendly, Acuity, etc.)
    window.open('https://calendly.com', '_blank')
  }

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center p-6 Montserratfont bg-linear-to-br from-white via-purple-50 to-white">
      {/* Main Container */}
      <div className="max-w-2xl w-full flex flex-col gap-5 items-center text-center">
        
        {/* Success Icon/Badge */}
        <div>
          <div className="w-17 h-17 bg-[#08CE39] rounded-full flex items-center justify-center animate-float">
            <svg className="w-15 h-15 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl ChampionGothicfont text-black">
            Thank You – Your Strategy Session Request Is In
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-[12px] md:text-lg text-gray-700 max-w-xl leading-5">
          We've received your details. Before we speak, watch this short video to understand how we work and how we can help you grow faster with the right mix of strategy, content, and performance marketing.
        </p>

        {/* Video Section */}
        <div className="w-full max-w-xl">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="How Bridgekala Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Learn how we help brands grow with our proven marketing strategies
          </p>
        </div>

        {/* CTA Button */}
        <div className="w-full flex justify-center">
          <button
            onClick={handleScheduleCall}
            className="bg-[#9000FF] hover:bg-[#7a00d4] transition-colors flex items-center px-8 py-3 font-bold text-white rounded-3xl text-base gap-3 animate-float shadow-lg"
          >
            <span>Schedule Your Call Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Additional Info */}
        <div className=" p-6 bg-white rounded-lg shadow-md max-w-xl">
          <h3 className="text-lg font-bold text-[#9000FF] mb-3">What happens next?</h3>
          <ul className="text-sm text-gray-700 space-y-2 text-left">
            <li className="flex gap-2">
              <span className="text-[#9000FF] font-bold">✓</span>
              <span>We'll review your details and send you a calendar link</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#9000FF] font-bold">✓</span>
              <span>Choose a time that works best for you</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#9000FF] font-bold">✓</span>
              <span>We'll discuss your goals and create a customized growth plan</span>
            </li>
          </ul>
        </div>

        {/* Back to Home Link */}
        <button
          onClick={() => navigate('/')}
          className="text-[#9000FF] font-semibold hover:underline mt-6 text-sm"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
