import React from 'react';

const Blogs = () => {
    return (
      <div style={{ width: "80%" }} className="mx-auto">
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
          I'm using firebase just because of it's security and built in
          authentication system with third party websites like Google, Facebook,
          Github, Apple, Yahoo, Twitter etc. We can use our won authentication
          system instead of firebase. We can store all of the user's login
          credentials in our database and then create a password based
          authentication system as well. Also we have some alternative instead
          of Firebase - 1. Parse 2. Back4app 3. Kinvey 4. Kuzzle etc
        </p>
        <h3>
          What other services does firebase provide other than authentication?
        </h3>
        <p>
          Firebase services - Firebase provides so many services for us. Some of
          them are - Firestore Hosting Real time database Cloud Storage/Hosting
          Google Analytics Cloud Messaging
        </p>
      </div>
    );
};

export default Blogs;