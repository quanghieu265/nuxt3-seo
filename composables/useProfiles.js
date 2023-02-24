export default () => {
  const getAllUsers = () => {
    return useFetchApi("/api/user/all");
  };

  const getUserById = id => {
    return useFetchApi(`/api/user/${id}`);
  };

  return {
    getAllUsers,
    getUserById
  };
};
