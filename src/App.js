import React from "react";
import ImageGrid from "./comps/ImageGrid";
import IntervalSetter from "./comps/IntervalSetter";
import Modal from "./comps/Modal";
// import Timer from "./comps/Timer";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import useKroki from "./hooks/useKroki";

function App() {
  const {
    startKroki,
    stopKroki,
    allImgs,
    setAllImgs,
    setSelectedImg,
    selectedImg,
    setSpeed,
  } = useKroki();

  return (
    <div className="App">
      <Title />
      <UploadForm />
      {/* {selectedImg && <Timer timeLeft={timeLeft} />} */}
      <ImageGrid
        allImgs={allImgs}
        setAllImgs={setAllImgs}
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        startKroki={startKroki}
      />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          stopKroki={stopKroki}
        />
      )}
      <IntervalSetter setSpeed={setSpeed} />
    </div>
  );
}

export default App;
