import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const products = [
  {
    name: 'Dress 1',
    price: '$49.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24627602/2024/3/12/bcd3f466-9db1-4e06-bc61-987dcde8de531710221800819-Marks--Spencer-Women-Navy-Blue-Skinny-Fit-Woven-256171022180-3.jpg'
  },
  {
    name: 'Dress 2',
    price: '$59.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23705334/2023/6/21/7841e014-d29c-433d-bc46-5d388e84acc31687323692977Skirts1.jpg'
  },
  {
    name: 'Dress 3',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24729440/2023/8/30/9bc575dc-139d-4a4d-bfcb-0b50b57b12401693371663700DEEBACOBlackColourblockedA-LineMidiDress1.jpg'
  },
  {
    name: 'Dress 4',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24729504/2023/8/30/7e6cd62d-760f-430f-aa6b-b69209f149a31693371780152DEEBACONavyBlueFloralPrintEmpireMaxiDress1.jpg'
  },
  {
    name: 'Dress 5',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25685654/2023/10/30/c49dfada-18a5-4189-b080-f4e946d67d1a1698669606431COTLANDFASHIONPinkGeometricPrintCottonTop1.jpg'
  },
  {
    name: 'Dress 6',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30021444/2024/6/22/d2f8396a-a450-452e-aa4f-bbf26c21e6621719069648275TheRoadsterLifestyleCoRoundNeckPullover1.jpg'
  },
  {
    name: 'Dress 7',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24425594/2023/8/10/e686cc28-2721-4d21-afef-a5689fc3f1911691650841826plusSWomenBrownPleatedTrousers1.jpg'
  },
  {
    name: 'Dress 8',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29293708/2024/5/2/07865d25-fafa-4d86-af7c-4bf0777925ad1714590831245Tops3.jpg'
  },
  {
    name: 'Dress 9',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19865972/2023/11/23/6b50fcf8-fa6f-4bdd-8ef6-65559f85b2b11700718187869-Berrylush-Women-Pink-Floral-Spaghetti-Straps-Playsuit-697170-1.jpg'
  },
  {
    name: 'Dress 10',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16232864/2023/5/15/5de505f6-a896-4a91-ba9d-eaed2de330421684151463414-Cultsport-Women-Blue-Printed-Absolute-Fit-Camo-Tights-501684-1.jpg'
  },

];

const ProductList = ({ onDragStart }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} onDragStart={onDragStart(product.image)} />
      ))}
    </div>
  );
}


export default ProductList;
