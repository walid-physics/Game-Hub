import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs';

export interface OrderType {
  value: string;
  label: string;
}

interface Props{
    orderBy: (orderType : OrderType) => void
  orderType: OrderType
}


export const OrderBy = ({ orderBy, orderType } : Props) => {
    
  const orderTypes = [
    { value: "released", label: "Released" },
    { value: "name", label: "Name" },
    { value: "added", label: "Added" },
    { value: "-rating", label: "Rating" },
    { value: "created", label: "Created" },
    { value: "-metacritic", label: "Metacritic" },
    { value: "updated", label: "Updated" },
  ];
    
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {orderType ? 'Order By : ' + orderType.label : 'Order By'}
        </MenuButton>
        <MenuList>
          {orderTypes.map((type, index) => (
            <MenuItem key={index} onClick={() => orderBy(type)}>{type.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
