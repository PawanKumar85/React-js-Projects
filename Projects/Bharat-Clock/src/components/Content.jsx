function Content() {
    const current = new Date();
  return (
    <div>
      <p>This is the clock that shows the time in Bharat at all time Zone</p>
      <p>
        This is current time : {current.toLocaleTimeString()} - {current.toLocaleDateString()}
      </p>
    </div>
  );
}
export default Content;
