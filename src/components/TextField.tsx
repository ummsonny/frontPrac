import styles from './TextField.module.css'

export default function TextField({
  label,
  value,
  hint,
  onChange,
  deleteValue,
  ...restProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  deleteValue: () => void
}) {
  return (
    <div>
      {/* tailwindcss 적용 --> TextField.module.css 필요없음*/}
      <label className="block">
        {label && <span>{label}</span>}
        <input
          {...restProps}
          className="w-[100%] border-1 border-gray-400" //tailwindcss 적용
          value={value}
          onChange={onChange}
        />
      </label>
      <button
        className="bg-red-500 text-white" //tailwindcss 적용
        onClick={deleteValue}>
        삭제
      </button>
      {hint && <p>{hint}</p>}
    </div>
  )
}
