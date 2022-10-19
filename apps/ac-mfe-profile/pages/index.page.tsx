import HeroSection from '../components/HeroSection';
import { StyledPage } from './styles';
const remoteUrl = process.env['NEXT_PUBLIC_REMOTE_URL_PROFILE'] as string;

export function Index() {
  console.log('csr');
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <HeroSection remoteUrl={remoteUrl} />
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
