import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import BillForm from "./BillForm";
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
    image:
      "https://kameswarijewellers.in/wp-content/uploads/sites/494/2023/05/VD.jpg",
  },
  {
    id: uuid(),
    name: "Ring",
    category: "Gold & Silver",
    image:
      "https://t4.ftcdn.net/jpg/00/71/67/87/360_F_71678766_kPinbw5YXRSJrlwwT8SmA90TgjBu64Ng.jpg",
  },
  {
    id: uuid(),
    name: "Bracelet",
    category: "Gold & Silver",
    image:
      "https://t4.ftcdn.net/jpg/05/84/41/65/360_F_584416508_eDB9BQA99eNiJg7YOE63WY8tV57jiPI6.jpg",
  },
  {
    id: uuid(),
    name: "Chain",
    category: "Gold & Silver",
    image:
      "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/858/1662475105_c51e1a4334b8547cd10f.jpg",
  },

  {
    id: uuid(),
    name: "Silver Plates",
    category: "Gold & Silver",
    image:
      "https://m.media-amazon.com/images/I/71lwlyr+L9L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: uuid(),
    name: "Silver Spoons",
    category: "Gold & Silver",
    image:
      "https://img.freepik.com/premium-photo/stack-antique-silver-spoons-each-with-unique-pattern-design-created-with-generative-ai_762026-3241.jpg",
  },
  {
    id: uuid(),
    name: "Silver Bangles",
    category: "Gold & Silver",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1rOW7VRyFWxrxAz79tdyu85nTxR6SXiizg&s",
  },
  {
    id: uuid(),
    name: "Kalasam",
    category: "Gold & Silver",
    image:
      "https://cdnmedia-breeze.vaibhavjewellers.com/media/catalog/product/image/17405c868/antique-embossed-silver-kalasam-chembu-334va1132-334va1132.jpg",
  },
  {
    id: uuid(),
    name: "Silver pooja Thaali",
    category: "Gold & Silver",
    image:
      "https://silverstore.in/cdn/shop/files/silver-pooja-thali-set-925-10-size-pack-of-386_1024x1024.png?v=1694682740",
  },
  {
    id: uuid(),
    name: "Silver bowl",
    category: "Gold & Silver",
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
    category: "Clothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqXOou9bo0QNe9hKpPzu8BF4rAOzvdg5SBg&s",
  },
  {
    id: uuid(),
    name: "T-Shirts",
    category: "Clothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6CpNu6IVeynQ-mtDoFUJcbtXhuivqaT3Mg&s",
  },
  {
    id: uuid(),
    name: "Jeans",
    category: "Clothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvxSsk04ywSJMXcDFFr7FU6HHbhqN2hx8Hw&s",
  },
];

function Products() {
  const [itemId, setitemId] = useState(tabsList[0].tabId);
  const [newProducts, setNewProducts] = useState(products);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (e) => {
    setitemId(e.target.value);
  };
  const togglePopup = (row) => {
    console.log(row);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(itemId, "in effect");
    const filtered = products.filter(
      (eachitem) => eachitem.category === itemId
    );
    setNewProducts(filtered);
  }, [itemId]);

  //   const filtered = products.filter((eachitem) => eachitem.category === itemId);
  //   console.log(filtered);

  return (
    <div className="container">
      <div className="row bg-light pt-2 pb-2 p-3  ">
        <div className="col-sm-12 d-flex justify-content-md-start px-0">
          <select
            className="form-select mb-3 mt-3"
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
        </div>

        {newProducts.map((each) => (
          <div
            className="border rounded bg-white m-1 "
            key={each.id}
            style={{ width: 190 }}
          >
            <button
              className="bg-transparent border-0"
              onClick={(row) => togglePopup(each)}
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
            {isOpen && (
              <div className="popup ">
                <div className="popup-content bg-secondary">
                  <div className="d-flex justify-content-end">
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={togglePopup}
                      className="text-dark d-flex ms-auto"
                    >
                      <i className="fa-solid fa-xmark text-white"></i>
                    </p>
                  </div>
                  <BillForm />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
