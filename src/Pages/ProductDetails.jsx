import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { CartsContext } from "./store/CartsContext";
import styles from '../Components/CardSlider.module.css';
import { EffectCube, Pagination } from 'swiper/modules';
function ProductDetails() {
  const { addCartHandler } = useContext(CartsContext)
  const [product, setProduct] = useState({});
  const [review, setReview] = useState([]);
  const [image, setImage] = useState([])



  const { id } = useParams();
  useEffect(() => {
    const fecthData = async () => {
      try {
        const respose = await axios.get(`https://dummyjson.com/products/${id}`);
        setImage(respose.data.images)
        setProduct(respose.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, []);

  console.log(product);
  console.log(product.images);
  useEffect(() => {
    switch (Math.floor(product.rating)) {
      case 1:
        setReview([<FaStar />, <FaStarHalf />]);
        break;
      case 2:
        setReview([<FaStar />, <FaStar />, <FaStarHalf />]);
        break;
      case 3:
        setReview([<FaStar />, <FaStar />, <FaStar />, <FaStarHalf />]);
        break;
      case 4:
        setReview([<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalf />,]);
        break;

      default:
        setReview([<FaStarHalf />]);
        break;
    }
  }, [product.rating]);
  return (
    <>
      <div style={{ maxWidth: "99%" }}>
        {
          <div class="container text-center">
            <div class="row">
              <div
                class="col-md-6 "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  height: "38rem",
                }}
              >
                <div className={styles.cardSliderWrapper}>
                  <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                      shadow: true,
                      slideShadows: true,
                      shadowOffset: 20,
                      shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className={styles.customSwiper}
                  >
                    {
                      image.map((image) => (
                        <SwiperSlide>
                          <img src={image} />
                        </SwiperSlide>
                      ))
                    }


                  </Swiper>

                </div>
                
              </div>
              <div class="col-md-6">
                <div className="border border-info p-4 bg-dark text-light">
                  <h1>{product.title}</h1>
                  <h5 style={{ display: "inline-block " }}>
                    Reviews :{" "}
                    <span class="badge text-bg-success me-5">
                      {Math.floor(product.rating) + 0.5}
                    </span>
                  </h5>
                  <h5 style={{ display: "inline-block", color: "gold" }}>
                    {review}
                  </h5>
                  <p
                    className="navbar-brand ms-5"
                    style={{ display: "inline-block" }}
                  >
                    Snap<span className="text-info fw-semibold">Shop</span>{" "}
                    <span className="text-success fw-semibold">Assured</span>
                  </p>
                  <br></br>
                  <br></br>
                  <p className="text-success fw-semibold">Special Price</p>
                  <h5 className="text-light">
                    ${" "}
                    <span style={{ textDecoration: "line-through" }}>
                      {product.price}
                      <br></br>
                    </span>
                  </h5>
                  <h1 className="text-info">
                    $ <span>{Math.floor(product.price - 5) - 0.01} /-</span>
                  </h1>
                  <br></br>
                  <div className="mb-3">
                    <button type="button" class="btn btn-outline-info me-5">
                      <span className="text-light ">
                        <AiTwotoneThunderbolt />
                      </span>
                      Buy Now
                    </button>
                    <Link onClick={() => addCartHandler(product)} to={"/carts"} type="button" class="btn btn-outline-success ">
                      <span className="text-light ">
                        <FaCartShopping />
                      </span>
                      Add To Cart
                    </Link>
                  </div>
                  <div className="w-75 mx-auto ">
                    <h4 className="text-info">Description</h4>
                    <p>{product.description}</p>
                  </div>
                  <div
                    className="d-flex "
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10%",
                    }}
                  >
                    <p className="text-light">
                      <span className="text-info">Status: </span>{" "}
                      {product.availabilityStatus}
                    </p>
                    <p className="text-info">
                      Stock: <span className="text-light">{product.stock}</span>
                    </p>
                  </div>

                  <p>
                    {" "}
                    {product.shippingInformation} <FaShippingFast />{" "}
                  </p>

                  <div
                    className="d-flex "
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10%",
                    }}
                  >
                    <p>
                      {" "}
                      <h5 className="text-info">Warranty:</h5>{" "}
                      {product.warrantyInformation}
                    </p>
                    <p>
                      {" "}
                      <h5 className="text-info">Return Policy:</h5>{" "}
                      {product.returnPolicy}
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex d-block gap-2" style={{ height: "100px", width: "100px", marginTop:"-120px", marginLeft:"105px"}}>
                  {
                    image.map((image) => (
                      <img src={image} className="border border-4 border-info border-opacity-25"/>
                    ))
                  }
                </div>
            </div>
          </div>
        }
      </div>
      <div className="text-center">
        <Footer />
      </div>
    </>
  );
}

export default ProductDetails;
