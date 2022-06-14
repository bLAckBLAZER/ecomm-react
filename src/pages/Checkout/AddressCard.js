import "./AddressCard.css";

export const AddressCard = ({
  address,
  setSelectedAddress,
  selectedAddress,
  setAddressDetails,
  setShowModal,
}) => {
  const {
    name,
    address: { line1, line2, line3 },
    city,
    state,
    pincode,
  } = address;

  return (
    <div className="address-card">
      <label htmlFor="">
        <input
          type="radio"
          name="address"
          onChange={() => setSelectedAddress(address)}
          checked={address.id === selectedAddress.id}
        />
      </label>
      <div className="flex-1">
        <div className="h3">{name}</div>
        <div>{line1}</div>
        <div>{line2}</div>
        <div>{line3}</div>
        <div>{`${city}, ${pincode}, ${state}`}</div>
      </div>
      <i
        className="fas fa-pen"
        onClick={() => {
          setAddressDetails(address);
          setShowModal(true);
        }}
      ></i>
    </div>
  );
};
