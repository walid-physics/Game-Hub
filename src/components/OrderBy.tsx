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
    { value: "released", label: "released" },
    { value: "name", label: "name" },
    { value: "added", label: "added" },
    { value: "-rating", label: "rating" },
    { value: "created", label: "created" },
    { value: "-metacritic", label: "metacritic" },
    { value: "updated", label: "updated" },
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
