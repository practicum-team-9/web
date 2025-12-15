import { useState, useEffect } from "react";
import { FormsList } from "@widgets";
import Loader from "@/shared/ui/Loader/Loader";

function Forms({ getForms }) {
  const [forms, setForms] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getForms()
      .then((forms) => {
        setForms(forms.data)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      });
  }, [getForms]);

  if (isLoading) {
    return <Loader />
  }
  return <FormsList forms={forms} />;
}

export default Forms;
