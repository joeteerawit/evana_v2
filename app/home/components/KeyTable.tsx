'use client'
import { useState } from 'react'

type KeyTableProps = {
  numberOfExam: number
}

type TableHeaderProps = {
  headers: number[]
}

type TableBodyProps = {
  headers: number[]
}

export default ({ numberOfExam }: KeyTableProps) => {
  const [tableHeaders] = useState(() => {
    return Array.from({ length: numberOfExam }, (_, i) => i + 1)
  })

  const TableHeader = ({ headers }: TableHeaderProps) => {
    return (
      <tr>
        <th scope="col" className="text-center px-4 py-6 min-w-40">
          Key
        </th>
        {headers.map((n) => (
          <th key={n} scope="col" className="text-center px-4 py-6 min-w-20">
            {n}
          </th>
        ))}
      </tr>
    )
  }

  const TableBody = ({ headers }: TableBodyProps) => {
    return (
      <tr className="bg-white/40 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-400/70 dark:hover:bg-gray-600">
        <td className="px-4 py-4 min-w-20 text-gray-900">Test</td>
        {headers.map((n) => (
          <td key={n} className="px-4 py-4 text-gray-900 min-w-20">
            <input
              onChange={(e) => {}}
              value={n}
              type="text"
              className="bg-zinc-200/60 text-center max-w-12 text-sm rounded-full block p-3 hover:bg-white focus:bg-white focus:outline-yellow-500"
            />
          </td>
        ))}
      </tr>
    )
  }

  return (
    <div className="relative overflow-x-auto shadow-md rounded-2xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-600 uppercase bg-zinc-300/40 dark:bg-gray-700 dark:text-gray-400">
          <TableHeader headers={tableHeaders} />
        </thead>
        <tbody>
          <TableBody headers={tableHeaders} />
        </tbody>
      </table>
    </div>
  )
}
