
import ShoppingBagArea from './ShoppingBagArea';
import HeaderTwo from '@/layout/headers/HeaderTwo'; 
import FooterOne from '@/layout/footers/FooterOne';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';

const Cart = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Cart' title='Cart' />
        <ShoppingBagArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Cart;