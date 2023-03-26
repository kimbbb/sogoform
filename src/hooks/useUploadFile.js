import { useState } from "react"

const useUploadFile = () => {

  const [file, setFile] = useState()


  const onChangeFile = (e) => {
    console.log(e)
  }

  return {}
}

export default useUploadFile