import axios from "axios";
const InputTextFile = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const API_URL = "";

    if (file) {
      axios.post(API_URL, file);
      console.log(file);
    }
  };
  return (
    <>
      <input type="file" accept=".json" onChange={handleFileChange} />
    </>
  );
};
export default InputTextFile;
