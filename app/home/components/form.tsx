export default () => {
  return (
    <div className="max-w-full p-10 bg-zinc-50 bg-opacity-70 rounded-xl">
      <form className="flex flex-col space-y-8">
        <div className="flex flex-row justify-between">
          <div>
            <label
              htmlFor="email"
              className="block ml-3 mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Subject Code
            </label>
            <input
              type="email"
              className="bg-white text-sm rounded-full w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block ml-3 mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Subject Name
            </label>
            <input
              type="email"
              className="bg-white text-sm rounded-full w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block ml-3 mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Semester
            </label>
            <input
              type="email"
              className="bg-white text-sm rounded-full w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block ml-3 mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Year
            </label>
            <input
              type="email"
              className="bg-white text-sm rounded-full w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <label
              htmlFor="email"
              className="block ml-3 mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Teacher Name
            </label>
            <input
              type="email"
              className="bg-white text-sm rounded-full w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block ml-3 mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Number of Students
            </label>
            <input
              type="email"
              className="bg-white text-sm rounded-full w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block ml-3 mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Number of Exam
            </label>
            <input
              type="email"
              className="bg-white text-sm rounded-full w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block ml-3 mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Number of Choices
            </label>
            <input
              type="email"
              className="bg-white text-sm rounded-full w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
        </div>
        <div className="flex justify-end">
          {/* <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Yellow
          </button> */}
          <button
            type="button"
            className="focus:outline-none text-gray-700 bg-yellow-300 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}
