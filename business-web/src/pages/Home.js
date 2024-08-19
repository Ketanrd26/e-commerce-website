import React, { useEffect, useState } from "react";
import "../stytles/home.scss";
import CardComponent from "../comps/CardComponent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from "axios";

const Home = (props) => {

  const [product, setProduct] = useState([])

  const data = async () => {
    try {
      const response = await axios.post("http://localhost:4000/products");
      setProduct(response.data.productList)
      console.log(response, "<<<<<<<<<<<<<<")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    data();
  }, [])

  return (
    <>
      <div
        className={
          props.darkMode
            ? "home-parent background-toggle"
            : "home-parent"
        }
      >
        <div className="home-cont">
          <div
            className={
              props.darkMode
                ? "home-left background-toggle"
                : "home-left"
            }
          ></div>
          <div className="home-right">
            <div className="tag">
              <h3>FIND CLOTHES THAT MATCH YOUR STYLE</h3>
            </div>
            <div className="content">
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>

              <div className="button">
                <button
                  className="btn"
                  style={{ backgroundColor: props.darkMode ? "#000" : "#fff" }}
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div className="counters">
              <div className="first counter-sec">
                <div className="counter-value">
                  <h3>200</h3> <span>+</span>
                </div>
                <p>International brands</p>
              </div>
              <div className="second counter-sec">
                <div className="counter-value">
                  <h3>2000</h3> <span>+</span>
                </div>
                <p>High-Quality Products</p>
              </div>
              <div className="third counter-sec">
                <div className="counter-value">
                  <h3>30000</h3> <span>+</span>
                </div>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-parent parent">
        <div className="brand-cont cont">
          <div
            className={
              props.darkMode
                ? "brand bg-img-cover vector-black"
                : "brand bg-img-cover"
            }
          ></div>
          <div className="brand brand-zara bg-img-cover"></div>
          <div className="brand brand-gucci bg-img-cover"></div>
          <div className="brand brand-prada bg-img-cover"></div>
          <div className="brand brand-calvin bg-img-cover"></div>
        </div>
      </div>
      <div className="card-product parent">
        <div className="card-cont cont">
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            slidesPerView={4}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {product.map((item, index) => (
              <SwiperSlide className="slide" key={index}>
                <CardComponent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
