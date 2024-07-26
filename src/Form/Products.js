import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
const tabsList = [
  { tabId: "Gold & Silver", displayText: "Gold & Silver" },
  { tabId: "Vegetables", displayText: "Vegetables" },
  { tabId: "Clothes", displayText: "Clothes" },
];
const products = [
  {
    id: uuid(),
    name: "Vaddanam",
    category: "Gold & Silver",
    material: "gold",
    image:
      "https://kameswarijewellers.in/wp-content/uploads/sites/494/2023/05/VD.jpg",
  },
  {
    id: uuid(),
    name: "Ring",
    category: "Gold & Silver",
    material: "gold",
    image:
      "https://t4.ftcdn.net/jpg/00/71/67/87/360_F_71678766_kPinbw5YXRSJrlwwT8SmA90TgjBu64Ng.jpg",
  },
  {
    id: uuid(),
    name: "Bracelet",
    category: "Gold & Silver",
    material: "gold",
    image:
      "https://t4.ftcdn.net/jpg/05/84/41/65/360_F_584416508_eDB9BQA99eNiJg7YOE63WY8tV57jiPI6.jpg",
  },
  {
    id: uuid(),
    name: "Chain",
    category: "Gold & Silver",
    material: "gold",
    image:
      "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/858/1662475105_c51e1a4334b8547cd10f.jpg",
  },

  {
    id: uuid(),
    name: "Silver Plates",
    // price: 18000,
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://m.media-amazon.com/images/I/71lwlyr+L9L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: uuid(),
    name: "Silver Spoons",
    price: 3000,
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://img.freepik.com/premium-photo/stack-antique-silver-spoons-each-with-unique-pattern-design-created-with-generative-ai_762026-3241.jpg",
  },
  {
    id: uuid(),
    name: "Silver Bangles",
    price: 10000,
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1rOW7VRyFWxrxAz79tdyu85nTxR6SXiizg&s",
  },
  {
    id: uuid(),
    name: "Kalasam",
    price: 13500,
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://cdnmedia-breeze.vaibhavjewellers.com/media/catalog/product/image/17405c868/antique-embossed-silver-kalasam-chembu-334va1132-334va1132.jpg",
  },
  {
    id: uuid(),
    name: "Silver pooja Thaali",
    price: 25000,
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://silverstore.in/cdn/shop/files/silver-pooja-thali-set-925-10-size-pack-of-386_1024x1024.png?v=1694682740",
  },
  {
    id: uuid(),
    name: "Silver bowl",
    price: 3500,
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://puresilver.io/cdn/shop/products/80_ab5574fb-24e5-400d-aed9-2941d9bd0340.jpg?v=1612974025",
  },
  {
    id: uuid(),
    name: "Tomato",
    category: "Vegetables",
    image:
      "https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png",
  },
  {
    id: uuid(),
    name: "Potato",
    category: "Vegetables",
    image:
      "https://png.pngtree.com/png-clipart/20220125/original/pngtree-yellow-potatoes-png-image_7220324.png",
  },
  {
    id: uuid(),
    name: "Onion",
    category: "Vegetables",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOGI64o1FGrzuXlumrqom6-X_cc3ECq-Mqw&s",
  },
  {
    id: uuid(),
    name: "Shirts",
    price: 1500,
    category: "Clothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqXOou9bo0QNe9hKpPzu8BF4rAOzvdg5SBg&s",
  },
  {
    id: uuid(),
    name: "T-Shirts",
    price: 500,
    category: "Clothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6CpNu6IVeynQ-mtDoFUJcbtXhuivqaT3Mg&s",
  },
  {
    id: uuid(),
    name: "Jeans",
    price: 2000,
    category: "Clothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvxSsk04ywSJMXcDFFr7FU6HHbhqN2hx8Hw&s",
  },
];

function Products() {
  const [goldRate, setGoldRate] = useState(6815);
  const [silverRate, setSilverRate] = useState(95.6);
  const [itemId, setitemId] = useState(tabsList[0].tabId);
  const [newProducts, setNewProducts] = useState(products);
  const [cartItem, setCartItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState(0);
  const [making, setmaking] = useState(0);
  const [others, setOthers] = useState(0);
  const [grdTotal, setGrdTotal] = useState(0);
  const [details, setDetails] = useState([]);
  const [bill, setBill] = useState({
    bill_no: "",
    date: "",
    cust_name: "",
  });

  const handleFilterChange = (e) => {
    setitemId(e.target.value);
  };

  const onClickImage = (row) => {
    if (!row.price) {
      setIsOpen(!isOpen);
      setDetails((prevDetails) => ({
        ...prevDetails,
        name: row.name,
        image: row.image,
        id: row.id,
        category: row.category,
        material: row.material,
      }));
    } else {
      const isAlreadyInCart = cartItem.some((item) => item.id === row.id);
      if (!isAlreadyInCart) {
        setCartItem([...cartItem, row]);
      }
      // setCartItem([...cartItem, row]);
      // console.log("onClicking image cartItem:", cartItem);
    }
  };

  const toggleClose = () => {
    setIsOpen(!isOpen);
    setWeight(0);
    setmaking(0);
    setOthers(0);
  };

  const handleAdd = () => {
    setIsOpen(!isOpen);
    const productMade = details.material;
    let price = 0;
    if (productMade === "silver") {
      price = silverRate * weight + making + others;
    } else if (productMade === "gold") {
      price = goldRate * weight + making + others;
    } else {
      price = weight * making;
    }
    const newProduct = {
      id: details.id,
      name: details.name,
      image: details.image,
      category: details.category,
      weight: weight,
      making: making,
      others: others,
      price: price,
    };

    setWeight(0);
    setmaking(0);
    setOthers(0);
    // setprice("");
    const isAlreadyInCart = cartItem.some((item) => item.id === newProduct.id);
    if (!isAlreadyInCart) {
      setCartItem([...cartItem, newProduct]);
    }

    // console.log(details);
  };

  const handleCheckOut = () => {};

  useEffect(() => {
    // console.log(details);
    const filtered = products.filter(
      (eachitem) => eachitem.category === itemId
    );
    // console.log(bill);
    if (cartItem.length === 0) {
      setGrdTotal(0);
    } else {
      let amount = 0;
      for (let i = 0; i < cartItem.length; i++) {
        amount = amount + cartItem[i].price;
      }
      setGrdTotal(amount);
    }

    // console.log(details.material);
    setNewProducts(filtered);
    setCartItem(cartItem);

    // console.log("from products", cartItem);

    const handleKeyDown = (event) => {
      if (event.key === "F6") {
        event.preventDefault();

        let newGoldRate = Number(prompt("Enter Gold Price per gram"));
        if (Number.isNaN(newGoldRate) || !newGoldRate) {
          alert("Enter Number");
          newGoldRate = Number(prompt("prompt Enter Number "));
          if (newGoldRate) {
            setGoldRate(newGoldRate);
          }
        } else {
          setGoldRate(newGoldRate);
        }
      }

      if (event.key === "F7") {
        event.preventDefault();

        let newSilverRate = Number(prompt("Enter Silver Price per gram"));
        if (Number.isNaN(newSilverRate) || !newSilverRate) {
          alert("Enter number");
          newSilverRate = Number(prompt("Enter Number"));
          setSilverRate(newSilverRate);
          if (newSilverRate) {
          }
        } else {
          setSilverRate(newSilverRate);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [itemId, cartItem, goldRate, bill]);

  const onDelete = (row) => {
    // console.log("ondeleting item", row);
    const deletedItem = cartItem.filter((each) => each.id !== row.id);
    // console.log(deletedItem);
    setCartItem(deletedItem);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-8  bg-light pt-2 pb-2 ">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start">
            <select
              className="form-select mb-3 mt-3 col-sm-12 col-lg-3  "
              style={{ width: 200 }}
              aria-label="Default select example"
              onChange={handleFilterChange}
              id="select"
            >
              {tabsList.map((tab) => (
                <option value={tab.displayText} key={tab.tabId}>
                  {tab.displayText}
                </option>
              ))}
            </select>

            <div className="d-flex flex-column flex-lg-row  justify-content-evenly ">
              <div className="col-sm-12 col-lg-3 ">
                <label htmlFor="goldPrice">Gold Price (F6)</label>
                <input
                  type="text"
                  id="goldPrice"
                  placeholder="1grm Price"
                  value={goldRate}
                  onChange={(e) => e.target.value}
                />
              </div>
              <div className="col-sm-12 col-lg-3">
                <label htmlFor="silverPrice">Silver Price (F7)</label>
                <input
                  type="text"
                  id="silverPrice"
                  placeholder="1grm Price"
                  value={silverRate}
                  onChange={(e) => e.target.value}
                />
              </div>
            </div>
          </div>

          {/* Products  */}
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start  ">
            {newProducts.map((each) => (
              <li
                className="list-group border rounded bg-white m-1 "
                key={each.id}
                style={{ width: 180 }}
              >
                <button
                  className="bg-transparent border-0"
                  onClick={() => onClickImage(each)}
                >
                  <img
                    className="card-img-top"
                    style={{ width: 150, height: 150 }}
                    src={each.image}
                    alt="Card "
                  />

                  <div className="card-body">
                    <p className="card-text">{each.name}</p>
                  </div>
                </button>

                {/* POPUP  */}
                {isOpen && (
                  <div className="popup">
                    <div className="d-flex flex-column popup-content text-white bg-secondary text-dark  p-1">
                      <div className="d-flex justify-content-center  align-items-center  p-1   ">
                        <h5 className="pt-2">Estimation </h5>
                        {/* <div className="d-flex justify-content-around">
                            <div className="d-flex flex-column ps-2">
                              <label htmlFor="goldPrice">Gold Price (F6)</label>
                              <input
                                type="text"
                                id="goldPrice"
                                style={{ width: 100 }}
                                placeholder="1grm Price"
                                value={goldRate}
                                onChange={(e) => e.target.value}
                              />
                            </div>
                            <div className="d-flex flex-column ">
                              <label htmlFor="silverPrice">
                                Silver Price (F7)
                              </label>
                              <input
                                type="text"
                                id="silverPrice"
                                style={{ width: 100 }}
                                placeholder="1grm Price"
                                value={silverRate}
                                onChange={(e) => e.target.value}
                              />
                            </div>
                          </div> */}

                        <div className="d-flex flex-column ps-3">
                          <label htmlFor="goldPrice">Gold Price (F6)</label>
                          <input
                            type="text"
                            id="goldPrice"
                            style={{ width: 100 }}
                            placeholder="1grm Price"
                            value={goldRate}
                            onChange={(e) => e.target.value}
                          />
                        </div>
                        <div className="d-flex flex-column ps-3">
                          <label htmlFor="silverPrice">Silver Price (F7)</label>
                          <input
                            type="text"
                            id="silverPrice"
                            style={{ width: 100 }}
                            placeholder="1grm Price"
                            value={silverRate}
                            onChange={(e) => e.target.value}
                          />
                        </div>
                        <p
                          style={{ cursor: "pointer" }}
                          className="text-dark d-flex ms-auto"
                        >
                          <i
                            className="fa-solid fa-xmark"
                            onClick={toggleClose}
                          ></i>
                        </p>
                      </div>
                      <hr></hr>
                      <div className="d-flex px-2">
                        <div className="text-center">
                          <img
                            src={details.image}
                            alt={details.name}
                            style={{ width: 150, height: 150 }}
                          />
                          <p className="card-text text-left">{details.name}</p>
                        </div>
                        <div className="px-2">
                          <div>
                            <label htmlFor="weight" style={{ width: 100 }}>
                              Weight
                            </label>
                            <input
                              type="number"
                              id="weight"
                              style={{ width: 100 }}
                              value={weight}
                              onChange={(e) =>
                                setWeight(Number(e.target.value))
                              }
                              onWheel={(e) => e.target.blur()}
                            />
                          </div>

                          <div>
                            <label htmlFor="making" style={{ width: 100 }}>
                              MCR
                            </label>
                            <input
                              type="number"
                              id="making"
                              style={{ width: 100 }}
                              value={making}
                              onChange={(e) =>
                                setmaking(Number(e.target.value))
                              }
                              onWheel={(e) => e.target.blur()}
                            />
                          </div>

                          <div>
                            <label htmlFor="others" style={{ width: 100 }}>
                              Others
                            </label>
                            <input
                              type="number"
                              id="others"
                              className="align-right"
                              style={{ width: 100 }}
                              value={others}
                              onChange={(e) =>
                                setOthers(Number(e.target.value))
                              }
                              onWheel={(e) => e.target.blur()}
                            />
                          </div>

                          {details.material === "silver" && (
                            <div className="d-flex">
                              <label htmlFor="total" style={{ width: 100 }}>
                                Total
                                {/* <span style={{ width: 100 }}>
                                  {silverRate * weight + (making + others)}
                                </span> */}
                              </label>
                              <input
                                type="text"
                                id="total"
                                className="align-right"
                                style={{ width: 100 }}
                                value={silverRate * weight + (making + others)}
                                readOnly={true}
                              />
                            </div>
                          )}
                          {details.material === "gold" && (
                            <div className="d-flex">
                              <label htmlFor="total" style={{ width: 100 }}>
                                Total
                                {/* <span style={{ width: 100 }}>
                                {silverRate * weight + (making + others)}
                              </span> */}
                              </label>
                              <input
                                type="text"
                                id="total"
                                className="align-right"
                                style={{ width: 100 }}
                                value={goldRate * weight + (making + others)}
                                readOnly={true}
                              />
                            </div>
                          )}
                          {!details.material && (
                            <div className="d-flex">
                              <label htmlFor="total" style={{ width: 100 }}>
                                Total
                                {/* <span style={{ width: 100 }}>
                               {silverRate * weight + (making + others)}
                             </span> */}
                              </label>
                              <input
                                type="text"
                                id="total"
                                className="align-right"
                                style={{ width: 100 }}
                                value={silverRate * weight + (making + others)}
                                readOnly={true}
                              />
                            </div>
                            // <p>
                            //   total:
                            //   <span style={{ width: 100 }}>
                            //     {weight * (making + others)}
                            //   </span>
                            // </p>
                          )}
                        </div>
                      </div>

                      <div className="d-flex justify-content-end pt-1  ">
                        <button
                          className="btn btn-warning ms-2"
                          onClick={() => handleAdd(each)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </div>
        </div>
        {/* For cart View*/}
        <div className="col-12 col-lg-4  p-0 ">
          <div className="bg-secondary pt-1">
            <div className="d-flex flex-column justify-content-between px-3 pb-1">
              <div className="d-flex justify-content-between">
                <h1 className="fs-3 text-white">
                  CART
                  <span className="badge bg-dark  ">{cartItem.length}</span>
                </h1>
                <div>
                  <button
                    className="btn btn-dark ms-2 text-white "
                    onClick={handleCheckOut}
                  >
                    CHECK OUT
                  </button>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column col-4  col-lg-3   ">
                  <label className="text-white" htmlFor="bill_no">
                    Bill No
                  </label>
                  <input
                    type="text"
                    id="bill_no"
                    style={{ width: 100 }}
                    name="bill_no"
                    onChange={(event) => {
                      setBill({
                        ...bill,
                        [event.target.name]:
                          event.target.value !== ""
                            ? Number(event.target.value)
                            : "",
                      });
                    }}
                    onWheel={(e) => e.target.blur()}
                    value={bill.bill_no}
                  />
                </div>
                <div className="col-4  col-lg-3  ">
                  <label htmlFor="datecol" className="text-white">
                    Date
                  </label>
                  <input
                    type="date"
                    id="datecol"
                    name="date"
                    onChange={(event) => {
                      setBill({
                        ...bill,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    // onWheel={(e) => e.target.blur()}
                    value={bill.date}
                  />
                </div>
              </div>
            </div>
            {/* FOR EACH CART ITEM   */}
            <div className="overflow-auto " style={{ height: "20em" }}>
              {cartItem.length === 0 ? (
                <h4 className="text-white text-center pt-5 mt-5 font-weight-bold">
                  NO PRODUCTS IN CART
                </h4>
              ) : (
                cartItem.map((item) => (
                  <div className="bg-secondary px-2 pt-2 pb-1" key={item.id}>
                    <div className="card">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="d-flex  align-items-center ">
                          <img
                            src={item.image}
                            className="product-image m-1"
                            alt={item.name}
                          />
                          <div className="d-flex flex-column">
                            <h4 className="fs-6 ">{item.name}</h4>

                            <h4 className="fs-6 ">
                              {item.price.toLocaleString("hi-IN", {
                                style: "currency",
                                currency: "INR",
                              })}
                            </h4>
                          </div>
                        </div>

                        <div className="px-2">
                          {/* <i className="fa-solid fa-pen-to-square m-1"></i> */}

                          <i
                            className="fa-solid fa-trash"
                            onClick={() => onDelete(item)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* GRAND TOTAL  */}
          <div className="bg-primary">
            <h5 className="text-center">
              Grand Total:
              {grdTotal.toLocaleString("hi-IN", {
                style: "currency",
                currency: "INR",
              })}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
