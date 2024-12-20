import { supabase } from "../supabase";

// Create a new order
export const createOrder = async (buyerId, product, quantity, price, region) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .insert({
        buyer_id: buyerId,
        product,
        quantity,
        price,
        region,
        status: "pending", // Default status
      });

    if (error) throw error;
    return { success: true, order: data[0] };
  } catch (error) {
    console.error("Create Order Error:", error.message);
    return { success: false, error: error.message };
  }
};

// Get all orders for a specific buyer
export const getBuyerOrders = async (buyerId) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("buyer_id", buyerId);

    if (error) throw error;
    return { success: true, orders: data };
  } catch (error) {
    console.error("Get Buyer Orders Error:", error.message);
    return { success: false, error: error.message };
  }
};
