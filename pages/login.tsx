import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { NextPage } from 'next'
// import { Database } from 'types/supabase'

const SignIn: NextPage = () => {
  const supabase = useSupabaseClient<any>()

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if (error) {
      console.error(error)
    }

    console.log(data)
  }
  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <button onClick={handleSignIn}>Sign in with Google</button>
      </div>
    </div>
  )
}

export default SignIn
