import React from 'react'

function SignUp() {
  return (
    <div>
      <form>

        <div class="mb-3 w-50 mx-auto">
          <h1 className='text-center'>Sign Up Page</h1>
          <input type="email" class="form-control mt-5" placeholder='Enter Your Email' />
          <br></br>
          <input type="password" class="form-control" placeholder='Enter Your Password' />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success">Sing-Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp