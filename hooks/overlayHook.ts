import { useState, useEffect } from "react"
import { useRouter } from 'next/router';


export const useOverlay = () => {
    const router = useRouter()
    const [showOverlay, setShowOverlay] = useState(false)
    const [showPage, setShowPage] = useState(false)
    
      useEffect(() => {
        setShowOverlay(true)
        const initialTimeout = setTimeout(() => {
          setShowPage(true)
        }, 1000)
    
        const hideOverlayTimeout = setTimeout(() => {
          setShowOverlay(false)
        }, 2000)
    
        return () => {
          clearTimeout(initialTimeout)
          clearTimeout(hideOverlayTimeout)
        }
      }, [])
    
      useEffect(() => {
        const handleRouteChangeStart = () => {
          setShowOverlay(true)
          setShowPage(false)
        }
    
        const handleRouteChangeComplete = () => {
          setTimeout(() => {
            setShowPage(true)
          }, 1000)
          setTimeout(() => {
            setShowOverlay(false)
          }, 2000)
        }
    
        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeComplete)
        router.events.on('routeChangeError', handleRouteChangeComplete)
    
        return () => {
          router.events.off('routeChangeStart', handleRouteChangeStart)
          router.events.off('routeChangeComplete', handleRouteChangeComplete)
          router.events.off('routeChangeError', handleRouteChangeComplete)
        }
      }, [router])

      return {showOverlay, showPage, router}
}