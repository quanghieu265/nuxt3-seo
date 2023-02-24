export default () => {
  const useAuthUser = () =>
    useState("auth_user", () => {
      // Do not run on server
      if (process.server) {
        return;
      } else {
        let user = localStorage.getItem("auth_user");
        if (user) return JSON.parse(user);
        else {
          return;
        }
      }
    });

  // set data user authenticate
  const setUser = data => {
    const authUser = useAuthUser();
    authUser.value = data;
    localStorage.setItem("auth_user", JSON.stringify(data));
  };

  // handle login
  const login = ({ username, password }) => {
    const { openAlert } = useAlert();

    return new Promise(async (resolve, reject) => {
      try {
        const config = useRuntimeConfig();
        const data = await $fetch("/api/user/login", {
          withCredentials: true,
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          baseURL: config.public.apiBase,
          method: "POST",
          body: {
            username,
            password
          }
        });
        setUser(data);
        resolve(true);
      } catch (error) {
        reject(error);
        openAlert({
          type: "error",
          message: error.response._data.message,
          isOpen: true
        });
      }
    });
  };

  const signUp = formData => {
    return useFetchApi("/api/user/signup", {
      method: "POST",
      body: formData
    });
  };

  const refreshAccessToken = () => {
    return useFetchApi("/api/user/refresh");
  };

  return {
    login,
    useAuthUser,
    signUp,
    refreshAccessToken,
    setUser
  };
};
