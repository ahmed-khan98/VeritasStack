
import Wrapper from '@/layout/Wrapper'; 
import About from '@/components/inner-pages/about';

export const metadata = {
  title: "About -  Veritas Stack LLC",
};

const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;