# Inventory Management

## Key Features:

### Inventory Dashboard

The Inventory Dashboard provides an overview of inventory levels, including:

- Total Stock: Total quantity of all items in the inventory.
- Total Delivered: Total number of items delivered so far.
- Low Stock Items: Items with a quantity less than or equal to 10. These cards are for display purposes only and are not clickable.

### Departments Page

In the Departments Page, users can explore different inventory departments within the business. Each department's inventory can be viewed by clicking on the respective cards and navigating to the specific product lists.

#### Available Departments

- Kitchen
- Clothing
- Toys

### Product List Page

The Product List Page displays a list of products within the selected department. Users can filter and sort products based on various attributes.

Columns displayed:

- Product Name
- Description
- Price
- Stock
- SKU (Stocking Unit)

#### Filters

- Filter by Department: Use a dropdown to filter by department (All departments, kitchen, clothing, toys).
- Low Stock Filter: Use a checkbox to filter items for low stock (quantity less than or equal to 10).

#### Sorting

- Sort by Name, Price, and Stock using a dropdown. Selecting an option sorts the items in ascending order.

### Product Management

Product Management allows users to add new products to the inventory by clicking on the 'New' button on the product list page. Attributes to add:

- Department
- Product Name
- Description
- Price
- Stock (Quantity)
- SKU (Stocking Unit)
- Supplier Name
- Items Delivered (Set to 0 when adding a new product)
- Item Image URL

Newly added items persist in the product listing even after page reload.

### Detailed Product Page

Clicking on a product from the list navigates users to a detailed product page. This page provides comprehensive information about the selected product, including its attributes, current stock level, supplier name, etc.
