import { supabase } from "../supabase";

// Place a new bid
export const placeBid = async (sellerId, orderId, price, details) => {
  try {
    const { data, error } = await supabase
      .from("bids")
      .insert({
        seller_id: sellerId,
        order_id: orderId,
        price,
        details,
      });

    if (error) throw error;
    return { success: true, bid: data[0] };
  } catch (error) {
    console.error("Place Bid Error:", error.message);
    return { success: false, error: error.message };
  }
};
