import "./styles.css";

export default function GrayBackgroundText(props) {
  return (
    <div className="gray-background">
      {props.text}
      {props.children}
    </div>
  );
}
