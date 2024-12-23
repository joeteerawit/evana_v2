import DrodownInput from './DropdownInput'

export default () => {
  const generateYears = (numberOfYears: number = 10): string[] => {
    const currentYear = new Date().getFullYear()
    return Array.from({ length: numberOfYears + 1 }, (_, i) =>
      (currentYear + 543 - i).toString()
    )
  }
  const generateSemester = (numberOfYears: number = 10): string[] => {
    const currentYear = new Date().getFullYear()
    return Array.from({ length: numberOfYears + 1 }, (_, i) =>
      (currentYear + 543 - i).toString()
    )
      .map((year) => [`1 / ${year}`, `2 / ${year}`])
      .flat()
  }

  return (
    <div className="max-w-full p-10 block bg-zinc-50/40 drop-shadow-md rounded-xl">
      <form className="flex flex-col space-y-8">
        <div className="flex flex-row justify-between">
          <div>
            <label
              htmlFor="text"
              className="block ml-3 mb-2 text-base font-medium text-gray-600 dark:text-white"
            >
              Subject Code
            </label>
            <input
              type="text"
              className="bg-white text-sm rounded-full min-w-52 max-w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block ml-3 mb-2 text-base font-medium text-gray-600 dark:text-white"
            >
              Subject Name
            </label>
            <input
              type="text"
              className="bg-white text-sm rounded-full min-w-52 max-w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <DrodownInput
              label="Semester"
              placeholder="Select Semester"
              options={generateSemester()}
            />
          </div>
          <div>
            <DrodownInput
              label="Year"
              placeholder="Select Year"
              options={generateYears()}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <label
              htmlFor="text"
              className="block ml-3 mb-2 text-base font-medium text-gray-600 dark:text-white"
            >
              Teacher Name
            </label>
            <input
              type="text"
              className="bg-white text-sm rounded-full min-w-52 max-w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block ml-3 mb-2 text-base font-medium text-gray-600 dark:text-white"
            >
              Number of Students
            </label>
            <input
              type="text"
              className="bg-white text-sm rounded-full min-w-52 max-w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block ml-3 mb-2 text-base font-medium text-gray-600 dark:text-white"
            >
              Number of Exam
            </label>
            <input
              type="text"
              className="bg-white text-sm rounded-full min-w-52 max-w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block ml-3 mb-2 text-base font-medium text-gray-600 dark:text-white"
            >
              Number of Choices
            </label>
            <input
              type="text"
              className="bg-white text-sm rounded-full min-w-52 max-w-72 block p-3 focus:outline-yellow-500"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="focus:outline-none text-gray-600 bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-500 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            Upload
          </button>
          <button
            type="button"
            className="focus:outline-none text-gray-600 bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-500 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}
