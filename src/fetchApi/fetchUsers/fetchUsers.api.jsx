import api from '../Api';

// Fetch Users
export const fetchUsers = async () => {
  const response = await api.get(`/users`);
  return response.data;
};

// Create Users
export const createUser = async (formData) => {
    const response = await api.post(`/users/signup`,formData)
    return response.data;
}

// Update Users
// export const updateUser = async () => {
//     const response = await api.put(`/users/${id}`)
//     return response.data;
// }

//Delete Users
// export const deleteUser = async () => {
//   const response = await api.delete(`/users/${id}`)
//   return response.data;
// }