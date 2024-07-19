import { useQuery,useQueryClient,useMutation} from 'react-query';
import api from '../Api'


////////////////////////////fetch Orders//////////////////

const fetchOrders = async () => {
const response = await api.get(`/orders`);
console.log(response.data)
return response.data;
};
 
/////////////////////////////add Orders ////////////////////////////////


  const addOrder = async (newOrder) => {
  const response = await api.post(`/orders/order`,newOrder);
  console.log(response.data)
  return response.data;
  };

//////////////////////// delete Orders /////////////////////////////////



  const deleteOrder = async (id) => {
  const response = await api.delete(`/orders/${id}`);
  console.log(response.data)
  return response.data;
  };

/////////////////////// update Orders ///////////////////////////////


  const updateOrder = async (OrderData,id) => {
  const response = await api.patch(`/orders/${id}`,OrderData); 
  console.log(response.data)
  return response.data;
  };


////////////////////////// fetching Orders mutations /////////////////////////////////////

 // 
 export const useOrders = () => {
 return useQuery('orders', fetchOrders);
 };

 ///////////////////////// Add order Mutations ////////////////////////////////////////////////

 
 
 export const useAddOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(addOrder,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('orders');
      },
    },
    {
      onError:(err) => {
        console.error('Error adding order:', err);
        alert('Failed to add order. Please try again later.');
      }
    }
    );};

 ///////////////////////////// delete order Mutations /////////////////////////////////
  

  export const useDeleteMutationOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteOrder,
    {
        onSuccess: () => {
        queryClient.invalidateQueries('orders');
      },},
      {
        onError:(err) => {
          console.error('Error deleting order:', err);
          alert('Failed to delete order. Please try again later.');
        }
      }
    
    );};

  //////////////////////////////// update order Mutations ///////////////////////////////
  

  
  export const useUpdateMutationOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(updateOrder,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('orders');
      },},{
        onError:(err) => {
          console.error('Error updating order:', err);
          alert('Failed to update order. Please try again later.');
        }
      });};

