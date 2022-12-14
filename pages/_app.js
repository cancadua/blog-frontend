import '../styles/globals.css'
import '@/services/api';
import { UserProvider } from '@/store/user/provider';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
