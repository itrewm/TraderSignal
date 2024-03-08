import styles from "@/app/ui/dashboard/signals/addSignal/addSignal.module.css"
import {fetchSignals} from "@/app/libs/data"
import { addSignal } from "@/app/libs/actions"


const AddSignalPage = () => {
    return (
      <div className={styles.container}>
        <form action={addSignal} className={styles.form}>
          
          <select name="asset" id="type">
            <option value="general">Trade on ...</option>
            <option value="Gold (xauusd)">Gold (xauusd)</option>
          </select>

          <select name="buy_or_sell" id="type">
            <option value="general">Buy or sell?</option>
            <option value="1">Buy</option>
            <option value="0">Sell</option>
          </select>
          
          <input type="text" placeholder="entry"name="entry"/>
          <input type="text" placeholder="tp" value="+20pips" name="tp"/>
          <input type="text" placeholder="sl" value="-50pips" name="sl"/>
          <button type="submit">Create Signal</button>
        </form>
      </div>
    )
  }
  
  export default AddSignalPage