# Inventory Management System (IMS)

This is inventory management system application for managing `small shop`. This is a `web application`. The application is able to maange product information, stock, sales, genrate reports. Application build with `python` language based on python popular web framework `Django`. Go through the below section to know the details.

#### Note: *This project under development*

### Functional Requirements of the IMS

Here is the few key requirement's of an Inventory Management System which contains the following functionality.

#### Hold the product information

Alow to do the following
- Add new product
- Update product
- Remove product
- View the product list

#### Hold the product stock information

- Enter new stock
- Lease out stock
- Check available stock

#### Product Sales management

- Add sales of the product
- Auto udpate the stock after sales
- Sales report generate for the customer
- Viewing sales

#### User management of the system

- Create user account
- User can log into the system
- User can log out from the system
- View all the user
- Update the user information
Specify role as per user type

## Software Features

The following are the features which we can perform in this IMS web application

#### System User
<p>
  Create account | Update account | Login to the system | Logout to the system<br/>
  Three types of user
<ul>
  1. Manager
   <ul>
  - view, update, remove product.
  - Update product stock</br>
  - view, update, remove suppliers.</br>
  - Purchase new product</br>
  - Check sales</br>
  - View and Deactivate staff</br>
  - can close customer ledger. </br>
  - can generate available invoice/report.
  </ul> 
</ul>
<ul>
  2. Staff (must of logged in)
   <ul>
  - Entry the sales</br>
  - Print sales report for the customer</br>
  </ul> 
</ul>
<ul>
  2. Customer (must of logged in)
   <ul>
  View what purchased and the payment details.
  </ul> 
</ul>
</p>

#### Suppliers

Conains product suppliers information. Have adding, viewing, removing functionality.

#### Product

Contains product details. And having adding, viewing, removing functionality.

#### Customer Ledger

Contains customer purchase details, payment and due history.</br>
Have update functionality.

#### Inventory

Contains product quantity, buying price, saling price. </r>
Have adding, updation, removing functionality.

#### Transaction

- Purchase Product
- Sales Product
#### Report

- Sales Report 
- Purchase Report
- Stock Report


## Tech Stack

### Backend

- Django
- Django REST Framework

### Frontend

- React.js
- Tailwind css
- HTML
- CSS

### Database
- sqlite3 (initial)
