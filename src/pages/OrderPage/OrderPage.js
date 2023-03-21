import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components/macro';
import SideMenu from '../../components/SideMenu';
import Banner from '../../components/Banner';
import BannerImg from '../OrderPage/order.png';
import OrderTitle from './OrderTitle';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 70%;
  min-height: calc(100vh - 115px);
  margin: 0 auto 100px;
`;

const StockStatusSection = styled.div`
  text-align: right;
  margin-top: 50px;
`;

const StockStatus = styled.select`
  border: 1px solid #f6c43e;
  width: 130px;
  height: 32px;
  border-radius: 8px;
  background-color: #faf8e9;
  text-align: center;
  margin-top: 30px;
`;

const StockListEdit = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid #faf8e9;
  border-radius: 5px;
  background-color: #f5d990;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9bb15;
    color: #fff;
  }
`;

const StockListSave = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid #faf8e9;
  border-radius: 5px;
  background-color: #f5d990;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9bb15;
    color: #fff;
  }
`;

const StockListNextPage = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid #faf8e9;
  border-radius: 5px;
  background-color: #f5d990;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9bb15;
    color: #fff;
  }
`;

const StockOption = styled.option``;

const AllOrder = styled.div`
  padding: 10px 0 40px 0;
`;

const EstablishedOrder = styled.div`
  padding: 10px 0 40px 0;
`;

const PickUpGoods = styled.div`
  padding: 10px 0 40px 0;
`;

const Delivery = styled.div`
  padding: 10px 0 40px 0;
`;

const DeliverComplete = styled.div`
  padding: 10px 0 40px 0;
`;

const CompleteOrder = styled.div`
  padding: 10px 0 40px 0;
`;

const OrderStatus = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 50px 0 20px 0;
  padding: 25px 0;
  color: #d46304;
`;

const OrderSection = styled.div`
  box-shadow: 1px 1px 5px #c2c4c3;
`;

const StockTableSection = styled.div`
  ul:nth-child(even) {
    background-color: #fcf6e7;
  }
`;

const StockTableItemGroup = styled.ul`
  display: flex;
  font-size: 10px;
  padding: 20px 0;
  text-align: center;
  align-items: center;
  border-radius: 3px;
`;

const StockTableItem = styled.li`
  width: 300px;
  line-height: 20px;
`;

const StockTableItemDetail = styled.div`
  text-align: start;
  padding-left: 10px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;

  width: 17px;
  height: 17px;

  border: 1px solid #f6c43e;
  border-radius: 4px;
  background-color: #fff;
  transition: all 150ms;

  &:checked {
    background-color: #f3cc68;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 5px;
      height: 5px;
      background-color: #fff;
      border-radius: 2px;
    }
  }
`;

function Order() {
  const [allOrders, setAllOrders] = useState([]);
  const [establishedOrder, setEstablishedOrder] = useState([]);
  const [pickUpGoods, setPickUpGoods] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [deliverComplete, setDeliverComplete] = useState([]);
  const [completedOrder, setCompletedOrder] = useState([]);
  const [selectedKey, setSelectedKey] = useState('allOrder');
  const [expectedStatus, setExpectedStatus] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [page, setPage] = useState(1);
  const [saveStatus, setSaveStatus] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [id, setId] = useState(0);
  const [orderId, setOrderId] = useState('');
  const [data, setData] = useState({});

  // console.log(id, orderId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = {
          allOrder: `https://www.saiko.world/api/1.0/admin/newestOrder/allOrder?paging=${page}`,
          establishedOrder: `https://www.saiko.world/api/1.0/admin/newestOrder/establishedOrder?paging=${page}`,
          pickUpGoods: `https://www.saiko.world/api/1.0/admin/newestOrder/pickUpGoods?paging=${page}`,
          delivery: `https://www.saiko.world/api/1.0/admin/newestOrder/delivery?paging=${page}`,
          deliverComplete: `https://www.saiko.world/api/1.0/admin/newestOrder/deliverComplete?paging=${page}`,
          completedOrder: `https://www.saiko.world/api/1.0/admin/newestOrder/completedOrder?paging=${page}`,
        };
        const res = await fetch(urls[selectedKey]);
        const result = await res.json();
        const newData = result.data;

        switch (selectedKey) {
          case 'allOrder':
            setAllOrders(newData);
            setExpectedStatus('establishedOrder');
            break;
          case 'establishedOrder':
            setEstablishedOrder(newData);
            setExpectedStatus('pickUpGoods');
            break;
          case 'pickUpGoods':
            setPickUpGoods(newData);
            setExpectedStatus('delivery');
            break;
          case 'delivery':
            setDelivery(newData);
            setExpectedStatus('deliverComplete');
            break;
          case 'deliverComplete':
            setDeliverComplete(newData);
            setExpectedStatus('completedOrder');
            break;
          case 'completedOrder':
            setCompletedOrder(newData);
            setExpectedStatus('');
            break;
          default:
            console.error(`Invalid selectedStatus: ${selectedKey}`);
            break;
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page, selectedKey]);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handleChange(e) {
    setSelectedKey(e.target.value);
  }

  function renderSelectedComponent() {
    switch (selectedKey) {
      case 'allOrder':
        return (
          <AllOrder>
            <OrderStatus>訂單總覽</OrderStatus>
            <OrderSection>
              <OrderTitle />
              <StockTableSection>
                {allOrders.length !== 0 ? (
                  allOrders.map((order, index) => (
                    <StockTableItemGroup key={index}>
                      <StockTableItem>{order.order_id}</StockTableItem>
                      <StockTableItem>{order.recipient.name}</StockTableItem>
                      <StockTableItem>
                        {order.recipient.phone}
                        <br />
                        {order.recipient.address}
                      </StockTableItem>
                      <StockTableItem>{order.recipient.email}</StockTableItem>
                      <StockTableItem>
                        {order.details.list.map((item, index) => (
                          <StockTableItemDetail key={index}>
                            {`${index + 1}. ${item.name} / ${item.size} / ${
                              item.qty
                            }`}
                          </StockTableItemDetail>
                        ))}
                      </StockTableItem>
                      <StockTableItem>NT$ {order.total}</StockTableItem>
                      <StockTableItem>{order.status}</StockTableItem>
                    </StockTableItemGroup>
                  ))
                ) : (
                  <div>loading</div>
                )}
              </StockTableSection>
            </OrderSection>
          </AllOrder>
        );
      case 'establishedOrder':
        return (
          <EstablishedOrder>
            <OrderStatus>訂單已成立</OrderStatus>
            <OrderSection>
              <OrderTitle />
              <StockTableSection>
                {establishedOrder.length !== 0 ? (
                  establishedOrder.map((order, index) => (
                    <StockTableItemGroup key={index}>
                      <StockTableItem>{order.order_id}</StockTableItem>
                      <StockTableItem>{order.recipient.name}</StockTableItem>
                      <StockTableItem>
                        {order.recipient.phone}
                        <br />
                        {order.recipient.address}
                      </StockTableItem>
                      <StockTableItem>{order.recipient.email}</StockTableItem>
                      <StockTableItem>
                        {order.details.list.map((item, index) => (
                          <StockTableItemDetail key={index}>
                            {`${index + 1}. ${item.name} / ${item.size} / ${
                              item.qty
                            }`}
                          </StockTableItemDetail>
                        ))}
                      </StockTableItem>
                      <StockTableItem>NT$ {order.total}</StockTableItem>
                      <StockTableItem>
                        <Checkbox
                          disabled={!editMode}
                          key={index}
                          isChecked={isChecked}
                          onClick={(e) => handleCheckStatus(e, order.id)}
                        />
                      </StockTableItem>
                    </StockTableItemGroup>
                  ))
                ) : (
                  <div>loading</div>
                )}
              </StockTableSection>
            </OrderSection>
          </EstablishedOrder>
        );
      case 'pickUpGoods':
        return (
          <PickUpGoods>
            <OrderStatus>揀貨中</OrderStatus>
            <OrderSection>
              <OrderTitle />
              <StockTableSection>
                {pickUpGoods.map((order, index) => (
                  <StockTableItemGroup key={index}>
                    <StockTableItem>{order.order_id}</StockTableItem>
                    <StockTableItem>{order.recipient.name}</StockTableItem>
                    <StockTableItem>
                      {order.recipient.phone}
                      <br />
                      {order.recipient.address}
                    </StockTableItem>
                    <StockTableItem>{order.recipient.email}</StockTableItem>
                    <StockTableItem>
                      {order.details.list.map((item, index) => (
                        <StockTableItemDetail key={index}>
                          {`${index + 1}. ${item.name} / ${item.size} / ${
                            item.qty
                          }`}
                        </StockTableItemDetail>
                      ))}
                    </StockTableItem>
                    <StockTableItem>NT$ {order.total}</StockTableItem>
                    <StockTableItem>
                      <Checkbox disabled={!editMode} key={index} />
                    </StockTableItem>
                  </StockTableItemGroup>
                ))}
              </StockTableSection>
            </OrderSection>
          </PickUpGoods>
        );
      case 'delivery':
        return (
          <Delivery>
            <OrderStatus>出貨中</OrderStatus>
            <OrderSection>
              <OrderTitle />
              <StockTableSection>
                {delivery.map((order, index) => (
                  <StockTableItemGroup key={index}>
                    <StockTableItem>{order.order_id}</StockTableItem>
                    <StockTableItem>{order.recipient.name}</StockTableItem>
                    <StockTableItem>
                      {order.recipient.phone}
                      <br />
                      {order.recipient.address}
                    </StockTableItem>
                    <StockTableItem>{order.recipient.email}</StockTableItem>
                    <StockTableItem>
                      {order.details.list.map((item, index) => (
                        <StockTableItemDetail key={index}>
                          {`${index + 1}. ${item.name} / ${item.size} / ${
                            item.qty
                          }`}
                        </StockTableItemDetail>
                      ))}
                    </StockTableItem>
                    <StockTableItem>NT$ {order.total}</StockTableItem>
                    <StockTableItem>
                      <Checkbox disabled={!editMode} key={index} />
                    </StockTableItem>
                  </StockTableItemGroup>
                ))}
              </StockTableSection>
            </OrderSection>
          </Delivery>
        );
      case 'deliverComplete':
        return (
          <DeliverComplete>
            <OrderStatus>已送達</OrderStatus>
            <OrderSection>
              <OrderTitle />
              <StockTableSection>
                {deliverComplete.map((order, index) => (
                  <StockTableItemGroup key={index}>
                    <StockTableItem>{order.order_id}</StockTableItem>
                    <StockTableItem>{order.recipient.name}</StockTableItem>
                    <StockTableItem>
                      {order.recipient.phone}
                      <br />
                      {order.recipient.address}
                    </StockTableItem>
                    <StockTableItem>{order.recipient.email}</StockTableItem>
                    <StockTableItem>
                      {order.details.list.map((item, index) => (
                        <StockTableItemDetail key={index}>
                          {`${index + 1}. ${item.name} / ${item.size} / ${
                            item.qty
                          }`}
                        </StockTableItemDetail>
                      ))}
                    </StockTableItem>
                    <StockTableItem>NT$ {order.total}</StockTableItem>
                    <StockTableItem>
                      <Checkbox disabled={!editMode} key={index} />
                    </StockTableItem>
                  </StockTableItemGroup>
                ))}
              </StockTableSection>
            </OrderSection>
          </DeliverComplete>
        );
      case 'completedOrder':
        return (
          <CompleteOrder>
            <OrderStatus>訂單已完成</OrderStatus>
            <OrderSection>
              <OrderTitle />
              <StockTableSection>
                {completedOrder.map((order, index) => (
                  <StockTableItemGroup key={index}>
                    <StockTableItem>{order.order_id}</StockTableItem>
                    <StockTableItem>{order.recipient.name}</StockTableItem>
                    <StockTableItem>
                      {order.recipient.phone}
                      <br />
                      {order.recipient.address}
                    </StockTableItem>
                    <StockTableItem>{order.recipient.email}</StockTableItem>
                    <StockTableItem>
                      {order.details.list.map((item, index) => (
                        <StockTableItemDetail key={index}>
                          {`${index + 1}. ${item.name} / ${item.size} / ${
                            item.qty
                          }`}
                        </StockTableItemDetail>
                      ))}
                    </StockTableItem>
                    <StockTableItem>NT$ {order.total}</StockTableItem>
                    <StockTableItem>訂單已完成</StockTableItem>
                  </StockTableItemGroup>
                ))}
              </StockTableSection>
            </OrderSection>
          </CompleteOrder>
        );
      default:
        return;
    }
  }

  function handleEditClick() {
    setEditMode(true);
  }

  function handleCheckStatus(e, data_id) {
    console.log(data_id);
    const isChecked = e.target.checked;

    console.log(isChecked);
    setIsChecked(isChecked);
    if (isChecked === true) {
      establishedOrder.forEach((order) => {
        if (order.id === id) {
          console.log('success!!!');
        } else {
          console.log('fail!!!');
        }
      });
    }
    setData({
      ...data,
      expectedStatus: expectedStatus,
      orders: [
        {
          id: data_id,
          order_id: orderId,
          status: selectedKey,
        },
      ],
    });
  }
  function handleSaveClick() {
    fetch('https://www.saiko.world/api/1.0/admin/updateOrdersStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <Wrapper>
      <SideMenu />
      <Container>
        <Banner
          backgroundColor={`#f5eef8`}
          title={'Sharon'}
          message={'準備好管理您的訂單了嗎？'}
          stock={BannerImg}
        />
        <StockStatusSection>
          <StockStatus onChange={handleChange}>
            <StockOption value="allOrder">訂單總覽</StockOption>
            <StockOption value="establishedOrder">訂單已成立</StockOption>
            <StockOption value="pickUpGoods">揀貨中</StockOption>
            <StockOption value="delivery">出貨中</StockOption>
            <StockOption value="deliverComplete">已送達</StockOption>
            <StockOption value="completedOrder">訂單已完成</StockOption>
          </StockStatus>
          <StockListEdit onClick={handleEditClick}>Edit</StockListEdit>
          <StockListSave onClick={handleSaveClick}>Save</StockListSave>
          <StockListNextPage onClick={(e) => handleNextPage(e)}>
            Next
          </StockListNextPage>
        </StockStatusSection>
        {renderSelectedComponent()}
      </Container>
    </Wrapper>
  );
}

export default Order;
