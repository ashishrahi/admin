import { useQuery,useQueryClient,useMutation} from 'react-query';
import api from '../../../utilities/Api'
import { useNavigate } from 'react-router-dom';

////////////////////////////fetch About//////////////////

const fetchAbout = async () => {
const response = await api.get(`/abouts`);
console.log(response.data)
return response.data;
};
 
/////////////////////////////add About////////////////////////////////


  const addAbout = async (newAbout) => {
  const response = await api.post(`/abouts/about`,newAbout);
  console.log(response.data)
  return response.data;
  };

//////////////////////// delete About /////////////////////////////////



  const deleteAbout = async (id) => {
  const response = await api.delete(`/abouts/${id}`);
  console.log(response.data)
  return response.data;
  };

/////////////////////// update Abouts ///////////////////////////////


  const updateAbout = async (aboutData,id) => {
  const response = await api.patch(`/abouts/${id}`,aboutData); 
  console.log(response.data)
  return response.data;
  };


////////////////////////// fetching Abouts /////////////////////////////////////

  
 export const useAbout = () => {
 return useQuery('abouts', fetchAbout);
 };

 ///////////////////////// Add About Mutations ////////////////////////////////////////////////

 
 
 export const useAddAbout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation(addAbout,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('abouts');
        navigate(`/About`)
      },
    },
    {
      onError:(err) => {
        console.error('Error adding about:', err);
        alert('Failed to add about. Please try again later.');
      }
    }
    );};

 ///////////////////////////// delete about Mutations /////////////////////////////////
  

  export const useDeleteAbout = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAbout,
    {
        onSuccess: () => {
        queryClient.invalidateQueries('abouts');
      },},
      {
        onError:(err) => {
          console.error('Error deleting about:', err);
          alert('Failed to delete about. Please try again later.');
        }
      }
    
    );};

  //////////////////////////////// update about Mutations ///////////////////////////////
  

  
  export const useUpdateAbout = () => {
    const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation(updateAbout,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('abouts');
        navigate(`/About`)
      },},{
        onError:(err) => {
          console.error('Error updating about:', err);
          alert('Failed to update about. Please try again later.');
        }
      });};

