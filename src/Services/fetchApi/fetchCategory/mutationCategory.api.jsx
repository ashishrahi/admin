import { useQuery,useQueryClient,useMutation} from 'react-query';
import api from '../../../utilities/Api'
import { useNavigate } from 'react-router-dom';


////////////////////////////fetch Users//////////////////

const fetchCategories = async () => {
const response = await api.get(`/categories`);
console.log(response.data)
return response.data;
};

//////////////////////////// active fetch Users//////////////////

const fetchactiveCategories = async () => {
  const response = await api.get(`/categories/status/true`);
  console.log(response.data)
  return response.data;
  };

//////////////////////////// active fetch Users//////////////////

const fetchinactiveCategories = async () => {
  const response = await api.get(`/categories/status/false`);
  console.log(response.data)
  return response.data;
  };




 
/////////////////////////////add Categories ////////////////////////////////


  const addCategory = async (newCategory) => {
  const response = await api.post(`/categories/category`,newCategory);
  console.log(response.data)
  return response.data;
  };

//////////////////////// delete Categories /////////////////////////////////



  const deleteCategory = async (id) => {
  const response = await api.delete(`/categories/${id}`);
  console.log(response.data)
  return response.data;
  };

/////////////////////// update Categories ///////////////////////////////


  const updateCategory = async (categoryData,id) => {
  const response = await api.patch(`/categories/${id}`,categoryData); 
  console.log(response.data)
  return response.data;
  };


  /////////////////////// update Categories ///////////////////////////////


  const updateCategoryStatus = async (id) => {
    const response = await api.put(`/categories/${id}/status`); 
    console.log(response.data)
    return response.data;
    };


////////////////////////// fetching category mutations /////////////////////////////////////

 // 
 export const useCategory = () => {
 return useQuery('categories', fetchCategories);
 };

////////////////////////// fetching active category mutations /////////////////////////////////////

 export const useActiveCategory = () => {
  return useQuery('categories', fetchactiveCategories);
  };

////////////////////////// fetching active category mutations /////////////////////////////////////

export const useInActiveCategory = () => {
  return useQuery('categories', fetchinactiveCategories);
  };


 ///////////////////////// Add category Mutations ////////////////////////////////////////////////

 
 export const useAddCategoryMutation = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation(addCategory,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('categories');
        navigate('/Category-List');
      },
    },
    {
      onError:(err) => {
        console.error('Error adding category:', err);
        alert('Failed to add category. Please try again later.');
      }
    }
    );};

    

 ///////////////////////////// delete category Mutations /////////////////////////////////
  

  export const useDeleteMutationUser = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCategory,
    {
        onSuccess: () => {
        queryClient.invalidateQueries('categories');
      },},
      {
        onError:(err) => {
          console.error('Error deleting category:', err);
          alert('Failed to delete category. Please try again later.');
        }
      }
    
    );};

  //////////////////////////////// update Category Mutations ///////////////////////////////
  

  
  export const useUpdateMutationCategory = () => {
    const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation(updateCategory,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('categories');
        navigate('/Category-List');
      },},{
        onError:(err) => {
          console.error('Error updating category:', err);
          alert('Failed to update category. Please try again later.');
        }
      });};

  //////////////////////////////// update Category Mutations ///////////////////////////////
  

  
  export const useStatusMutationCategory = () => {
    const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation(updateCategoryStatus,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('categories');
        navigate('/Category-List');
      },},{
        onError:(err) => {
          console.error('Error updating category:', err);
          alert('Failed to update category. Please try again later.');
        }
      });};