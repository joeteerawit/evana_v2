'use client'
import AnswerForm from './components/AnswerForm'
import BuilderForm from './components/BuilderForm'
import StudentAnserForm from './components/StudentAnswerForm'

export default function () {
  return (
    <div className="flex flex-col space-y-8">
      <BuilderForm />
      <AnswerForm numberOfExam={15} />
      <StudentAnserForm numberOfExam={15} numberOfStudents={10} />
      <div></div>
    </div>
  )
}
