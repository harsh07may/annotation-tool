/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent } from "react";
import useLabelState from "./hooks/useLabelState";

function App() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem culpa autem ipsum. Harum eius incidunt, eveniet natus inventore illum molestias consequuntur nesciunt obcaecati saepe sed unde maiores laudantium quidem?";

  const [input, setInput] = useLabelState<string>("", "Input");
  const [tags, setTags] = useLabelState<string[]>([], "Tags");
  const [selectedTag, setSelectedTag] = useLabelState("", "selected tags");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setTags((prev) => [...prev, input]);
  };
  const handleTextSelection = () => {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      console.log(selectedText);
    }
  };
  return (
    <>
      <h1>Annotation Tool</h1>

      <input
        type="text"
        className="outline-none border-b focus:border-b focus:border-black "
        name="tagInput"
        onChange={handleChange}
      />
      <button
        className="border p-1 bg-green-400 rounded"
        onClick={handleSubmit}
      >
        +
      </button>
      <div>
        {tags &&
          tags.map((tag, id) => (
            <button
              key={id}
              onClick={() => setSelectedTag(tag)}
              className={`bg-pink-200 m-1 ${
                selectedTag == tag && " border-2 border-red-500"
              }`}
            >
              {tag}
            </button>
          ))}
      </div>

      <div className="max-w-lg p-10" onMouseUp={handleTextSelection}>
        {text}
      </div>
    </>
  );
}

export default App;
