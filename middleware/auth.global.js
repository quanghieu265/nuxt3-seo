import jwt_decode from "jwt-decode";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // // skip middleware on server
  // if (process.server) return;
  // skip middleware on login/signup page
  if (to.fullPath === "/login" || to.fullPath === "/signup") return;
  const { useAuthUser } = useAuth();
  let user = useAuthUser().value;
  //check if user is authenticated
  if (!user?.token) {
    return navigateTo("/login", { redirectCode: 301 });
  }
  // check expiration time
  const decoded = jwt_decode(user.token);
  if (Date.now() >= decoded.exp * 1000) {
    // get new access token
    const { refreshAccessToken, setUser } = useAuth();
    try {
      let newAccessToken = await refreshAccessToken();
      setUser(newAccessToken);
      return;
    } catch (error) {
      localStorage.removeItem("auth_user");
      return navigateTo("/login", { redirectCode: 301 });
    }
  }

  return;
});
