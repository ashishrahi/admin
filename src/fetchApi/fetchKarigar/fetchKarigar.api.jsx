import { useQuery, } from '@tanstack/react-query';
import api from '../../fetchApi/Api'


// //Fetch Colors
const fetchKarigars = async () => {
    const response = await api.get(`/karigars`);
    console.log(response.data)
    return response.data;
  };

// //Add Colors
// // const addColor = async (newColor) => {
// //   const { data } = await axios.post(`http://localhost:5400/api/colors/color`, newColor);
// //   return data;
// // };

// // //Update Colors
// // const updateColor = async (updatedColor) => {
// //   const { data } = await axios.put(`http://localhost:5400/api/colors/${updatedColor.id}`, updatedColor);
// //   return data;
// // };

// // //Delete Colors
// //   const deleteColor = async (id) => {
// //   await axios.delete(`http://localhost:5400/api/colors/${id}`);
// //   return id;
// // };

// //Fetch Colors
export const useKarigars = () => {
  return useQuery('karigars', fetchKarigars);
};

// //Add Color
// // export const useAddColor = () => {
// //   const queryClient = useQueryClient();
// //   return useMutation(addColor, {
// //     onSuccess: () => {
// //       queryClient.invalidateQueries(['colors']);
// //     },
// //   });
// // };

// // Update Color
// // export const useUpdateColor = () => {
// //   const queryClient = useQueryClient();
// //   return useMutation(updateColor, {
// //     onSuccess: () => {
// //       queryClient.invalidateQueries(['colors']);
// //     },
// //   });
// // };

// // Delete Color
// // export const useDeleteColor = () => {
// //   const queryClient = useQueryClient();
// //   return useMutation(deleteColor, {
// //     onSuccess: () => {
// //       queryClient.invalidateQueries(['colors']);
// //     },});};
