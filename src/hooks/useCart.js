import { useEffect, useState } from "react";
import useFirebase from "./useFirebase.js";

const useCart = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [selectedCourse, setSelectedCourse] = useState([]);

  useEffect(() => {
    fetch(`https://powerful-shore-86352.herokuapp.com/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setSelectedCourse(data);
        }
      });
  }, [uid]);

  function addToCart(course) {
    const isHave = selectedCourse.find(
      (selected) => selected._id === course._id
    );
    delete course._id;
    course.uid = uid;
    course.status = "pending";

    if (isHave) {
      alert("Food has been Added!");
    } else {
      fetch("https://powerful-shore-86352.herokuapp.com/course/add", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(course),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const newSelection = [...selectedCourse, course];
            setSelectedCourse(newSelection);
          }
        });
    }
  }

  function remove(id) {
    fetch(`https://powerful-shore-86352.herokuapp.com/delete/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const selectAfterRemove = selectedCourse.filter(
            (course) => course._id !== id
          );
          setSelectedCourse(selectAfterRemove);
        } else {
          alert("something went wrong!!");
        }
      });
  }

  return { setSelectedCourse, remove, addToCart, selectedCourse };
};

export default useCart;
