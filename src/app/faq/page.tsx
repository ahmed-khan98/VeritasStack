import Wrapper from '@/layout/Wrapper';
import Faq from '@/components/inner-pages/faq';

export const metadata = {
  title: "FAQ - Veritas Stack LLC",
};



const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;