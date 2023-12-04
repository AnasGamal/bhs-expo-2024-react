import React from 'react';

const ContactInfo = () => {
  // Phone number and email
  const phoneNumber = '386-837-6270';
  const emailAddress = 'communityexpo2@gmail.com';

  const handlePhoneClick = () => {
    // Check if the user is on a mobile device
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobileDevice) {
      // If the user is on a mobile device, initiate a phone call
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // If the user is on a laptop or website, open the default email client
      window.location.href = `mailto:${emailAddress}`;
    }B
  };

  return (
    <div>
      <p>
        Phone: <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>{phoneNumber}</a>
      </p>
      <p>
        Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
      </p>
    </div>
  );
};

export default ContactInfo;
