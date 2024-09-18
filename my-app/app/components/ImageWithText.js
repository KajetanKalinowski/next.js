function ImageWithText({ imageUrl, text }) {
    return (
      <div><img src={imageUrl} alt={text} style={{ width: '130px', height: '160px' }} /><p>{text}</p></div>  );
  }export default ImageWithText;