import {
  useBuilderForm,
  type BuilderForm,
  type BuilderFormError,
  type TouchedFields,
} from '../hooks/useBuilderForm'
import DropdownInput from './DropdownInput'

export default () => {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleDropdownChange,
    handleBlur,
    handleSubmit,
  } = useBuilderForm()

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

  const Input = ({
    name,
    label,
    type = 'text',
    className = '',
  }: {
    name: string
    label: string
    type?: string
    className?: string
  }) => {
    const isError = Boolean(
      touched[name as keyof TouchedFields] &&
        errors[name as keyof BuilderFormError]
    )
    const errorMessage = String(errors[name as keyof BuilderFormError])
    return (
      <div>
        <label
          htmlFor={name}
          className="block ml-3 mb-2 text-base font-medium text-gray-600 dark:text-white"
        >
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name as keyof BuilderForm]}
          onChange={handleChange}
          onBlur={() => handleBlur(name as keyof BuilderForm)}
          className={`bg-white text-sm rounded-full min-w-52 max-w-72 block p-3 ${className} ${
            isError
              ? 'focus:outline-red-500 border border-red-500'
              : 'focus:outline-yellow-500'
          }`}
        />
        {isError && (
          <p className="ml-3 mt-1 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    )
  }

  const Dropdown = ({
    name,
    label,
    options,
    placeholder,
  }: {
    name: string
    label: string
    options: string[]
    placeholder?: string
  }) => {
    const isError = Boolean(
      touched[name as keyof TouchedFields] &&
        errors[name as keyof BuilderFormError]
    )
    const errorMessage = String(errors[name as keyof BuilderFormError])
    return (
      <div>
        <DropdownInput
          name={name}
          value={String(formData[name as keyof BuilderForm])}
          label={label}
          options={options}
          isError={isError}
          errorMessage={errorMessage}
          placeholder={placeholder}
          onChange={(value: string) =>
            handleDropdownChange(name as keyof BuilderForm, value)
          }
          onBlur={() => handleBlur(name as keyof BuilderForm)}
          className={`bg-white text-sm rounded-full min-w-52 max-w-72 block p-3 text-center cursor-pointer ${
            isError
              ? 'focus:outline-red-500 border border-red-500'
              : 'focus:outline-yellow-500'
          }`}
        />
      </div>
    )
  }

  return (
    <div className="max-w-full p-10 block bg-zinc-50/40 drop-shadow-md rounded-xl">
      <form className="flex flex-col space-y-8">
        <div className="flex flex-row justify-between">
          <Input label="Subject Code" name="subjectCode" />
          <Input label="Subject Name" name="subjectName" />
          <Dropdown
            name="semester"
            label="Semester"
            placeholder="Select Semester"
            options={generateSemester()}
          />
          <Dropdown
            name="year"
            label="Year"
            placeholder="Select Year"
            options={generateYears()}
          />
        </div>
        <div className="flex flex-row justify-between">
          <Input label="Teacher Name" name="teacherName" />
          <Input
            className="text-center"
            label="Number of Students"
            name="numberOfStudents"
            type="number"
          />
          <Input
            className="text-center"
            label="Number of Exam"
            name="numberOfExam"
            type="number"
          />
          <Input
            className="text-center"
            label="Number of Choices"
            name="numberOfChoices"
            type="number"
          />
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
