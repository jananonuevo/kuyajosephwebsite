import { Link } from "react-router-dom"

function SignIn() {

  return (
    <>
    <Link className = "text-[#09013d] font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400" to="/"> 
      <p className = "text-5xl ml-5 mt-5"> &gt; </p>
    </Link>

    <div className = "flex justify-center items-center min-h-screen">
        <div className = "border-2 border-gray-100 w-150 shadow-xl rounded-lg">
            <div className = "mx-10">
              <p className = "text-3xl font-bold mt-10 text-[#09013d]">Sign In</p>
              <p className = "text-md mt-3"> Are you Joseph Muñoz? If you are, please <u>sign in.</u></p>
            </div>
            
            <div className = "mx-10 mb-10">
              <label htmlFor="bpcode" className="block mt-10 mb-2 text-md">BP Code
                  <input type="text" id="bpcode" className="mt-1 text-sm rounded-lg block p-2.5 w-full border-1 border-gray-600" required />
              </label>

              <label htmlFor="bpcode" className="block mt-8 mb-2 text-md ">Password
                  <input type="text" id="bpcode" className="mt-1 text-sm rounded-lg block p-2.5 w-full border-1 border-gray-600" required />
              </label>

              <button className="bg-[#09013d] text-white mt-10 w-full items-center cursor-pointer hover:bg-white font-semibold hover:text-black py-2 border sm:text-md md:text-lg hover:border-transparent rounded-lg text-lg transition-colors duration-300">Sign In</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default SignIn
