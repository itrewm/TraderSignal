import {Package, Signal} from "./models"
import {connectToDB} from "./utils"


export const fetchSignals = async(page) => {
    const ITEM_PER_PAGE = 2
    try{
        connectToDB();
        const signals = Signal.find().limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * ( page - 1));
        return signals
        
    }catch(error){
        throw new Error(error)
    }
}


export const fetchPackage = async (id) => {
    try {
      connectToDB();
      const product = await Package.findById(id);
      return product;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch product!");
    }
  };
  