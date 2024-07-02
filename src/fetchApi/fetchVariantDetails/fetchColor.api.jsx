// useColors.js
import { useQuery,useQueryClient,} from 'react-query';
import api from '../Api'

//fetch Colors
const fetchColors = async () => {
  const response = await api.get(`/colors`);
  console.log(response.data)
  return response.data;
};

//AddColors
  const addColor = async (newColor) => {
  const { data } = await api.post(`/colors/color`, newColor);
  return data;
};


//Mutations

export const useColors = () => {
  return useQuery('colors', fetchColors);
};

//Add Mutations
  export const useAddColors = () => {
    const queryClient = useQueryClient();
    return async (newColor) => {
      const addedColor = await addColor(newColor);
      queryClient.setQueryData(['colors'], (oldColors) => [...oldColors, addedColor]);
    };
  };
