import { useQuery,useQueryClient,useMutation} from 'react-query';
import api from '../../../utilities/Api'


////////////////////////////fetch Venders//////////////////

const fetchVenders = async () => {
const response = await api.get(`/venders`);
console.log(response.data)
return response.data;
};
 
/////////////////////////////add Venders////////////////////////////////


  const addVender = async (newVender) => {
  const response = await api.post(`/venders/vender`,newVender);
  console.log(response.data)
  return response.data;
  };

//////////////////////// delete Venders /////////////////////////////////



  const deleteVender = async (id) => {
  const response = await api.delete(`/venders/${id}`);
  console.log(response.data)
  return response.data;
  };

/////////////////////// update Users ///////////////////////////////


  const updateVender = async (venderData,id) => {
  const response = await api.patch(`/venders/${id}`,venderData); 
  console.log(response.data)
  return response.data;
  };

/////////////////////// update vender  ///////////////////////////////


const updateVenderStatus = async (venderData,id) => {
  const response = await api.put(`/venders/${id}`,venderData); 
  console.log(response.data)
  return response.data;
  };




////////////////////////// fetching venders mutations /////////////////////////////////////

 // 
 export const useVenderMutation = () => {
 return useQuery('venders', fetchVenders);
 };

 ///////////////////////// Add vender Mutations ////////////////////////////////////////////////

 
 
 export const useAddVenderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(addVender,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('venders');
      },
    },
    {
      onError:(err) => {
        console.error('Error adding vender:', err);
        alert('Failed to add vender. Please try again later.');
      }
    }
    );};

 ///////////////////////////// delete Vender Mutations /////////////////////////////////
  

  export const useDeleteMutationVender= () => {
  const queryClient = useQueryClient();
  return useMutation(deleteVender,
    {
        onSuccess: () => {
        queryClient.invalidateQueries('venders');
      },},
      {
        onError:(err) => {
          console.error('Error deleting vender:', err);
          alert('Failed to delete vender. Please try again later.');
        }
      }
    
    );};

  //////////////////////////////// update Vender Mutations ///////////////////////////////
  

  
  export const useUpdateMutationVender = () => {
  const queryClient = useQueryClient();
  return useMutation(updateVender,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('venders');
      },},{
        onError:(err) => {
          console.error('Error updating vender:', err);
          alert('Failed to update vender. Please try again later.');
        }
      });};

//----------------Update Vender Status

export const useStatusMutationVender = () => {
  const queryClient = useQueryClient();
  return useMutation(updateVenderStatus,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('venders');
      },},{
        onError:(err) => {
          console.error('Error updating vender:', err);
          alert('Failed to update vender. Please try again later.');
        }
      });};
