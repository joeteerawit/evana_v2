import { ChangeEvent, useState } from 'react'

export type CreateForm = {
  subjectCode: string
  subjectName: string
  semester: string
  year: string
  teacherName: string
  numberOfStudents: number
  numberOfExam: number
  numberOfChoices: number
}

export type CreateFormError = {
  subjectCode?: string
  subjectName?: string
  semester?: string
  year?: string
  teacherName?: string
  numberOfStudents?: number
  numberOfExam?: number
  numberOfChoices?: number
}

export default () => {
  const [formData, setFormData] = useState<CreateForm>(() => ({
    subjectCode: '',
    subjectName: '',
    semester: '',
    year: '',
    teacherName: '',
    numberOfStudents: 0,
    numberOfExam: 0,
    numberOfChoices: 0,
  }))
  const [errors, setErrors] = useState<CreateFormError>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const _clearError = (name: string) => {
    if (errors[name as keyof CreateFormError]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    _clearError(name)
  }
}
