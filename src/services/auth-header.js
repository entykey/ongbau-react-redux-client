export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    // return { "x-access-token": user.accessToken };

    // for ASP.NET back-end
    return { 
      'Authorization': `Bearer ${user.accessToken}`,
      'Content-Type': 'application/json;charset=UTF-8',
    };
  } else {
    return {};
  }
}
