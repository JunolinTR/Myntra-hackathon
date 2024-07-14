import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const products = [
  {
    name: 'Dress 1',
    price: '$49.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24627602/2024/3/12/bcd3f466-9db1-4e06-bc61-987dcde8de531710221800819-Marks--Spencer-Women-Navy-Blue-Skinny-Fit-Woven-256171022180-3.jpg',
    type:'Pants'
  },
  {
    name: 'Dress 2',
    price: '$59.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23705334/2023/6/21/7841e014-d29c-433d-bc46-5d388e84acc31687323692977Skirts1.jpg',
    type: 'Skirt'
  },
  {
    name: 'Dress 3',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24729440/2023/8/30/9bc575dc-139d-4a4d-bfcb-0b50b57b12401693371663700DEEBACOBlackColourblockedA-LineMidiDress1.jpg',
    type:"Dress"
  },
  {
    name: 'Dress 4',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24729504/2023/8/30/7e6cd62d-760f-430f-aa6b-b69209f149a31693371780152DEEBACONavyBlueFloralPrintEmpireMaxiDress1.jpg',
    type:"Dress"
  },
  {
    name: 'Dress 5',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25685654/2023/10/30/c49dfada-18a5-4189-b080-f4e946d67d1a1698669606431COTLANDFASHIONPinkGeometricPrintCottonTop1.jpg',
    type: 'Upper-clothes'
  },
  {
    name: 'Dress 6',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30021444/2024/6/22/d2f8396a-a450-452e-aa4f-bbf26c21e6621719069648275TheRoadsterLifestyleCoRoundNeckPullover1.jpg',
    type: 'Upper-clothes'
  },
  {
    name: 'Dress 7',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24425594/2023/8/10/e686cc28-2721-4d21-afef-a5689fc3f1911691650841826plusSWomenBrownPleatedTrousers1.jpg',
    type:'Pants'
  },
  {
    name: 'Dress 8',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29293708/2024/5/2/07865d25-fafa-4d86-af7c-4bf0777925ad1714590831245Tops3.jpg',
    type: 'Upper-clothes'
  },
  {
    name: 'Dress 9',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19865972/2023/11/23/6b50fcf8-fa6f-4bdd-8ef6-65559f85b2b11700718187869-Berrylush-Women-Pink-Floral-Spaghetti-Straps-Playsuit-697170-1.jpg',
    type:"Dress"
  },
  {
    name: 'Dress 10',
    price: '$69.99',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16232864/2023/5/15/5de505f6-a896-4a91-ba9d-eaed2de330421684151463414-Cultsport-Women-Blue-Printed-Absolute-Fit-Camo-Tights-501684-1.jpg',
    type:'Pants'
  },
  {
    name: 'Dress 11',
    price: '$69.99',
    image: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--Rm7II2bz--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_972,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1647447286085/buckethathero.jpg',
    type:'Hat'
  },
  // {
  //   name: 'Dress 12',
  //   price: '$69.99',
  //   image: 'data:image/jpeg;base64,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',
  //   type:'Hat'
  // },
  {
    name: 'Dress 12',
    price: '$69.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSsB_fHXCgVc6S0Dx3HsGUpyMMMc1HyocLw&s',
    type:'Shoe'
  },
  {
    name: 'Dress 13',
    price: '$69.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Mj02Cl_wGXQ44g9Kp55We9pdawzxzhG8cQ&s',
    type:'Shoe'
  },

];

const ProductList = ({ onDragStart }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
}


export default ProductList;
