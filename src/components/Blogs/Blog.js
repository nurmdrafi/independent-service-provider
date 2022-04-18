import React from "react";

const Blogs = () => {
  return (
    <div className="container fs-4">
      <h1 className="heading">Blogs</h1>
      <div className="my-4">
        <h1 className="text-primary opacity-75 my-4">
          Difference between authorization and authentication.
        </h1>
        <p>
          What's the difference between authorization and authentication?
          <b> Authorization</b> gives those users permission to access a
          resource.
          <b> Authentication</b> confirms that users are who they say they are.
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" style={{ width: "1%" }}>
                #
              </th>
              <th scope="col" style={{ width: "48%" }}>
                Authorization
              </th>
              <th scope="col" style={{ width: "1%" }}>
                #
              </th>
              <th scope="col" style={{ width: "48%" }}>
                Authentication
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                While in authorization process, person’s or user’s authorities
                are checked for accessing the resources.
              </td>
              <th scope="row">1</th>
              <td>
                In authentication process, the identity of users are checked for
                providing the access to the system.
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>While in this process, users or persons are validated.</td>
              <th scope="row">2</th>
              <td>In authentication process, users or persons are verified.</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                While this process is done after the authentication process.
              </td>
              <th scope="row">3</th>
              <td>It is done before the authorization process.</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>While it needs user’s privilege or security levels.</td>
              <th scope="row">4</th>
              <td>It needs usually user’s login details.</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>While it determines What permission do user have?</td>
              <th scope="row">5</th>
              <td>
                Authentication determines whether the person is user or not.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-4">
        <h1 className="text-primary opacity-75 my-4">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          Firebase Authentication makes it easier to get my users signed-in
          without having to understand the complexities behind implementing my
          own authentication system. It offers a straightforward getting started
          experience, optional UX components designed to minimize user friction,
          and is built on open standards and backed by Google infrastructure.
        </p>
        <p>
          Implementing Firebase Authentication is relatively fast and easy. From
          the Firebase console, just choose from the popular login methods that
          I want to offer (like Facebook, Google, Twitter and email/password)
          and then add the Firebase SDK to my app. My app will then be able to
          connect securely with the real time database, Firebase storage or to
          my own custom back end. If I have an auth system already, I can use
          Firebase Authentication as a bridge to other Firebase features.
        </p>

        <p>
          Firebase Authentication also includes an open source UI library that
          streamlines building the many auth flows required to give my users a
          good experience. Password resets, account linking, and login hints
          that reduce the cognitive load around multiple login choices - they
          are all pre-built with Firebase Authentication UI. These flows are
          based on years of UX research optimizing the sign-in and sign-up
          journeys on Google, Youtube and Android.
        </p>
      </div>
      <div className="my-4">
        <h1 className="text-primary opacity-75 my-4">
          What other services does firebase provide other than authentication?
        </h1>
        <p>
          <b>Hosting </b> Deploy fast-loading, secure websites that are backed
          by a global CDN without all of the hassle.
        </p>
        <p>
          <b>Cloud Storage </b> Store and serve user-generated content with ease
          as app grows from prototype to production-ready.
        </p>
        <p>
          <b>Realtime Database </b> Build serverless apps by storing and syncing
          JSON data between users in near-realtime, on or offline, with strong
          user-based security.
        </p>
        <p>
          <b>Remote Config </b> Set up feature flags during prototyping and
          development so anyone can dynamically control and optimize the user
          experience in production.
        </p>
        <p>
          <b>Cloud Functions </b> Write and run app logic server-side without
          needing to set up server.
        </p>
        <p>
          <b>Cloud Messaging </b> Get infrastructure to reliably send and
          receive push messages between server and devices, across platforms at
          no cost.
        </p>
        
      </div>
    </div>
  );
};

export default Blogs;
