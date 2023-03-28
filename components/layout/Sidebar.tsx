import { items } from '@/data';
import { BiLogOut } from 'react-icons/bi';
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';
import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              auth={item.auth}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label='Logout'
            />
          )}

          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
