import React,{useContext} from 'react';
import Cartcontext from '../../Context/Cartcontext';
import { FaTrashAlt,FaShoppingCart  } from 'react-icons/fa';

import styled from 'styled-components';

// Wishlist Container
const WishlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-color: transparent;
  width:100%;
  min-height: 100vh;
`;

const WishlistCard = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  gap: 20px;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;

const RemoveButton = styled.button`
  background: transparent;
  color: #f87171;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    color: #f44336;
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 70px;
  object-fit: content;
  border-radius: 10px;
  background: #f3f4f6;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProductName = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 12px;
  color: #777;
  margin: 0;
`;

const PriceAndStock = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #333;
`;

const StockStatus = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.inStock ? '#4caf50' : '#f44336')};
`;

const AddToCartButton = styled.button`
  background:transparent;
  color:  #4caf50;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    color: #45a049;
  }
`;

const WishlistItem = ({ item,onRemove,onAddToCart }) => {

    const handelwish=()=>{
        onAddToCart(item) 
        onRemove(item.id)
    }
  return (
    <WishlistCard>
      <RemoveButton onClick={() => onRemove(item.id)}><FaTrashAlt /></RemoveButton>

      <ProductImage src={item.imageUrls[0]} alt={item.title} />

      <InfoContainer>
        <ProductName>{item.title}</ProductName>
        <ProductDescription>{item.description}</ProductDescription>
        <PriceAndStock>
          <Price>₹{item.price}</Price>
          <StockStatus>
            {item.availability}
          </StockStatus>
        </PriceAndStock>
      </InfoContainer>

      <AddToCartButton onClick={handelwish }><FaShoppingCart /></AddToCartButton>
    </WishlistCard>
  );
};

const Wishlist = ({ items, onAddToCart, onRemove }) => {
    return (
      <>
        {items && items.length > 0 ? (
          <WishlistContainer>
            {items.map((item) => (
              <WishlistItem 
                key={item.id} 
                item={item} 
                onAddToCart={onAddToCart} 
                onRemove={onRemove} 
              />
            ))}
          </WishlistContainer>
        ) : (
          <h1>No items</h1>
        )}
      </>
    );
  };
  

// Dummy Data
const dummyData = [
  {
    id: 1,
    title: "Stylish Sunglasses",
    description: "Black-framed sunglasses with polarized lenses.",
    price: 1200,
    inStock: true,
    imageUrls: ["https://miro.medium.com/v2/resize:fit:1200/1*6uJgYvJ3ZyIzy0fUlQ20vg.png"],
  },
  {
    id: 2,
    title: "Classic Wristwatch",
    description: "A sophisticated wristwatch with a leather strap.",
    price: 2500,
    inStock: false,
    imageUrls: ["https://images.unsplash.com/photo-1560779370-46a56e7e9d98"],
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    description: "Portable and wireless Bluetooth speaker with surround sound.",
    price: 1500,
    inStock: true,
    imageUrls: ["https://images.unsplash.com/photo-1518756131211-56d4f1eaf7f2"],
  },
];

const handleAddToCart = (item) => {
  console.log(`Adding ${item.title} to cart`);
};

const handleRemove = (id) => {
  console.log(`Removing item with ID: ${id}`);
};


// App
const Mywishlist = () => {
    const{wishList,addCartItem,removeWishItem,addWishItem}=useContext(Cartcontext)

    return(
        <div>
            <Wishlist items={wishList} onAddToCart={addCartItem} onRemove={removeWishItem} />
        </div>
    )
}


export default Mywishlist;
