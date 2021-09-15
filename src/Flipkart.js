import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function FlipkartData(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let products = await axios.get("http://localhost:4000/flip");
        setList([...products.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props]);
  return (
    <>
      <div className="container-fluid">
        <div className="heading">
          <h3 className="amazonheading" style={{ textAlign: "center" }}>
            iPhone Prices in Flipkart !
          </h3>
        </div>

        <div className="row">
          <div className="productList">
          {list.map((obj) => {
            return (
              <div className="products" id="productDisplay">
                <div className="row">
                  <div className="card-decks">
                    <div className="card">
                      <img
                        className="card-img-top-flipkart"
                        src={obj.srcs}
                        alt={obj.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{obj.name}</h5>
                        <div className="pricing">
                          <span>Price:</span>
                          <strong>{obj.price}/-</strong>
                        </div>
                        <div className="rating">
                          <span>Ratings:</span>
                          <strong>{obj.ratings}</strong>
                        </div>
                        <div className="offers">
                          <span>Offers:</span>
                          <strong>{obj.offers}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipkartData;
