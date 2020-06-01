import React, { useState } from 'react'
import SEO from '~/components/seo'
import RegisterKitForm from '~/theme/modules/views/RegisterKitForm';

const RegisterKitPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
  };

  <form name="register" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
 
  return (
    <>
      <SEO title="Register Kit" keywords={[`register`, `kit`]} />
      <RegisterKitForm
        onSubmit={handleSubmit}
        sent={sent}
      />
    </>
  );
}

export default RegisterKitPage
