import React, { useState } from "react";
import "../CSS/Home.css";
import { Table, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [actionDialog, setActionDialog] = useState(false);
  const [customer, setCustomer] = useState(null);

  const retrievingCustomers = async () => {
    await axios
      .get("http://localhost:5000/api/customer")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const DeleteCustomer = async () => {
    console.log(customer);
    await axios
      .delete("http://localhost:5000/api/customer/" + customer)
      .then((response) => {
        setActionDialog(false);
        setCustomer(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setTimeout(() => {
    retrievingCustomers();
  }, 2000);

  return (
    <>
      <div className="row mt-4 mx-3 mb-3">
        <div className="aligning col-9">
          <h3 data-testid="customerHeader">All Customers</h3>
        </div>
        <div className="aligning col-3">
          <Button
            onClick={() => navigate("/AddCustomer")}
            variant="primary"
            id="addCustomer"
            className="customerAdd"
            data-testid="addCustomer"
          >
            Add Customer
          </Button>
        </div>
      </div>
      <div className="row mx-3">
        <Table data-testid="customersTable" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr
                  onDoubleClick={(e) =>
                    navigate("/AddCustomer", { state: customer.id })
                  }
                  key={customer._id}
                >
                  <td>{index + 1}</td>
                  <td>{customer.Name}</td>
                  <td>{customer.Address}</td>
                  <td>{customer.MobileNumber}</td>
                  <td>
                    <div className="actionDiv">
                      <Button
                        className="action"
                        id="editCustomer"
                        variant="primary"
                        onClick={() => {
                          navigate("/EditCustomer", { state: customer });
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        className="action"
                        id="deleteCustomer"
                        variant="danger"
                        onClick={() => {
                          setActionDialog(true);
                          setCustomer(customer._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No Customers Added</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Modal
          show={actionDialog}
          onHide={() => {
            setActionDialog(false);
            setCustomer(null);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to{" "}
            <span style={{ color: "red" }}>Delete</span> customer?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              id="cancel"
              onClick={() => {
                setActionDialog(false);
                setCustomer(null);
              }}
            >
              CANCEL
            </Button>
            <Button id="delete" variant="primary" onClick={DeleteCustomer}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Home;
