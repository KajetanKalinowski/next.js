import ItemList from "/app/components/ItemList.js";
import TextBlock from "/app/components/TextBlock.js";
import ImageWithText from "/app/components/ImageWithText.js";
import Link from 'next/link';
function HomePage() {
    return( <div>
    <h1>Kajetan Kalinowski</h1>
    <ItemList/>
    <TextBlock/>
    <ImageWithText
    imageUrl=""
    text="image"/>
    </div>
    );
  }
  export default HomePage;
