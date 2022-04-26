import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <RecoilRoot>
      {/* Higher Order Component */}
      <AuthProvider>
        <AnyComponent {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}

export default MyApp
