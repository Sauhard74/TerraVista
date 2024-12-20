import { supabase } from "../supabase";

// Get all bids for a specific order
export const getBidsForOrder = async (orderId) => {
  try {
    const { data, error } = await supabase
      .from("bids")
      .select("*")
      .eq("order_id", orderId);

    if (error) throw error;
    return { success: true, bids: data };
  } catch (error) {
    console.error("Get Bids for Order Error:", error.message);
    return { success: false, error: error.message };
  }
};
