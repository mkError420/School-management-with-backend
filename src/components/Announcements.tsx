const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md dark:bg-dark'>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold dark:text-white">Announcements</h1>
        <span className="text-xs text-gray-500 dark:text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
         <div className="bg-lamaPurpleLight rounded-md p-4 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold dark:text-white">Lorem ipsum dolor.</h2>
            <span className="text-xs text-gray-500 bg-white rounded-md px-1 py-1 dark:bg-gray-500 dark:text-gray-300">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-600 mt-1 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae illum a cumque laborum,sit pariatur ad.</p>
         </div>
          <div className="bg-lamaYellowLight rounded-md p-4 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold dark:text-white">Lorem ipsum dolor.</h2>
            <span className="text-xs text-gray-500 bg-white rounded-md px-1 py-1 dark:bg-gray-500 dark:text-gray-300">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-600 mt-1 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae illum a cumque laborum,sit pariatur ad.</p>
         </div>
          <div className="bg-lamaSkyLight rounded-md p-4 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold dark:text-white">Lorem ipsum dolor.</h2>
            <span className="text-xs text-gray-500 bg-white rounded-md px-1 py-1 dark:bg-gray-500 dark:text-gray-300">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-600 mt-1 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae illum a cumque laborum,sit pariatur ad.</p>
         </div>
      </div>
     
    </div>
  )
}

export default Announcements