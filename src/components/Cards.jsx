import React from "react";
import Products from "../products/Products";
import CategoryProd from "../products/CategoryProd";
const Cards = () => {
  return (
    <>
    
      <section className="container mt-5">
        <nav className="card-container">
          <ul className="nav justify-content-between">
            <li className="nav-item">
              <span
                className="nav-link text-dark dm-family"
                style={{ fontSize: "2em" }}
              >
                Popular Products
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">
                See All Products
              </a>
            </li>
          </ul>
        </nav>

        <div className="row">
          {Products.map((prod, id) => (
            <div className="col-lg-3 mb-3" >
              <div className="card" style={{ width: "100%" }}>
                <>
                  <img src={prod.imgUrl} className="card-img-top" alt="..." style={{height: '200px'}} />
                  <div className="card-body">
                    <p className="card-text">{prod.text}</p>
                    <h6>STARTING AT</h6>
                    <span className="fs-3 fw-bold">{prod.price}</span> {' '}
                    <span>{prod.per}</span>
                    <div  className="">

                    <button className="btn btn-danger  text-truncate col-12" >Browse {prod.text}</button>
                    </div>
                  </div>
                </>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-5">
        <nav className="card-container">
          <ul className="nav justify-content-between">
            <li className="nav-item">
              <span
                className="nav-link text-dark dm-family"
                style={{ fontSize: "2em" }}
              >
                Popular Products
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">
                See All Categories
              </a>
            </li>
          </ul>
        </nav>

        <div className="row">
          {CategoryProd.map((prod, id) => (
            <div className="col-lg-3 mb-3" >
              <div className="card" style={{ width: "100%" }}>
                <>
                  <img src={prod.imgUrl} className="card-img-top" alt="..." style={{height: '200px'}} />
                  <div className="card-body">
                    <p className="card-text">{prod.text}</p>
                    <h6>STARTING AT</h6>
                    <span className="fs-3 fw-bold">{prod.price}</span> {' '}
                    <span>{prod.per}</span>
          <button className="btn btn-danger  text-truncate col-12" >Browse {prod.text}</button>
                  </div>
                </>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cards;
