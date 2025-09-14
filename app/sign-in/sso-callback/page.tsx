'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
  const route = useRouter()

  useEffect(() => {
    route.push('/')
  }, [route])

  return <div>
    Redirecting to dashboard....
  </div>
}

export default page
