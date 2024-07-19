import { useQuery,useQueryClient,useMutation} from 'react-query';
import api from '../../../utilities/Api'
import { useNavigate } from 'react-router-dom';


////////////////////////////fetch Policies//////////////////

const fetchPolicies = async () => {
const response = await api.get(`/policies`);
console.log(response.data)
return response.data;
};
 
/////////////////////////////add Policy////////////////////////////////


  const addPolicy = async (newPolicy) => {
  const response = await api.post(`/policies/policy`,newPolicy);
  return response.data;
  };

//////////////////////// delete Policies /////////////////////////////////



  const deletePolicy = async (id) => {
  const response = await api.delete(`/policies/${id}`);
  return response.data;
  };

/////////////////////// update Policies ///////////////////////////////


  const updatePolicy = async (policyData,id) => {
  const response = await api.patch(`/policies/${id}`,policyData); 
  return response.data;
  };


////////////////////////// fetching Policies mutations /////////////////////////////////////

 // 
 export const usePolicy = () => {
 return useQuery('policies', fetchPolicies);
 };

 ///////////////////////// Add Policies Mutations ////////////////////////////////////////////////

 
 
 export const useAddPolicyrMutation = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation(addPolicy,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('policies');
        navigate('/Privacy-Policy')
      },
    },
    {
      onError:(err) => {
        console.error('Error adding policy:', err);
        alert('Failed to add policy. Please try again later.');
      }
    }
    );};

 ///////////////////////////// delete Policies Mutations /////////////////////////////////
  

  export const useDeleteMutationPolicy = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePolicy,
    {
        onSuccess: () => {
        queryClient.invalidateQueries('policies');
      },},
      {
        onError:(err) => {
          console.error('Error deleting policy:', err);
          alert('Failed to delete policy. Please try again later.');
        }
      }
    
    );};

  //////////////////////////////// update Policies Mutations ///////////////////////////////
  

  
  export const useUpdateMutationPolicy = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation(updatePolicy,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('policies');
         navigate('/Privacy-Policy')
      },},{
        onError:(err) => {
          console.error('Error updating policy:', err);
          alert('Failed to update policy. Please try again later.');
        }
      });};

