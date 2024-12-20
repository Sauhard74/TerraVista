import { supabase } from "../supabase";

// Fetch all available orders
export const getAllOrders = async () => {
  try {
    const { data, error } = await supabase.from("orders").select("*");

    if (error) throw error;
    return { success: true, orders: data };
  } catch (error) {
    console.error("Get All Orders Error:", error.message);
    return { success: false, error: error.message };
  }
};
