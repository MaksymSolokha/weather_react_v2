import { useEffect, useState } from 'react'

const useCurrentPosition = () => {
  const [currentPosition, setCurrentPosition] =
    useState<GeolocationCoordinates>()

  useEffect(() => {
    const success = async (pos: GeolocationPosition) => {
      await setCurrentPosition(pos.coords)
    }

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    const geoWatchId = navigator.geolocation.watchPosition(success, error)

    return () => {
      navigator.geolocation.clearWatch(geoWatchId)
    }
  }, [])

  return currentPosition
}

export default useCurrentPosition
