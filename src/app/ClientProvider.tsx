import { Toaster } from 'react-hot-toast'
import { ReactNode } from 'react'

interface ClientProviderProps {
  children: ReactNode
}

const ClientProvider = function ({ children }: ClientProviderProps) {
  return (
    <>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: 'max-content',
            padding: '16px 24px',
            color: '#333333',
          },
        }}
      />
      {children}
    </>
  )
}

export default ClientProvider
