import { useEffect, useState } from 'react'

interface FetchResponse<T> {
  data: T | null
  loading: boolean
}

const useFetch = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData: T = await response.json()
        setData(responseData)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading }
}

export default useFetch
