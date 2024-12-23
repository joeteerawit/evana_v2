import Form from './components/form'
import AnswerTable from './components/AnswerTable'
import KeyTable from './components/KeyTable'

export default function () {
  return (
    <div className="flex flex-col space-y-8">
      <Form />
      <KeyTable numberOfExam={15} />
      <AnswerTable numberOfExam={15} numberOfStudents={10} />
      <div></div>
    </div>
  )
}
