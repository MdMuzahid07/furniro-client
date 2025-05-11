"use client";
import { useState } from "react";
import AddressCard from "./AddressCard";
import AddNewAddressForm from "./AddNewAddressForm";

const fakeData = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  country: "Sri Lanka",
  street: "123 Main St",
  city: "Colombo",
  province: "Western Province",
  zipCode: "10100",
  phone: "+94 71 234 5678",
  email: "john.doe@example.com",
};

const AddressBook = () => {
  const [addNewAddress, setAddNewAddress] = useState(false);

  return (
    <section className="w-full px-[10px] sm:px-[20px] lg:px-[50px]">
      <div className="flex justify-between">
        <h1 className="mt-[30px] text-[20px] font-medium text-info sm:text-[24px] md:mt-[0px] md:text-[28px]">
          Address Book
        </h1>

        {!addNewAddress && (
          <button
            onClick={() => setAddNewAddress(true)}
            className="flex h-[30px] w-[100px] cursor-pointer items-center justify-center bg-primary text-background"
          >
            Add New
          </button>
        )}
      </div>

      {addNewAddress ? (
        <AddNewAddressForm />
      ) : (
        <div className="mt-[20px] grid max-h-[638px] grid-cols-1 gap-[20px] overflow-y-auto pb-[20px] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <AddressCard address={fakeData} />
          <AddressCard address={fakeData} />
          <AddressCard address={fakeData} />
          <AddressCard address={fakeData} />
        </div>
      )}
    </section>
  );
};

export default AddressBook;
