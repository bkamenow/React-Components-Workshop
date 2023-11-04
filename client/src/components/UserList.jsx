import { useEffect, useState } from "react";

import * as userService from "../services/userService";

import SearchForm from "./SearchFrom";
import UserListItem from "./UserListItem";
import CreateUserModal from "./CreateUserModal";
import UserInfoModal from "./UserInfoModal";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    userService
      .getAll()
      .then((result) => setUsers(result))
      .catch((err) => console.log(err));
  }, []);

  const createUserClickHandler = () => {
    setShowCreate(true);
  };

  const hideCreateUserModal = () => {
    setShowCreate(false);
  };

  const userCreateHandler = async (e) => {
    // Stop page from refreshing
    e.preventDefault();

    // Get data from form data
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Create new user at the server
    const newUser = await userService.create(data);

    // Add newly create user to the local state
    setUsers((state) => [...state, newUser]);

    // Close the modal
    setShowCreate(false);
  };

  const userInfoClickHandler = async (userId) => {
    setSelectedUser(userId);
    setShowInfo(true);
  };

  return (
    <section className='card users-container'>
      {showCreate && (
        <CreateUserModal
          onClose={hideCreateUserModal}
          onUserCreate={userCreateHandler}
        />
      )}

      {showInfo && (
        <UserInfoModal
          onClose={() => setShowInfo(false)}
          userId={selectedUser}
        />
      )}

      <SearchForm />
      <div className='table-wrapper'>
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>
                First name
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'
                  ></path>
                </svg>
              </th>
              <th>
                Last name
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'
                  ></path>
                </svg>
              </th>
              <th>
                Email
                <svg
                  className='icon'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'
                  ></path>
                </svg>
              </th>
              <th>
                Phone
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'
                  ></path>
                </svg>
              </th>
              <th>
                Created
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  className='icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'
                  ></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserListItem
                key={user._id}
                _id={user._id}
                imageUrl={user.imageUrl}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                phoneNumber={user.phoneNumber}
                createdAt={user.createdAt}
                onInfoClick={userInfoClickHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
      <button className='btn-add btn' onClick={createUserClickHandler}>
        Add new user
      </button>
    </section>
  );
}
