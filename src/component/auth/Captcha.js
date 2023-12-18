// Captcha.js
import React from 'react';

const Captcha = ({ value, onChange }) => {
  return (
    <div className="captcha">
      <label>Captcha: I am not a robot</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default Captcha;
