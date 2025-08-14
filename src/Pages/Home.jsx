import { useEffect, useState } from "react";
import Sliderr from "../Components/Slider";
import axios from "axios";
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";
import "./Home.css"
import { MdOutlineSwipeDown } from "react-icons/md";
export default function Home() {

  const [product, setProduct] = useState([])
  const [productw, setProductw] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    document.title = "Home | Snap-Shop";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/category/mens-shirts");
        console.log(response.data.products);
        setProduct(response.data.products)
        console.log(product)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/category/womens-dresses");
        console.log(response.data.products);
        setProductw(response.data.products)
        console.log(product)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/category/sunglasses");
        console.log(response.data.products);
        setProducts(response.data.products)
        console.log(product)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container text-center">
      <div className="row  ">
        <div className="col-md-6 mt-5" >
          <h1 style={{ marginTop: "80px" }}>Welcome To Snap-Shop</h1>
          <p>
            Welcome to SnapShop - Your One-Stop Fashion Destination!
            Discover the trendiest collection of men's & women's clothing, stylish sunglasses, and handpicked accessories.
            Unbox fashion, redefine your style, and shop the latest must-haves — all in one click!
          </p>
          <button className="btn btn-info mb-5">Explore More</button>
        </div>
        <div className="col-md-6 bg-info bg-opacity-25 text-light rounded-4 px-5 pb-2 pt-3">
          <Sliderr />
          <h6 className="mt-3 text-dark">Slide into style  <span style={{color:"#8d5524"}}><MdOutlineSwipeDown /></span></h6>
        </div>
      </div>


      <div className="container  py-5">


        <h1 className="mb-4 ">Featured Products Men's</h1>
        <div className="row">
          {product.slice(0, 4).map((p) => (
            <div className="col-md-3 mb-4 " key={p.id}>
              <div className="card hover bg-info bg-opacity-25  keyCard" style={{ width: "18rem", display: "flex", }}>
                <img src={p.thumbnail} className="card-img-top " alt="..." />
                <div className="card-body cardA">
                  <h5 className="card-title">{p.title.slice(0, 16)}...</h5>
                  <div className="d-flex gap-5">
                    <p className="mt-1">
                      Price: ${p.price}
                    </p>
                    <Link to={`details/${p.id}`}><button className="btn btn-info mb-5">View More</button></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>


        <h1 className="mb-5 mt-5  mx-auto w-50">Featured Products Women's</h1>
        <div className="row">
          {productw.slice(0, 4).map((p) => (
            <div className="col-md-3 mb-4 " key={p.id}>
              <div className="card bg-info hover bg-opacity-25  " style={{ width: "18rem", display: "flex", }}>
                <img src={p.thumbnail} className="card-img-top " alt="..." />
                <div className="card-body cardA">
                  <h5 className="card-title">{p.title.slice(0, 16)}...</h5>
                  <div className="d-flex gap-5">
                    <p className="mt-1">
                      Price: ${p.price}
                    </p>
                    <Link to={`details/${p.id}`}><button className="btn btn-info mb-5">View More</button></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        <h1 className="mb-5 mt-5">Featured Products SunGlass's</h1>
        <div className="row">
          {products.slice(0, 4).map((p) => (
            <div className="col-md-3 mb-4 " key={p.id}>
              <div className="card bg-info hover bg-opacity-25  " style={{ width: "18rem", display: "flex", }}>
                <img src={p.thumbnail} className="card-img-top " alt="..." />
                <div className="card-body cardA">
                  <h5 className="card-title">{p.title.slice(0, 16)}...</h5>
                  <div className="d-flex gap-5">
                    <p className="mt-1">
                      Price: ${p.price}
                    </p>
                    <Link to={`details/${p.id}`}><button className="btn btn-info mb-5">View More</button></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </div>
  );
}
