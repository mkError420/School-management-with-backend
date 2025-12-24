const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-dark">
      <div className="scene-3d">
        <div className="scene-3d-element"></div>
        <div className="scene-3d-element"></div>
        <div className="scene-3d-element"></div>
        <div className="scene-3d-element"></div>
        <div className="scene-3d-element"></div>
      </div>
      <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-md w-96 z-10 relative">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-dark-surface-color dark:border-dark-border-color dark:text-white"
              type="email"
              id="email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-dark-surface-color dark:border-dark-border-color dark:text-white"
              type="password"
              id="password"
            />
          </div>
          <button
            className="w-full bg-lamaPurple text-black p-2 rounded-md hover:bg-lamaPurpleLight"
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