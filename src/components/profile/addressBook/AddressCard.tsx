"use client";

interface Address {
  id: string;
  firstName: string;
  lastName: string;
  country: string;
  street: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  company?: string;
}

const AddressCard = ({
  address,
  handleDelete,
  handleEdit,
}: {
  address: Address;
  handleDelete?: () => void;
  handleEdit?: () => void;
}) => {
  return (
    <div className="relative rounded-[10px] bg-quaternary p-[20px] sm:p-[15px] md:p-[20px]">
      <div>
        <h3 className="font-medium">
          {address.firstName} {address.lastName}
        </h3>
        {address.company && <p className="mt-1 text-[14px] text-info">{address.company}</p>}
        <p className="mt-2 text-[14px] text-info">{address.street}</p>
        <p className="text-[14px] text-info">
          {address.city}, {address.province} {address.zipCode}
        </p>
        <p className="text-[14px] text-info">{address.country}</p>
        <div className="mt-3 w-full border-t border-septenary-light pt-3">
          <p className="text-[14px] text-info">{address.phone}</p>
          <p className="text-[14px] text-info">{address.email}</p>
        </div>
        <div className="absolute top-[20px] right-[20px] flex gap-2">
          <button onClick={() => handleEdit && handleEdit()} className="cursor-pointer text-[14px]">
            Edit
          </button>
          <button
            onClick={() => handleDelete && handleDelete()}
            className="cursor-pointer text-[14px] text-danger hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
