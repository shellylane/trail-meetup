
export const toggleModal = (modalName = "") => ({
  type: "CHANGE_MODAL",
  payload: modalName
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});



export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const authenticateUser = (isAuthenticated = false) => ({
  type: "AUTHENTICATED",
  payload: isAuthenticated
});
