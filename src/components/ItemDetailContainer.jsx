import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { allProducts } from "./data.js";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});
  useEffect(() => {
    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(allProducts.find((item) => item.id == iditem));
      }, 2000);
    });
    productoPromise.then((res) => {
      if (iditem) {
        setProducto(res);
      }
    });
  }, [iditem]);

  return (
    <div>
      {producto.id ? (
        <>
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                "& > :not(style)": {
                  m: 1,
                  p: 2,
                },
              }}
              key={producto.id}
            >
              <Paper elevation={3}>
                <div className="item">
                  <div className="imgContainer">
                    <div className="backImg">
                      <img
                        src={
                          producto.img ||
                          "https://commons.wikimedia.org/wiki/File:No-Image-Placeholder.svg"
                        }
                        alt={producto.name}
                      />
                    </div>
                  </div>
                  <div className="cardContent">
                    <h2>{producto.name}</h2>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <h3>Marca</h3>
                          </td>
                          <td>{producto.brand}</td>
                        </tr>
                        <tr>
                          <td>
                            <h3>Categoria</h3>
                          </td>
                          <td>{producto.category}</td>
                        </tr>
                        <tr>
                          <td>
                            <h3>Socket</h3>
                          </td>
                          <td>{producto.socket}</td>
                        </tr>
                        <tr>
                          <td>
                            <h3>Precio</h3>
                          </td>
                          <td>{producto.price0}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Paper>
            </Box>
          </>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default ItemDetailContainer;
