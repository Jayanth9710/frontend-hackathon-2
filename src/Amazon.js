import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function AmazonData(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let products = await axios.get("http://localhost:4000/amzn");
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
            iPhone Prices in Amazon !
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
                        className="card-img-top"
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
                          <strong>{obj.rating}</strong>
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

export default AmazonData;