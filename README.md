<h1 align="center">☕ Ongbau Order app using React & .NET Core WebApi🖥️📝</h1>

- JWT Authentication Flow for User Login, Register, Logout
- SignalR communication to SPA
- Project Structure for React Redux JWT Authentication, Router, Axios
- Working with Redux Actions, Reducers, Store using redux-toolkit
- Creating React Function Components with Hooks & Form Validation
- React Function Components for accessing protected Resources (Authorization)
- Dynamic Navigation Bar in React App

## Techs involed
[![Techs](https://skillicons.dev/icons?i=react,dotnet,redux,tailwind,bootstrap,cs&perline=6)](https://skillicons.dev)

**For more detail, please visit:**
> [Nguyen Huu Anh Tuan dev profile](nguyenhuuanhtuan.netlify.app)

# API (Server) ⚙️
## Endpoints
**Note:** API is private repository, for job employment purpose only.
![api-endpoints](api-endpoints.png)

## Database Diagram
![api-endpoints](db-diagram.PNG)

## SignalR hub for realtime communication
![OngBauOrder-client-server-diagram](OngBauOrder-client-server-diagram.png)

# React SPA (Client)
Home Page:
![Home Page](home-page.png)

Menu Page with drinks by categories:
![Menu Page](menu-page.png)

Cart/Checkout request page with selected drinks:
![Cart/Checkout Page](cart-checkout.png)

Checkout success alert after successfully send realtime request to staff through hub endpoint:
![Checkout success](checkout-success.png)


Staff Login Page:

![Staff Login Page](staff-login-page.png)

For Authorized account login (Staff), the navigation bar will change:

![Staff Profile Page](staff-profile-page.png)

Staff Receive Order Requests Page with request received by user though hub endpoint:
![checkout-request-received](checkout-request-received.png):


### Set port
.env
```
PORT=8081
```

### Note:
Open `src/services/auth-header.js` and modify `return` statement for appropriate back-end (found in the tutorial).

```js
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return { 'x-access-token': user.accessToken };             // for Node.js Express back-end
  } else {
    return {};
  }
}
```

### Project setup

In the project directory, you can run:

```
npm install
# or
yarn install
```

or

### Compiles and hot-reloads for development

```
npm start
# or
yarn start
```

Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.

## 🤝 Collaborators

We thank the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/entykey">
        <img src="https://github.com/entykey.png" width="100px;" alt="Nguyen Huu Anh Tuan display photo"/><br>
        <sub>
          <b>Nguyễn Hữu Anh Tuấn</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

### Preferences
> [In-depth Introduction to JWT-JSON Web Token](https://www.bezkoder.com/jwt-json-web-token/)

> [React CRUD example using Hooks](https://www.bezkoder.com/react-hooks-crud-axios-api/)

> [React Pagination using Hooks example](https://www.bezkoder.com/react-pagination-hooks/)

> [React Hooks File Upload example](https://www.bezkoder.com/react-hooks-file-upload/)

> [React Form Validation with Hooks example](https://bezkoder.com/react-form-validation-hooks/)

Fullstack with Node.js Express:
> [React.js + Node.js Express + MySQL](https://www.bezkoder.com/react-node-express-mysql/)

> [React.js + Node.js Express + PostgreSQL](https://www.bezkoder.com/react-node-express-postgresql/)

> [React.js + Node.js Express + MongoDB](https://www.bezkoder.com/react-node-express-mongodb-mern-stack/)

Fullstack with Spring Boot:
> [React.js + Spring Boot + MySQL](https://www.bezkoder.com/react-spring-boot-crud/)

> [React.js + Spring Boot + PostgreSQL](https://www.bezkoder.com/spring-boot-react-postgresql/)

> [React.js + Spring Boot + MongoDB](https://www.bezkoder.com/react-spring-boot-mongodb/)

Fullstack with Django:
> [React.js Hooks + Django Rest Framework](https://www.bezkoder.com/django-react-hooks/)

Serverless:
> [React Hooks Firebase Realtime Database: CRUD App ](https://www.bezkoder.com/react-firebase-hooks-crud/)

> [React Hooks Firestore example: CRUD App](https://www.bezkoder.com/react-hooks-firestore/)

Integration (run back-end & front-end on same server/port)
> [Integrate React with Spring Boot](https://www.bezkoder.com/integrate-reactjs-spring-boot/)

> [Integrate React with Node.js Express](https://www.bezkoder.com/integrate-react-express-same-server-port/)
