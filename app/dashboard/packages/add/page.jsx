import styles from "@/app/ui/dashboard/signals/addSignal/addSignal.module.css"
import { addPackage } from "@/app/libs/actions"


const AddSignalPage = () => {
    return (
      <div className={styles.container}>
        <form action={addPackage} className={styles.form}>
          
            <input type="text" placeholder="Package name"name="name"/>
            <input type="text" placeholder="Price ( Tether )"name="price"/>
            <input type="number" placeholder="Subscribe day"name="subscribe_day"/>
            <input type="text" placeholder="Signals per week"name="weekly_signal"/>
            <input type="text" placeholder="Signals per month"name="monthly_signal"/>
            <input type="text" placeholder="Detail"name="detail"/>
            <button type="submit">Create Package</button>

        </form>
      </div>
    )
  }
  
  export default AddSignalPage