import { User } from '@/types/User';
export const users: User[] = [
  {
    id: 1,
    fullname: 'John Doe',
    username: 'johndoe',
    avatar: 'https://source.unsplash.com/random/900x900/?male',
    isVerified: true,
  },
  {
    id: 2,
    fullname: 'Jane Smith',
    username: 'janesmith',
    avatar: 'https://source.unsplash.com/random/900x900/?female',
    isVerified: false,
  },
  {
    id: 3,
    fullname: 'Karen Johnson',
    username: 'kjohnson',
    avatar: 'https://source.unsplash.com/random/900x900/?female',
    isVerified: true,
  },
];
