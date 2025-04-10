import Link from 'next/link'
import React from 'react'

function Profile() {
  return (
    <div>
      <h1>My profile</h1>

      <Link href="/articles/new-12?lang=en">Read in En</Link>
      <Link href="/articles/new-12?lang=bn">Read in Bn</Link>
    </div>
  )
}

export default Profile
