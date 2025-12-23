const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-dark">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
              type="email"
              id="email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
              type="password"
              id="password"
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage