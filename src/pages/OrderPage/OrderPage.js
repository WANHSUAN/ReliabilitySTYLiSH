import { useState, useEffect } from 'react';
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
  const [selectedStatus, setSelectedStatus] = useState('0');
  const [editMode, setEditMode] = useState(false);
  const [page, setPage] = useState(1);

  // const [saveStatus, setSaveStatus] = useState('請先點擊 Edit 按鈕');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          `https://www.saiko.world/api/1.0/admin/newestOrder/allOrder?paging=${page}`,
          `https://www.saiko.world/api/1.0/admin/newestOrder/establishedOrder?paging=${page}`,
          `https://www.saiko.world/api/1.0/admin/newestOrder/pickUpGoods?paging=${page}`,
          `https://www.saiko.world/api/1.0/admin/newestOrder/delivery?paging=${page}`,
          `https://www.saiko.world/api/1.0/admin/newestOrder/deliverComplete?paging=${page}`,
          `https://www.saiko.world/api/1.0/admin/newestOrder/completedOrder?paging=${page}`,
        ];

        const currentUrl = urls[selectedStatus];
        const res = await fetch(currentUrl);
        const result = await res.json();
        const newData = result.data;

        switch (selectedStatus) {
          case '0':
            setAllOrders(newData);
            break;
          case '1':
            setEstablishedOrder(newData);
            break;
          case '2':
            setPickUpGoods(newData);
            break;
          case '3':
            setDelivery(newData);
            break;
          case '4':
            setDeliverComplete(newData);
            break;
          case '5':
            setCompletedOrder(newData);
            break;
          default:
            console.error(`Invalid selectedStatus: ${selectedStatus}`);
            break;
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page, selectedStatus]);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handleChange(e) {
    setSelectedStatus(e.target.value);
  }

  function renderSelectedComponent() {
    switch (selectedStatus) {
      case '0':
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
                      <StockTableItem>
                        <Checkbox disabled={!editMode} key={index} />
                      </StockTableItem>
                    </StockTableItemGroup>
                  ))
                ) : (
                  <div>loading</div>
                )}
              </StockTableSection>
            </OrderSection>
          </AllOrder>
        );
      case '1':
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
                        <Checkbox disabled={!editMode} key={index} />
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
      case '2':
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
      case '3':
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
      case '4':
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
      case '5':
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
                    <StockTableItem>
                      <Checkbox disabled={!editMode} key={index} />
                    </StockTableItem>
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
  function handleSaveClick() {
    //   // TODO
    //   fetch('', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ saveStatus }),
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('API Error');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
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
            <StockOption value="0">訂單總覽</StockOption>
            <StockOption value="1">訂單已成立</StockOption>
            <StockOption value="2">揀貨中</StockOption>
            <StockOption value="3">出貨中</StockOption>
            <StockOption value="4">已送達</StockOption>
            <StockOption value="5">訂單已完成</StockOption>
          </StockStatus>
          <StockListEdit onClick={handleEditClick}>Edit</StockListEdit>
          <StockListSave onClick={handleSaveClick}>Save</StockListSave>
          <StockListSave onClick={handleNextPage}>Next</StockListSave>
        </StockStatusSection>
        {renderSelectedComponent()}
      </Container>
    </Wrapper>
  );
}

export default Order;
