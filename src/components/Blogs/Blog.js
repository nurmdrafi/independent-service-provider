import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h1 className="text-center">Blogs</h1>
      <div className="my-4">
        <h2 className="text-primary opacity-75">
          Difference between authorization and authentication.
        </h2>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" style={{width: '48%'}} >Authentication</th>
              <th scope="col" style={{width: '48%'}} >Authorization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>In authentication process, the identity of users are checked for providing the access to the system.</td>
              <td>While in authorization process, person’s or user’s authorities are checked for accessing the resources.</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>In authentication process, users or persons are verified.</td>
              <td>While in this process, users or persons are validated.</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>It is done before the authorization process.</td>
              <td>While this process is done after the authentication process.</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>It needs usually user’s login details.</td>
              <td>While it needs user’s privilege or security levels.</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Authentication determines whether the person is user or not.</td>
              <td>While it determines What permission do user have?</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-4">
        <h2 className="text-primary opacity-75">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum
          optio corporis, ea delectus saepe quo libero reprehenderit alias
          incidunt iure eveniet et maxime molestiae impedit assumenda quam a
          odit maiores, animi quod nesciunt nihil. Deleniti tenetur fugiat qui
          vero ex? Praesentium atque at quisquam eos impedit error repellat
          perspiciatis obcaecati alias? Impedit tenetur qui incidunt odit iure
          ut, corrupti ipsum ullam illum iusto veritatis tempore totam suscipit
          doloribus. Modi, non eaque inventore ipsam, ea velit dolores neque vel
          labore totam voluptates molestiae ducimus porro voluptatibus magnam
          praesentium sit. Placeat officia dolor similique iure! Facilis soluta
          aliquid quisquam commodi temporibus?
        </p>
      </div>
      <div className="my-4">
        <h2 className="text-primary opacity-75">
          What other services does firebase provide other than authentication?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum
          optio corporis, ea delectus saepe quo libero reprehenderit alias
          incidunt iure eveniet et maxime molestiae impedit assumenda quam a
          odit maiores, animi quod nesciunt nihil. Deleniti tenetur fugiat qui
          vero ex? Praesentium atque at quisquam eos impedit error repellat
          perspiciatis obcaecati alias? Impedit tenetur qui incidunt odit iure
          ut, corrupti ipsum ullam illum iusto veritatis tempore totam suscipit
          doloribus. Modi, non eaque inventore ipsam, ea velit dolores neque vel
          labore totam voluptates molestiae ducimus porro voluptatibus magnam
          praesentium sit. Placeat officia dolor similique iure! Facilis soluta
          aliquid quisquam commodi temporibus?
        </p>
      </div>
    </div>
  );
};

export default Blogs;
