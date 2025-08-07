import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import Footer from '../Components/Footer';
function AllProducts() {
  const [category, setCategory] = useState("mens-shirts")
  const [product, setProduct] = useState([])
  useEffect(() => {
    document.title = "Products | Snap-Shop"
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/category/" + category);
        console.log(response.data.products);
        setProduct(response.data.products)
        console.log(product)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [category]);
  return (
    <div style={{ maxWidth: "99%" }}>
      <div className='mb-5' style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={() => setCategory("mens-shirts")}
          type="button"
          className="mx-3 btn btn-outline-success"
        >
          Men's Shirts
        </button>
        <button
          onClick={() => setCategory("womens-dresses")}
          type="button"
          className="mx-3 btn btn-outline-success"
        >
          Women's Dress
        </button>
        <button
          onClick={() => setCategory("mens-shoes")}
          type="button"
          className="mx-3 btn btn-outline-success"
        >
          Men's Shoe
        </button>
        <button
          onClick={() => setCategory("womens-shoes")}
          type="button"
          className="mx-3 btn btn-outline-success"
        >
          Women's Shoes
        </button>
        <button
          onClick={() => setCategory("mens-watches")}
          type="button"
          className="mx-3 btn btn-outline-success"
        >
          Men's Watches
        </button>
        <button
          onClick={() => setCategory("womens-watches")}
          type="button"
          className="mx-3 btn btn-outline-success"
        >
          Women's Watches
        </button>
        <button
          onClick={() => setCategory("fragrances")}
          type="button"
          className="mx-3 btn btn-outline-success"
        >
          Fragnences
        </button>
      </div>
      <div className="row text-center ms-5">
        {product.map((p) => (
          <div className="col-md-3 mb-4 " key={p.id}>
            <div className="card hover bg-info bg-opacity-25  yo" style={{ width: "18rem", display: "flex", }}>
              <img src={p.thumbnail} className="card-img-top " alt="..." />
              <div className="card-body cardA">
                <h5 className="card-title">{p.title}</h5>
                <div className="d-flex gap-5">
                  <p className="mt-1">
                    Price: ${p.price}
                  </p><Link to={`details/${p.id}`}><button className="btn btn-info mb-5">View More</button></Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
      <div className="text-center">
        <Footer />
      </div>
    </div>
  )
}

export default AllProducts