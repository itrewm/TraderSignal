
"use client"

import Search from "@/app/ui/dashboard/search/page"
import styles from "@/app/ui/dashboard/signals/signal.module.css"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { useState, useEffect } from 'react'
import Modal from 'react-modal';



const PackagesPage =  ({searchParams}) => {
  
  let subtitle;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      backgroundColor: '#182237',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [signals, setSignals] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'white';
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch('/api/getPackage')
      .then((res) => res.json())
      .then((data) => {
        setSignals(data)
      })
  }, [])


  //Handler Delete Button
  const handleDeleteSubmit = async (event) => {
 
    event.preventDefault();
    const id = event.target.elements.id.value;

    try {
      const response = await fetch(`/api/deletePackage?id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Package deleted successfully, refresh the page
        window.location.reload();
      } else {
        // Handle error response from the API
        console.error('Error deleting package:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };
  
  return (
    
    <div className={styles.container}>

      <div className={styles.top}>
        
        <Search/>

        <Link href="/dashboard/packages/add">
          <button className={styles.addButton}>add new</button>
        </Link>
      
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>name</td>
            <td>price</td>
            <td>subscribe day</td>
            <td>price</td>
            <td>detail</td>
          </tr>
        </thead>
        
        <tbody>
        {signals.map(signal => (
          <tr key={signal._id}>
            <td>
              {signal.name}
            </td>
            <td>
              {signal.price}
            </td>
            
            <td>
              {signal.subscribe_day}
            </td>
            <td>
              {signal.price}
            </td>
            <td>
              {signal.detail}
            </td>
  
            <td>
              <div className={styles.buttons}>
                <Link href="">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>  
                <Link href="">
                  <button className={`${styles.button} ${styles.reply}`} onClick={openModal}>Reply</button>
                </Link>

                <Link href="">
                  <button className={`${styles.button} ${styles.send}`}>Send</button>
                </Link>

                <form onSubmit={handleDeleteSubmit} className={styles.form}>
                  {/* Your form inputs go here */}
                  <input type="hidden" value={signal._id} name='id'></input>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>

                </form>
        
              </div>
            </td>

          </tr>
        ))}
          
        </tbody>
      </table>
      <Pagination/>
        

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">

        <div className={styles.title}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Send Reply</h2>
          <button onClick={closeModal} className={styles.closeButton}>X</button>
        </div>
          
          
        <table style={{color:'#b7bac1'}} className={styles.table}>
          
          <tbody>
            <tr>
              <td>✅ | تارگت 1 موفق</td>
              <td>💸 | میزان سود : 20+ Pip</td>
              <td>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              </td>
            </tr>
            <tr>
              <td>✅ | تارگت 2 موفق</td>
              <td>💸 | میزان سود : 40+ Pip</td>
              <td>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              </td>
            </tr>
            <tr>
              <td>✅ | تارگت 3 موفق</td>
              <td>💸 | میزان سود : 60+ Pip</td>
              <td>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              </td>
            </tr>
            <tr>
              <td>✅ | تارگت 4 موفق</td>
              <td>💸 | میزان سود : 80+ Pip</td>
              <td>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              </td>
            </tr>
            <tr>
              <td>✅ | تارگت 5 موفق</td>
              <td>💸 | میزان سود : 100+ Pip \n 🌟 | فول تارگت</td>
              <td>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              </td>
            </tr>

            <tr>
              <td>⛔️ | استاپ</td>
              <td>⚠️ | میزان ضرر : 50- Pip</td>
              <td>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              </td>
            </tr>

          </tbody>
        </table>
        <button className={styles.sendReply}>Send Reply</button>
      </Modal>
    </div>
  )
}

export default PackagesPage