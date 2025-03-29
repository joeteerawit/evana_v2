'use client'
import { ChangeEvent, useState } from 'react'

export type BuilderForm = {
  subjectCode: string
  subjectName: string
  semester: string
  year: string
  teacherName: string
  numberOfStudents: number
  numberOfExam: number
  numberOfChoices: number
}

export type BuilderFormError = {
  subjectCode?: string
  subjectName?: string
  semester?: string
  year?: string
  teacherName?: string
  numberOfStudents?: number
  numberOfExam?: number
  numberOfChoices?: number
}

export type TouchedFields = {
  subjectCode: boolean
  subjectName: boolean
  semester: boolean
  year: boolean
  teacherName: boolean
  numberOfStudents: boolean
  numberOfExam: boolean
  numberOfChoices: boolean
}

export const useBuilderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<BuilderFormError>({})

  const [formData, setFormData] = useState<BuilderForm>({
    subjectCode: '',
    subjectName: '',
    semester: '',
    year: '',
    teacherName: '',
    numberOfStudents: 0,
    numberOfExam: 0,
    numberOfChoices: 0,
  })

  const [touched, setTouched] = useState<TouchedFields>({
    subjectCode: false,
    subjectName: false,
    semester: false,
    year: false,
    teacherName: false,
    numberOfStudents: false,
    numberOfExam: false,
    numberOfChoices: false,
  })

  const _clearError = (name: keyof BuilderForm) => {
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const numberFields = ['numberOfStudents', 'numberOfExam', 'numberOfChoices']
    console.log('change', name, value)

    setFormData((prev) => ({
      ...prev,
      [name]: numberFields.includes(name) ? parseInt(value) : value,
    }))

    _clearError(name as keyof BuilderForm)
  }

  const handleDropdownChange = (name: keyof BuilderForm, value: string) => {
    console.log('dropdown change', name, value)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    _clearError(name)
  }

  const handleBlur = (name: keyof BuilderForm) => {
    console.log('blur', name)

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))

    validateField(name, formData[name])
  }

  const validateField = (name: keyof BuilderForm, value: any): boolean => {
    let error = ''

    if (!value && value !== 0) {
      error = 'This field is required'
    } else if (
      name === 'numberOfStudents' ||
      name === 'numberOfExam' ||
      name === 'numberOfChoices'
    ) {
      if (value <= 0) {
        error = 'Please enter a valid positive number'
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }))

    return !error
  }

  const validateForm = (): boolean => {
    let isValid = true
    let newErrors: BuilderFormError = {}
    let newTouched = { ...touched }

    // Mark all fields as touched
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof BuilderForm
      newTouched[fieldName] = true

      const value = formData[fieldName]
      if (!value && value !== 0) {
        isValid = false
        newErrors = {
          ...newErrors,
          [fieldName]: 'This field is required',
        }
      } else if (
        fieldName === 'numberOfStudents' ||
        fieldName === 'numberOfExam' ||
        fieldName === 'numberOfChoices'
      ) {
        if (typeof value === 'number' && value <= 0) {
          isValid = false
          newErrors = {
            ...newErrors,
            [fieldName]: 'Please enter a valid positive number',
          }
        }
      }
    })

    setTouched(newTouched)
    setErrors(newErrors)

    return isValid
  }

  const handleSubmit = async (action: 'upload' | 'create') => {
    setIsSubmitting(true)

    if (validateForm()) {
      try {
        // Here you would typically call an API
        console.log(`Form submitted with action: ${action}`, formData)

        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Reset form if needed
        // setFormData({ ... })

        return {
          success: true,
          data: formData,
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        return {
          success: false,
          error: 'Failed to submit form',
        }
      } finally {
        setIsSubmitting(false)
      }
    } else {
      console.log('Form has errors')
      setIsSubmitting(false)
      return {
        success: false,
        error: 'Form has validation errors',
      }
    }
  }

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleDropdownChange,
    handleBlur,
    validateField,
    validateForm,
    handleSubmit,
  }
}
