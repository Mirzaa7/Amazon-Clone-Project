import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("submitDate", "desc")
        .onSnapshot((snapshot) => {
          return setOrders(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
              };
            })
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <h1>You don't have any orders currently.</h1>
      ) : (
        <h1>Your Orders</h1>
      )}
      <div className="orders-element">
        {orders?.map((order, index) => (
          <Order key={index} order={order}></Order>
        ))}
      </div>
    </div>
  );
}

export default Orders;
