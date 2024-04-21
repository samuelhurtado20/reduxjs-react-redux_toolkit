import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addUser,
  changeEmail,
  currentUser
} from './userSlice';
import styles from '../counter/Counter.module.css';

export function User() {
  const current_user = useSelector(currentUser);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(current_user)
    if (!current_user.name) {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((resp) => resp.json())
        .then((data) => {
          dispatch(addUser(data))
          setUser(data)
        })
    }
  }, [current_user, dispatch])

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          name='name'
          value={user.name}
          onChange={(e) => console.log(e.target.value)}
        />
        <input
          className={styles.textbox}
          name='username'
          value={user.username}
          onChange={(e) => console.log(e.target.value)}
        />
        <input
          className={styles.textbox}
          name='email'
          value={user.email}
          onChange={(e) => console.log(e.target.value)}
        />
        <button
          className={styles.button}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          onChange={(e) => dispatch(changeEmail(e.target.value))}
        />
      </div>
    </div>
  );
}
