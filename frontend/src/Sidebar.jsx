import React, { useState } from 'react';
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets';
import { useLocation, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState('');

  const updateImage = () => {
    user.image = URL.createObjectURL(image);
    setImage('');
  };

  return (
    <div className='relative h-full min-h-screen md:flex flex-col items-center pt-8
    max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm z-10 bg-white'>

      {/* Profile Image Section */}
      <div className='group relative'>
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : user?.image ||
              "https://images.unsplash.com/photo-1633332755192-727a05c4012d?q=80&w=300"}
            alt=""
            className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto'
          />
          <input
            type="file"
            id='image'
            accept='image/*'
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className='absolute hidden bottom-0 left-0 right-0 top-0 bg-black/10
            rounded-full group-hover:flex items-center justify-center cursor-pointer'>
            <img src={assets.edit_icon} alt="edit" />
          </div>
        </label>
      </div>

      {/* Save Button */}
      {image && (
        <button
          onClick={updateImage}
          className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer'>
          Save <img src={assets.check_icon} width={13} alt="check icon" />
        </button>
      )}

      {/* User Name */}
      <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

      {/* Sidebar Navigation */}
      <div className='w-full'>
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${
                isActive ? 'bg-primary/10 text-primary' : 'text-gray-600'
              }`
            }
          >
            <img src={location.pathname === link.path ? link.coloredIcon : link.icon} alt="icon" />
            <span className='max-md:hidden'>{link.name}</span>

            {/* Active Indicator */}
            <div className={`${location.pathname === link.path ? 'bg-primary' : ''} w-1.5 h-8 rounded-1`}>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
