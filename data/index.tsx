import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

export const items = [
  {
    label: 'Home',
    href: '/',
    icon: BsHouseFill,
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: BsBellFill,
    auth: true,
  },
  {
    label: 'Profile',
    href: '/users/123',
    icon: FaUser,
    auth: true,
  },
];
