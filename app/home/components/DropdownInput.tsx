'use client'
import { useState, useRef, useEffect } from 'react'

type DropdownProps = {
  value?: string
  label: string
  options: string[]
  placeholder?: string
  className?: string
  onChange?: (year: string) => void
}

export default ({
  value,
  label,
  options,
  placeholder = '',
  onChange,
  className = '',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedYear, setSelectedYear] = useState<string | ''>('')
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const years: string[] = options

  useEffect(() => {
    if (value) {
      setSelectedYear(value)
    }
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleYearSelect = (year: string): void => {
    setSelectedYear(year)
    setIsOpen(false)
    onChange?.(year)
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <div>
        <label
          htmlFor="year"
          className="block ml-3 mb-2 text-base font-medium text-gray-600 dark:text-white"
        >
          {label}
        </label>
        <div className="relative">
          <input
            type="text"
            id="year"
            className="bg-white text-sm rounded-full min-w-52 max-w-72 block p-3 focus:outline-yellow-500 cursor-pointer"
            value={selectedYear || ''}
            onClick={() => setIsOpen(!isOpen)}
            readOnly
            placeholder={placeholder}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-zinc-50 rounded-2xl shadow-lg max-h-60 overflow-auto">
          {years.map((year) => (
            <div
              key={year}
              className={`text-center px-4 py-2 cursor-pointer text-sm transition-all rounded-2xl
          ${selectedYear === year ? 'bg-yellow-400' : 'hover:bg-yellow-400'}
        `}
              onClick={() => handleYearSelect(year)}
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
