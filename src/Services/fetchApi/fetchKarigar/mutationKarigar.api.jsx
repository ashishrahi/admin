import { useQuery,useQueryClient,useMutation} from 'react-query';
import api from '../../../utilities/Api'


////////////////////////////fetch Karigars//////////////////

const fetchKarigars = async () => {
const response = await api.get(`/karigars`);
console.log(response.data)
return response.data;
};
 
///////////////////////////// add Karigars ////////////////////////////////


  const addKarigar = async (newKarigar) => {
  const response = await api.post(`/karigars/karigar`,newKarigar);
  console.log(response.data)
  return response.data;
  };

//////////////////////// delete Karigars /////////////////////////////////



  const deleteKarigar = async (id) => {
  const response = await api.delete(`/karigars/${id}`);
  console.log(response.data)
  return response.data;
  };

/////////////////////// update Karigars ///////////////////////////////


  const updateKarigar = async (karigarData,id) => {
  const response = await api.patch(`/karigars/${id}`,karigarData); 
  console.log(response.data)
  return response.data;
  };

  /////////////////////// Status Karigars ///////////////////////////////


  const statusKarigar = async (id) => {
    const response = await api.put(`/karigars/${id}/status`); 
    console.log(response.data)
    return response.data;
    };


////////////////////////// fetching karigars mutations /////////////////////////////////////

 // 
 export const useKarigar = () => {
 return useQuery('karigars', fetchKarigars);
 };

 ///////////////////////// Add karigar Mutations ////////////////////////////////////////////////

 
 
 export const useAddKarigarMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(addKarigar,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('karigars');
      },
    },
    {
      onError:(err) => {
        console.error('Error adding karigar:', err);
        alert('Failed to add karigar. Please try again later.');
      }
    }
    );};

 ///////////////////////////// delete karigar Mutations /////////////////////////////////
  

  export const useDeleteMutationKarigar = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteKarigar,
    {
        onSuccess: () => {
        queryClient.invalidateQueries('karigars');
      },},
      {
        onError:(err) => {
          console.error('Error deleting karigar:', err);
          alert('Failed to delete karigar. Please try again later.');
        }
      }
    
    );};

  //////////////////////////////// update Karigar Mutations ///////////////////////////////
  

  
  export const useUpdateMutationKarigar = () => {
  const queryClient = useQueryClient();
  return useMutation(updateKarigar,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('karigars');
      },},{
        onError:(err) => {
          console.error('Error updating karigar:', err);
          alert('Failed to update karigar. Please try again later.');
        }
      });};

      export const useStatusMutationKarigar = () => {
        const queryClient = useQueryClient();
        return useMutation(statusKarigar,
          {
            onSuccess: () => {
              queryClient.invalidateQueries('karigars');
            },},{
              onError:(err) => {
                console.error('Error updating karigar:', err);
                alert('Failed to update karigar. Please try again later.');
              }
            });};