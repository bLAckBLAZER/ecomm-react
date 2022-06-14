import "./NewAddress.css";
import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { v4 as uuid } from "uuid";
import { defaultNewAddress } from "../../pages/Checkout/defaultNewAddress";

export const NewAddress = ({
  setShowModal,
  setSelectedAddress,
  addressDetails,
  setAddressDetails,
}) => {
  const { userState, userDispatch } = useUser();

  const isUpdateMode = addressDetails.id ? true : false;

  const { name, address, city, state, pincode } = addressDetails;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isUpdateMode) {
      userDispatch({
        type: "UPDATE_ADDRESS",
        payload: addressDetails,
      });

      setSelectedAddress(addressDetails);
    } else {
      const newAddress = { ...addressDetails, id: uuid() };

      userDispatch({
        type: "ADD_ADDRESS",
        payload: newAddress,
      });
      setSelectedAddress(newAddress);
    }

    setAddressDetails(defaultNewAddress);
    setShowModal(false);
  };

  return (
    <div className="modal-container">
      <form className="modal" onSubmit={handleFormSubmit}>
        <label htmlFor="name" className="input-label">
          Name
          <div className="input-container">
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              value={name}
              onChange={(e) =>
                setAddressDetails({ ...addressDetails, name: e.target.value })
              }
              required
            />
          </div>
        </label>
        <label htmlFor="address-line-1" className="input-label">
          Address Line 1
          <div className="input-container">
            <input
              type="text"
              name="address-line-1"
              id="address-line-1"
              className="input"
              value={address.line1}
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  address: { ...address, line1: e.target.value },
                })
              }
              required
            />
          </div>
        </label>
        <label htmlFor="address-line-2" className="input-label">
          Address Line 2
          <div className="input-container">
            <input
              type="text"
              name="address-line-2"
              id="address-line-2"
              className="input"
              value={address.line2}
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  address: { ...address, line2: e.target.value },
                })
              }
              required
            />
          </div>
        </label>
        <label htmlFor="address-line-3" className="input-label">
          Address Line 3
          <div className="input-container">
            <input
              type="text"
              name="address-line-3"
              id="address-line-3"
              className="input"
              value={address.line3}
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  address: { ...address, line3: e.target.value },
                })
              }
              required
            />
          </div>
        </label>

        <label htmlFor="state" className="input-label">
          State
          <div className="input-container">
            <select
              name="state"
              id="state"
              value={state}
              onChange={(e) =>
                setAddressDetails({ ...addressDetails, state: e.target.value })
              }
            >
              <option value="Maharashtra">Maharashtra</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Karnataka">Karnataka</option>
            </select>
          </div>
        </label>
        <label htmlFor="city" className="input-label">
          City
          <div className="input-container">
            <input
              type="text"
              name="city"
              id="city"
              className="input"
              value={city}
              onChange={(e) =>
                setAddressDetails({ ...addressDetails, city: e.target.value })
              }
              required
            />
          </div>
        </label>
        <label htmlFor="pincode" className="input-label">
          Pincode
          <div className="input-container">
            <input
              type="number"
              name="pincode"
              id="pincode"
              className="input"
              value={pincode}
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  pincode: e.target.value,
                })
              }
              required
            />
          </div>
        </label>

        <div className="modal-actions">
          <button
            className="btn btn-alert"
            id="btn-no"
            onClick={() => {
              setAddressDetails(defaultNewAddress);
              setShowModal(false);
            }}
          >
            Cancel
          </button>

          {isUpdateMode ? (
            <button className="btn btn-success" id="btn-yes" type="submit">
              Update
            </button>
          ) : (
            <button className="btn btn-success" id="btn-yes" type="submit">
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
