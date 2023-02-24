export default async (url, customOptions = {}) => {
  const { useAuthUser } = useAuth();
  const config = useRuntimeConfig();
  const { openAlert } = useAlert();

  return $fetch(url, {
    ...customOptions,
    baseURL: config.public.apiBase,
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...customOptions.headers,
      Authorization: useAuthUser().value?.token
        ? `Bearer ${useAuthUser().value.token}`
        : ""
    },
    onResponse: ({ request, response, options }) => {
      return response._data;
    },
    onRequestError: (request, response, options) => {
      console.log(response);
    },
    onResponseError: async (request, response) => {
      switch (request.response.status) {
        case 401: {
          openAlert({
            type: "error",
            message: request.response._data.message,
            isOpen: true
          });
          break;
        }

        default: {
          console.log("haha");
          return openAlert({
            type: "error",
            message: request.response._data.message,
            isOpen: true
          });
        }
      }
    }
  });
};
