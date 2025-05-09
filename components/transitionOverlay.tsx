import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function TransitionOverlay() {
    const { resolvedTheme } = useTheme()
    const [phase, setPhase] = useState<'enter' | 'exit'>('enter')
    const blocks = Array.from({ length: 5 })
    const duration = 0.3
    const delayStep = 0.08
    const entranceTime = duration + (5 - 1) * delayStep
    const holdBeforeExit = 400

    useEffect(() => {
        if (phase === 'enter') {
            const timeout = setTimeout(() => setPhase('exit'), entranceTime * 1000 + holdBeforeExit)
            return () => clearTimeout(timeout)
        }
    }, [phase])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'row',
                zIndex: 9999,
                pointerEvents: 'none',
                backgroundColor: `${resolvedTheme === 'light' ? '#FFD0A3' : 'black'}`
            }}
        >
            {blocks.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: '100%' }}
                    animate={{ y: phase === 'enter' ? 0 : '100%' }}
                    transition={{
                        duration,
                        delay: i * delayStep,
                        ease: 'easeInOut',
                    }}
                    style={{
                        flex: 1,
                        backgroundColor: `${resolvedTheme === 'light' ? '#FFE6C9' : '#2e2e2e'}`,
                    }}
                />
            ))}
        </motion.div>
    )
}