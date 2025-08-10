import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='pb-20 px-4'>
      <div>
        <h1>Manage Your Finances <br /> with Intelligence</h1>
        <p>
          An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
        </p>
        <div>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>

          <Link href="/https://github.com/bhavesh68">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div>
          <div><Image src="/banner.jpeg" alt="Dashboard Preview" width={1200} height={720} className='rounded-lg shadow-2x1 border mx-auto' priority /></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
