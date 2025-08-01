import bg from '@/assets/png/background.png';
import logo from '@/assets/png/logo.png';
import { Login } from 'care-monitor-components';
export default function Home() {
  return (
    <Login
      logoUrl={logo.src}
      imageUrl={bg.src}
      linkFacebook="https://www.facebook.com/seu-org"
      linkInstagram="https://www.instagram.com/seu-org"
      linkSupport="https://www.seu-org.com/suporte"
    />
  );
}
