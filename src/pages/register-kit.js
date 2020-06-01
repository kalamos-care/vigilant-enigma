import React, { useState } from 'react'
import SEO from '~/components/seo'
import RegisterKitForm from '~/theme/modules/views/RegisterKitForm';

const RegisterKitPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
  };
 
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
