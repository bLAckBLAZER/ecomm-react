import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { AddressCard } from "./AddressCard";
import { CheckoutSummary } from "./CheckoutSummary";
import { NewAddress } from "../../components";
import { defaultNewAddress } from "./defaultNewAddress";

export const Checkout = () => {
  const {
    userState: { userAddresses, userCart },
  } = useUser();

  const [selectedAddress, setSelectedAddress] = useState(userAddresses[0]);
  const [showModal, setShowModal] = useState(false);
  const [addressDetails, setAddressDetails] = useState(defaultNewAddress);

  return (
    <main className="flex-1">
      <div className="container">
        <div className="h3 txt-center">Checkout</div>
        <hr />
        <div className="cart-container">
          <div className="flex flex-col gap-1">
            <button
              className="btn btn-secondary"
              id="add-address"
              onClick={() => setShowModal(!showModal)}
            >
              New Address
            </button>
            {userAddresses.length === 0 && (
              <>
                <div className="h3 txt-center">
                  Oops! You don't have any stored addresses.
                </div>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(!showModal)}
                >
                  Create New Address
                </button>
              </>
            )}
            {userAddresses.length > 0 &&
              userAddresses.map((address) => (
                <AddressCard
                  address={address}
                  key={address.id}
                  setSelectedAddress={setSelectedAddress}
                  selectedAddress={selectedAddress}
                  setAddressDetails={setAddressDetails}
                  setShowModal={setShowModal}
                />
              ))}
          </div>
          <CheckoutSummary
            userCart={userCart}
            selectedAddress={selectedAddress}
          />
        </div>
      </div>
      {showModal && (
        <NewAddress
          setShowModal={setShowModal}
          setSelectedAddress={setSelectedAddress}
          addressDetails={addressDetails}
          setAddressDetails={setAddressDetails}
        />
      )}
    </main>
  );
};
