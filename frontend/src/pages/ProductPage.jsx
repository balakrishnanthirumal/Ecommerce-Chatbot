import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




const ProductPage = () => {
    const [mainImage, setMainImage] = useState("src/assets/images/sectionsImages/Rectangle 20.png");
  return (

      <div className="container mt-5">
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-6 text-start">
          <img
            src={mainImage}
            alt="White Shirt"
            className="img-fluid mb-3 rounded-lg"
            style={{height:'450px',width:'450px',objectFit:'cover'}}

          />
          <div className="d-flex justify-content-start">
            <img
              src="src/assets/images/sectionsImages/Rectangle 21.png"
              alt="Thumbnail 1"
              className="img-thumbnail me-2"
              style={{width:'120px',height:'120px'}}
              onClick={() => setMainImage("src/assets/images/sectionsImages/Rectangle 21.png")}
            />
            <img
              src="src/assets/images/sectionsImages/Rectangle 22.png"
              alt="Thumbnail 2"
              className="img-thumbnail"
              style={{width:'120px',height:'120px'}}
              onClick={() => setMainImage("src/assets/images/sectionsImages/Rectangle 22.png")}

            />
          </div>
        </div>

         {/* Product Details Section */}
         <div className="col-md-6">
          <h1 className="fw-bolder" style={{ fontWeight: "900" }}>White Shirt</h1>
          <div className="mb-2">
            <span  style={{ fontSize: "27px",fontWeight: "800",color: "#000000" }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <h1 className="text-green-600 mb-2 mt-4" style={{ fontSize: "29px",fontWeight: "800"}}>$500</h1>
          <p className=" text-dark">Best shirt of outdoor and many more</p>
          <h4 className="text-dark mt-4">Product Details</h4>

          <div className="row">
          <div className="col-6 text-start">
          <ul className="list-unstyled">
          <li>
    <p className="text-gray-500 mb-1">Brand</p>
    <p className="mt-0 fw-bold text-dark">Amazon</p>
  </li>
  <li>
   <p className="text-gray-500 mb-1"> Stock</p>
   <p className="mt-0 fw-bold text-dark">15 pieces</p>
    
  </li>
  </ul>
  </div>
  <div className="col-6 text-start">
  <ul className="list-unstyled">
  <li>
    <p className="text-gray-500 mb-1">Category</p>
   <p className="mt-0 fw-bold text-dark">Fashion</p>
   
  </li>
  </ul>
  </div>
  </div>
  
  <hr  style={{width:'75%'}}/>
  
      

  <div className="col-md-4 d-flex align-items-center">
          <i className="bi bi-truck fs-4 me-2"></i>
          <span className="me-40 " style={{whiteSpace:"nowrap"}}>Free-Shipping</span>
          
            <i className="bi bi-shield-check fs-4 me-2"></i>
          <span>2 Year Warranty</span>
          
         
    </div>
        
        
        <div className="col-md-4 d-flex align-items-center">
          <i className="bi bi-arrow-counterclockwise fs-4 me-2 mt-1"></i>
          <span className="me-7 mt-3">30-Day Returns</span>
        </div>
        
        
      

          <hr style={{width:'75%'}} />
          <button className="btn btn-dark  mb-5" style={{ width:"400px"}}>Add To Cart</button>
        </div>
      </div>
       {/* Reviews Section */}
<div className="row">
  {/* Reviews Section (Left Side) */}
  <div className="col-md-6 mt-8">
    <div className="mt-24">
      <h1 className="fw-bolder ">Reviews</h1>
      <p className="text-black fw-bold mt-4">Log in to write a review</p>
      <p className="text-gray-500">No reviews</p>
    </div>
  </div>

            {/* Similar Items Section */}
           
  {/* Wrapper for the cards aligned to the right with half-width */}
  <div className="col-md-6 ms-auto justify-content-end ">
  <h1 className="mt-24 fw-bolder">Similar Items</h1>

    {/* First Card */}
    <div className="mb-4">
      <div className="card" style={{ maxWidth: "350px", maxHeight: "130px", padding: "0" }}>
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src="src/assets/images/sectionsImages/Rectangle 49.png"
              alt="Classic Cotton Crewneck T-Shirt"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-8">
            <div className="card-body" style={{ padding: "8px" }}>
              <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "8px" }}>
                Classic Cotton Crewneck T-Shirt
              </h5>
              <p className="card-text" style={{ fontSize: "12px", marginBottom: "5px" }}>
                <span className="text-red-600">Fashion</span>{" "}
                <span className="text-gray-600">| Nov 15, 2024</span>
              </p>
              <p
                className="card-text text-warning"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#FF8C00",
                  marginBottom: "2px",
                }}
              >
                {"★".repeat(4) + "☆".repeat(1)}
              </p>
              <p className="card-text fw-bold text-dark" style={{ fontSize: "16px" }}>
                $100.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Second Card */}
    <div className="mb-4">
      <div className="card" style={{ maxWidth: "350px", maxHeight: "150px", padding: "0" }}>
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src="src/assets/images/sectionsImages/Rectangle 50.png"
              alt="White shirt"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-8">
            <div className="card-body" style={{ padding: "10px" }}>
              <h5 className="card-title" style={{ fontSize: "16px", marginBottom: "8px" }}>
                White shirt
              </h5>
              <p className="card-text" style={{ fontSize: "12px", marginBottom: "8px" }}>
                <span className="text-red-600">Fashion</span>{" "}
                <span className="text-gray-600">| Nov 17, 2024</span>
              </p>
              <p
                className="card-text"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#808080",
                  marginBottom: "8px",
                }}
              >
                {"★".repeat(0) + "☆".repeat(5)}
              </p>
              <p className="card-text fw-bold text-dark" style={{ fontSize: "16px" }}>
                $500.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>


    
  );
};

export default ProductPage;