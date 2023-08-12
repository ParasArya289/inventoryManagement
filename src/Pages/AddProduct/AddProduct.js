import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import { useData } from "../../Context/dataContext";
import "./AddProducts.css";
export const AddProduct = () => {
  const {
    dataState: { inventoryData, departments },
    dispatchData,
  } = useData();
  const navigate = useNavigate();

  const formRef = useRef(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      obj[key] = value;
    }
    dispatchData({
      type: "ADD_PRODUCT",
      payload: { id: inventoryData.length + 1, ...obj },
    });
    navigate("/products");
  };

  return (
    <Layout>
      <h3>Add Product</h3>
      <form className="form" ref={formRef} onSubmit={formSubmitHandler}>
        <select name="department" required>
          <option disabled selected>
            Select Department
          </option>
          {departments?.map((department) => (
            <option value={department}>{department}</option>
          ))}
        </select>
        <input name="name" type="text" placeholder="Name" required />
        <textarea name="description" placeholder="Description" required />
        <input name="price" type="number" placeholder="Price" required />
        <input name="stock" type="number" placeholder="Stock" required />
        <input name="sku" type="number" placeholder="SKU" required />
        <input name="supplier" type="text" placeholder="supplier" required />
        <input name="delivered" type="text" placeholder="delivered" value="0" />
        <input name="imageUrl" type="url" placeholder="Image Url" required />
        <button type="submit">Add Product</button>
      </form>
    </Layout>
  );
};
