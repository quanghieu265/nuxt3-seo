export default () => {
  let timeout;

  const useAlertData = () =>
    useState("use_alert", () => ({
      type: "success",
      message: ".",
      isOpen: false
    }));

  const openAlert = value => {
    clearTimeout(timeout);

    const data = useAlertData();
    data.value = value;

    timeout = setTimeout(() => {
      data.value.isOpen = false;
    }, 3000);
  };

  return {
    useAlertData,
    openAlert
  };
};
