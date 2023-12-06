interface Annotation {
  annotations: [number, number, string][];
}

interface YourData extends Annotation {
  classes: string[];
  textContent: string;
}

interface HighlightedTextProps {
  data: YourData;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ data }) => {
  const highlightText = () => {
    const { textContent, annotations } = data;

    if (!annotations || annotations.length === 0) {
      return textContent;
    }

    let result = "";
    let currentIndex = 0;

    annotations.forEach(([start, end]) => {
      result +=
        textContent.substring(currentIndex, start) +
        `<span style="background-color: red;">` +
        textContent.substring(start, end) +
        "</span>";
      currentIndex = end;
    });

    result += textContent.substring(currentIndex);

    return result;
  };

  return (
    <pre
      className="border"
      dangerouslySetInnerHTML={{ __html: highlightText() }}
    />
  );
};
export default HighlightedText;
