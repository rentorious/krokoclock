import React, { useEffect } from "react";
import useFireStore from "../hooks/useFirestore";
import { projectFirestore, projectStorage } from "../firebase/config";
import { motion } from "framer-motion";

export default function ImageGrid({
  allImgs,
  setSelectedImg,
  setAllImgs,
  startKroki,
}) {
  const { docs } = useFireStore("images");

  useEffect(() => {
    setAllImgs(docs.map((doc) => doc.url));
  }, [docs, setAllImgs]);

  const handleClick = (e, imgUrl) => {
    if (e.target.classList.contains("delete-btn")) return;

    setSelectedImg(imgUrl);
    const index = allImgs.indexOf(imgUrl);
    startKroki(index);
  };

  const deleteImg = (doc) => {
    projectFirestore
      .collection("images")
      .doc(doc.id)
      .delete()
      .then(() => {
        console.log("Deleted from database!");
      })
      .catch((error) => console.log(error));

    let imgRef = projectStorage.refFromURL(doc.url);
    imgRef
      .delete()
      .then(() => console.log("Deleted from storage!"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={(e) => handleClick(e, doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <motion.button
              className="delete-btn"
              onClick={() => deleteImg(doc)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              x
            </motion.button>
          </motion.div>
        ))}
    </div>
  );
}
