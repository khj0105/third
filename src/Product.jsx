import React from 'react'; 

function User({ user }) {
    return (
      <div>
        <img src={user.img} alt={user.name}/>
        <b>{user.name}</b> 
        <span>({user.price})</span>
      </div>
    );
  }


function ProductList() {
    const users = [ 
        { 
            img: process.env.PUBLIC_URL +'/images/product_img1.png', 
            name: 'EOS R6 Mark 2', 
            price: '2,699,000원' 
        }, 
        { 
            img: process.env.PUBLIC_URL +'/images/product_img2.png',
            name: 'EOS R5 Mark 2', 
            price: '5,499,000원' ,
        }, 
        { 
            img:process.env.PUBLIC_URL + '/images/product_img3.png', 
            name: 'EOS R8 (Body)', 
            price: '1,799,000원' 
        }, 
        { 
            img:process.env.PUBLIC_URL + '/images/product_img4.png', 
            name: 'EOS R10 (Body)', 
            price: '1,299,000원' 
        } 
    ]; 
    return ( 
    <div className="product"> 
        <h3>PRODUCT</h3> 
        <div className="product_list"> 
            <ul> 
                {users.map((user, index) => ( 
                    <li> 
                     <User  user={user} key={index} />
                    </li> 
                ))} 
            </ul> 
        </div> 
    </div> 
    ); 
} 
export default ProductList;