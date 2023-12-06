/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
// import Classification from "./screens/ClassificationTags";
// import HighlightedText from "./components/HighlightedText";
import ClassificationTags from "./screens/ClassificationTags";

type AnnotationData = {
  classes: string[];
  textContent: string;
  annotations: [number, number, string][];
};

function App() {
  // const [data, setData] = useState<AnnotationData | null>(null);
  // const text =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem culpa autem ipsum. Harum eius incidunt, eveniet natus inventore illum molestias consequuntur nesciunt obcaecati saepe sed unde maiores laudantium quidem?";

  // const handleTextSelection = () => {
  //   const selectedText = window.getSelection()?.toString();
  //   if (selectedText) {
  //     console.log(selectedText);
  //   }
  // };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       try {
  //         const jsonData = JSON.parse(e.target?.result as string);
  //         console.log(jsonData);
  //         setData(jsonData);
  //       } catch (error) {
  //         console.error("Error parsing JSON:", error);
  //       }
  //     };

  //     reader.readAsText(file);
  //   }
  // };
  return (
    <>
      <h1>Annotation Tool</h1>
      <ClassificationTags />
      {/* <section>
        <input type="file" accept=".json" onChange={handleFileChange} />
        {data && <HighlightedText data={data} />}
      </section> */}
    </>
  );
}

export default App;
