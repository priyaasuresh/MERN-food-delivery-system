import React,{useState} from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  Button,
  FinalBtn
} from './ProductsElements';
import product1 from '../../images/product-1.jpg';
import product2 from '../../images/c1.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet-2.jpg';
import sweet2 from '../../images/sweet.jpg';
import sweet3 from '../../images/sweet4.jpg';

const PAGE_PRODUCTS='products';
const PAGE_CART='cart';
function Products(){
    const [cart,setCart]=useState([]);
    const [page,setPage]=useState(PAGE_PRODUCTS)
 const [products] = useState([
  {
    img: product1,
    alt: 'Naan',
    name: 'Chili Cheese Naan 2.0',
    desc:
      ' Naan dough stuffed with white cheddar, Serrano, chilies and Cilantro - cooked in the tandoor',
    price: 199,
    button: 'Add to Cart'
  },
  {
    img: product2,
    alt: 'Biryani',
    name: 'Chicken Kebab Biryani',
    desc:
      ' Green chilly, 8 boneless chicken pieces, boiled egg, basil, Kebab pieces and Raitha',
    price: 349,
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'coconut curry',
    name: 'Coconut Curry Mussels',
    desc:
      ' Coconut milk with Paprika, Turmeric, Plum Tomato, Onion and Cilantro',
    price: 249,
    button: 'Add to Cart'
  },
  {
    img: sweet3,
    alt: 'Ice Cream',
    name: 'Caramel Wonder',
    desc:
      'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
    price: 359,
    button: 'Add to Cart'
  },
  {
    img: sweet2,
    alt: 'Donuts',
    name: 'Doughlicious',
    desc:
      'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
    price: 255,
    button: 'Add to Cart' 
  },
  {
    img: sweet1,
    alt: 'DoughNuts',
    name: 'Dough Bunch',
    desc:
      'Double fudge doughnuts filled with white chocolate pieces and macadamia nuts',
    price: 200,
    button: 'Add to Cart'
  }
]);

const addToCart=(product)=>{
  setCart([...cart,{...product}]);
  };
  
const removeFromCart=(productToRemove)=>{
      setCart(
          cart.filter((product)=>product!==productToRemove)
      );
      };
  
const navigateTo=(nextPage)=>{
      setPage(nextPage);
      };
const getTotalSum = () => {
  return cart.reduce(
    (sum,{price})=>sum+price,0);
}
const renderProducts = () =>(
      <>
      <ProductsContainer>
      <ProductsHeading>Choose your Favorite</ProductsHeading>
        <ProductWrapper>
          {products.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>Rs.{product.price}</ProductPrice>
                  <ProductButton onClick={()=>addToCart(product)}>{product.button}</ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
      </>
  );
  
const renderCart=() =>(
      <>
      <ProductsHeading>Your Cart</ProductsHeading>
      <ProductsContainer>
      <ProductWrapper>
        {cart.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>Rs.{product.price}</ProductPrice>
                <ProductButton onClick={()=>removeFromCart(product)}>Remove from Cart</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
      <ProductsHeading>Total Cost:Rs.{getTotalSum()}</ProductsHeading>
      <FinalBtn to='/final'>Place Order</FinalBtn>
    </>
  );
    return (
          <div className="pr">
          <ProductButton onClick={()=>navigateTo(PAGE_CART)}>Go to Cart({cart.length})</ProductButton>
          <Button onClick={()=>navigateTo(PAGE_PRODUCTS)}>Go to Menu</Button>
          {page===PAGE_PRODUCTS && renderProducts()}
          {page===PAGE_CART && renderCart()}
  
          </div>
    );
  };
  
  export default Products;
  



/*

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton to='/AddToCart'>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
*/