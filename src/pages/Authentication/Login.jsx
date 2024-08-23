import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const Login = () => {
	const { signIn, signInWithGoogle, user } = useContext(AuthContext)
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state || '/'
	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [navigate, user])

	// googleSignIn
	const handleGoogleSignIn = async () => {
		try {
			const result = await signInWithGoogle()
			console.log(result)
			navigate('/')
			toast.success('Signin Successful')
			navigate(from, { replace: true })

		}
		catch (err) {
			console.log(err)
			toast.error('err?.message')


		}

	}
	// emailpass
	const handleSIgnIn = async e => {
		e.preventDefault()
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log({ email, password })
		try {
			const result = await signIn(email, password)
			console.log(result)
			navigate('/')

			toast.success('signIn successful')

		}
		catch (err) {
			console.log(err)
			toast.err(err?.message)

		}

	}


	return (
		<div>
			<Helmet>
				<title>
					Login
				</title>
			</Helmet>
			<div className='container mx-auto px-10 mt-12 mb-12 '>
				<div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-pink-50 dark:text-gray-800">
					<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
					<p className="text-sm text-center dark:text-gray-600">Dont have account?
						<Link to='/registration' className="focus:underline hover:underline">Sign up here</Link>
					</p>
					<div className="my-6 space-y-4">
						<button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
								<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
							</svg>
							<p>Login with Google</p>
						</button>

					</div>
					<div className="flex items-center w-full my-4">
						<hr className="w-full dark:text-gray-600" />
						<p className="px-3 dark:text-gray-600">OR</p>
						<hr className="w-full dark:text-gray-600" />
					</div>
					<form onSubmit={handleSIgnIn} noValidate="" action="" className="space-y-8">
						<div className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="email" className="block text-sm">Email address</label>
								<input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
							</div>
							<div className="space-y-2">
								<div className="flex justify-between">
									<label htmlFor="password" className="text-sm">Password</label>
									<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
								</div>
								<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
							</div>
						</div>
						<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-pink-400 dark:text-gray-50">Sign in</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;