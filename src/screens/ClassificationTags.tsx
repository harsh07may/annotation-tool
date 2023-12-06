import { ChangeEvent } from "react";
import useLabelState from "../hooks/useLabelState";

const ClassificationTags = () => {
  const [input, setInput] = useLabelState<string>("", "Input");
  const [tags, setTags] = useLabelState<string[]>([], "Tags");
  const [selectedTag, setSelectedTag] = useLabelState("", "selected tags");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setTags((prev) => [...prev, input]);
  };
  return (
    <section>
      <input
        type="text"
        className="border-b outline-none focus:border-b focus:border-black "
        name="tagInput"
        onChange={handleChange}
      />
      <button
        className="p-1 bg-green-400 border rounded"
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
    </section>
  );
};
export default ClassificationTags;
