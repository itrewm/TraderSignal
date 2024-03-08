"use client"

import { MdSearch } from "react-icons/md"
import styles from "./search.module.css"
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Search = () => {

  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((e) => {
    
    const params = new URLSearchParams(searchParams);
    console.log("-----------------------")
    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);


  return (
    <div className={styles.container}>
      <MdSearch/>
      <input type="text" className={styles.input} placeholder="search" onChange={handleSearch}/>
    </div>
  )
}

export default Search