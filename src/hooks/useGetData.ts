import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../dataSlice";

function useGetData() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const jsonData = await response.json();
        dispatch(updateData(jsonData));
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchData();
  }, [dispatch]);
  return { loading };
}

export default useGetData;
