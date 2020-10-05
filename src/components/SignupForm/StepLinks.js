import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSignupForm } from './SignupFormContext';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export default function StepLinks() {
  const { profile, social } = useSignupForm();

  //if profile is empty
  const isProfileDone = !isEmpty(profile);
  // if social is empty
  const isSocialDone = !isEmpty(social);
  return (
    <div className="step-links">
      <NavLink to="/" exact>
        {isProfileDone ? '❤' : '🤍'}Profile <span />
      </NavLink>
      <NavLink to="/social">
        {isProfileDone ? '❤' : '🤍'}Social <span />
      </NavLink>
      <NavLink to="review" style={{ float: 'right' }}>
        Review <span />
      </NavLink>
    </div>
  );
}
