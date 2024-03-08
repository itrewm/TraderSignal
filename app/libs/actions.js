import { Signal } from "./models"
import { Package } from "./models"
import { connectToDB } from "./utils"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const addSignal = async(formData) => {
    "use server"
    const asset = formData.get("asset")
    const buy_or_sell = formData.get("buy_or_sell")
    const tp = formData.get("tp")
    const sl = formData.get("sl")
    const entry = formData.get("entry")
    try{
        connectToDB()
        const newSignal = new Signal({
            asset,
            entry,
            tp,
            sl,
            buy_or_sell
            
        })
        await newSignal.save()
        

    }catch(err){
        throw Error(err)
    }
    revalidatePath("/dashboard/signals");
    redirect("/dashboard/signals");
}


export const addPackage = async(formData) => {
    "use server"
    const name = formData.get("name")
    const price = formData.get("price")
    const subscribe_day = formData.get("subscribe_day")
    const detail = formData.get("detail")
    const signals_per_week = formData.get("weekly_signal")
    const signals_per_month = formData.get("monthly_signal")
    
    
    try{
        connectToDB()
        const newPackage = new Package({
            name,
            price,
            subscribe_day,
            detail,
            signals_per_week,
            signals_per_month
            
        })
        await newPackage.save()
        

    }catch(err){
        throw Error(err)
    }
    revalidatePath("/dashboard/packages");
    redirect("/dashboard/packages");
}


export const updatePackage = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        title,
        desc,
        price,
        stock,
        color,
        size,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};
  
