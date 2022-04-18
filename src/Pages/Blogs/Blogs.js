import React from 'react';

const Blogs = () => {
    return (
      <div style={{width:'80%'}} className='mx-auto'>
        <h3>Difference between authorization and authentication?</h3>
        <p>
          authentication: By identify the email and password checked the users
          identity.its checked only the users real or fake and it is done before
          authorization process.it needs all information about users and finally
          said that authentication determines whether the person is user or not.
          authorization: By autherization process, users access in system and
          check that what was the position stay in that system.In this system
          users are validated.last of all, said that authorization determines
          what permission do user have?
        </p>
        <h3>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          google firebase founded in 2011 as a chat API.it helps reduces
          development workload and time.firebase removes the need to worry about
          the technicalities of cloud server configuaration.firebase gives
          access to other google products and features, like google drive and
          sheets.firebase helps realtime database, authentication, cloud
          messaging, storage, hosting, remote config, test lab, cresh reporting
          etc. without firebase there are many system in authentication like
          oneLogin, JumpCloud, Microsoft Azure Active Directory, CyberArk
          Identity, Auth0, Ripping, SecureAuth Identity Platform, ForgeRock etc.
        </p>
        <h3>
          What other services does firebase provide other than authentication?
        </h3>
      </div>
    );
};

export default Blogs;