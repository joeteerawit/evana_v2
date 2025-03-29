'use client'
import { useState } from 'react'

export default ({
  numberOfExam,
  numberOfStudents,
}: {
  numberOfExam: number
  numberOfStudents: number
}) => {
  const [tableHeaders] = useState(() => {
    return Array.from({ length: numberOfExam }, (_, i) => i + 1)
  })
  const [students] = useState(() => {
    return Array.from({ length: numberOfStudents }, (_, i) => i + 1)
  })

  const TableHeader = ({ headers }: { headers: number[] }) => {
    return (
      <tr>
        <th scope="col" className="text-center px-4 py-6 min-w-40">
          Student Name / Student Code
        </th>
        {headers.map((n) => (
          <th key={n} scope="col" className="text-center px-4 py-6 min-w-20">
            {n}
          </th>
        ))}
      </tr>
    )
  }

  const TableBody = ({
    headers,
    students,
  }: {
    headers: number[]
    students: number[]
  }) => {
    return students.map((_, index) => {
      return (
        <tr
          key={index}
          className="bg-white/40 group transition-all opacity-70 dark:bg-gray-800 dark:border-gray-700 rounded-xl hover:bg-yellow-400 dark:hover:bg-gray-600"
        >
          <td className="px-4 py-3 min-w-40 text-gray-900 first:group-hover:rounded-l-3xl last:group-hover:rounded-r-3xl group-hover:border-transparent">
            Test
          </td>
          {headers.map((n) => (
            <td
              key={n}
              className="px-4 py-3 minx-w-20 text-gray-900 first:group-hover:rounded-l-3xl last:group-hover:rounded-r-3xl group-hover:border-transparent"
            >
              <input
                onChange={(e) => {}}
                value={n}
                type="text"
                className="bg-zinc-200 text-center max-w-12 text-sm rounded-full block p-3 hover:bg-white focus:bg-white focus:outline-yellow-500"
              />
            </td>
          ))}
        </tr>
      )
    })
  }

  return (
    <div className="relative overflow-x-auto shadow-md rounded-2xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-600 uppercase bg-zinc-300/40 dark:bg-gray-700 dark:text-gray-400">
          <TableHeader headers={tableHeaders} />
        </thead>
        <tbody>
          <TableBody headers={tableHeaders} students={students} />
        </tbody>
      </table>
    </div>
  )
}
