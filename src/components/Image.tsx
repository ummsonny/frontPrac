import { useEffect, useState } from 'react'
import Loader from './Loader'

export default function Image({
  src,
  width,
  height
}: {
  src: string
  width: number
  height: number
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')
  useEffect(() => {
    init()
  }, [])

  async function init() {
    try {
      await loadImage()
    } catch (e) {
      if (e instanceof Error) {
        setMessage(e.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  function loadImage() {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.src = src
      img.addEventListener('load', () => {
        resolve(img)
      })
      img.addEventListener('error', () => {
        reject(new Error('이미지 로드에 실패했어요'))
      })
    })
  }
  return (
    <div
      style={{ width: width, height: height }}
      className="relative bg-gray-100">
      {isLoading ? (
        <Loader />
      ) : message ? (
        <p>{message}</p>
      ) : (
        <img
          src={src}
          alt=""
        />
      )}
    </div>
  )
}
