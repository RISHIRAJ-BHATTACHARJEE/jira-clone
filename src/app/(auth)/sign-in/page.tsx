import { getCurrent } from '@/features/auth/queries';
import SignInCard from '@/features/auth/components/sign-in-card'
import { redirect } from 'next/navigation';
import React from 'react'

const SignInPage = async () => {
  const user = await getCurrent();
  console.log(user)
  if(user) redirect("/")
  if(!user) console.log("not user")  
  return (
    <div>
        <SignInCard/>
    </div>
  )
}

export default SignInPage