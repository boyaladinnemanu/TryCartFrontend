import React from 'react';
import styled from 'styled-components';

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px;
  padding: 40px 10px 0px 40px;
`;

const OrderCard = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  width: 90%;
  padding: 16px 24px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
  
  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 80px;
  object-fit: content;
  border-radius: 8px;
  background: #f3f4f6;
`;

const Info = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Label = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

const Value = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Ordersh1 = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: #000000;
  text-align: center;
`;

const Status = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) =>
    props.status === 'Delivered' ? 'green' :
    props.status === 'Pending' ? 'yellow' : 'gray'};
`;

const NoOrdersMessage = styled.p`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
  text-align: center;
  height:50vh;
  font-size: 20px;
  color: #6b7280;
`;

const Orderslist = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <NoOrdersMessage><p>No orders available</p></NoOrdersMessage>;
  }

  return (
    <>
      <Ordersh1>My Orders</Ordersh1>
      <OrdersContainer>
        {orders.map((order) =>
          order.orderItems.map((item, idx) => (
            <OrderCard key={`${order._id}_${idx}`}>
              <ItemImage src={item.imageUrls[0]} alt={item.title} />
              <Info>
                <InfoBlock width="100px">
                  <Label>Order Date</Label>
                  <Value>{new Date(order.placedAt).toLocaleDateString()}</Value>
                </InfoBlock>

                <InfoBlock width="250px">
                  <Label>Product Name</Label>
                  <Value>{item.title}</Value>
                </InfoBlock>

                <InfoBlock width="350px">
                  <Label>Address</Label>
                  <Value>{order.address}</Value>
                </InfoBlock>

                <InfoBlock width="120px">
                  <Label>Delivery Date</Label>
                  <Value>{order.deliverydate || 'Not Available'}</Value>
                </InfoBlock>

                <InfoBlock width="100px">
                  <Label>Total Price</Label>
                  <Value>₹{order.totalAmount}</Value>
                </InfoBlock>

                <InfoBlock width="100px">
                  <Label>Payment Type</Label>
                  <Value>{order.paymentMethod}</Value>
                </InfoBlock>

                <InfoBlock width="100px">
                  <Label>Status</Label>
                  <Status status={order.orderStatus}>{order.orderStatus}</Status>
                </InfoBlock>
              </Info>
            </OrderCard>
          ))
        )}
      </OrdersContainer>
    </>
  );
};

export default Orderslist;
