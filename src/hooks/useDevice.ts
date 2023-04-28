import { useEffect, useMemo, useState } from 'react'

export enum Device {
  SMARTPHONE = 'smartphone',
  TABLET = 'tablet',
  LAPTOP = 'laptop'
}
export interface UseDevice {
  device: Device
}

export function useDevice (): UseDevice {
  const [device, setDevice] = useState<Device>(Device.SMARTPHONE)

  const SMARTPHONE_MAX_WIDTH = useMemo(() => 767, [])
  const TABLET_MAX_WIDTH = useMemo(() => 1023, [])

  useEffect(() => {
    function onResize (): void {
      if (window.innerWidth <= SMARTPHONE_MAX_WIDTH) {
        setDevice(Device.SMARTPHONE)
      }

      if (window.innerWidth > SMARTPHONE_MAX_WIDTH && window.innerWidth <= TABLET_MAX_WIDTH) {
        setDevice(Device.TABLET)
      }

      if (window.innerWidth > TABLET_MAX_WIDTH) {
        setDevice(Device.LAPTOP)
      }
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('resize', onResize) }
  }, [])

  return { device }
}
