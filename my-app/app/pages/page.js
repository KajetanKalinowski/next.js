import ItemList from "/app/components/ItemList.js";
import TextBlock from "/app/components/TextBlock.js";
import ImageWithText from "/app/components/ImageWithText.js";
import ConditionalDisplay from "/app/components/ConditionalDisplay.js"
import SimpleForm from "/app/components/SimpleForm.js"
import ListWithObjects from "/app/components/ListWithObjects.js"

function HomePage() {
    return( <div style={{ display: 'flex', 'align-items': 'center', 'justify-content': 'center','flex-direction':'column','flex-wrap': 'wrap' }}>
    <h1 style={{margin:'15px'}}>Kajetan Kalinowski</h1>
    <ItemList/>
    <TextBlock/>
    <ImageWithText
    imageUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAKQMBEQACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAEBQYDBwIA/8QANRAAAgECBQIDBQUJAAAAAAAAAQIDBBEABRIhMRNBIlFhBhSRocFTcYHR8RUWMkJSVZKTsf/EABoBAAIDAQEAAAAAAAAAAAAAAAQFAQIDAAb/xAAvEQACAgEDAgQFAwUBAAAAAAABAgADEQQSITFBE1GhwQVhcYGxItHwQlJykaIU/9oADAMBAAIRAxEAPwASlpVgneeeeIk28EV3Pl28PzwubXJ/QCftDxp2J5OIwbJMuq5xUzxVxU2GlVCgAjk9/wBMLr/iNwbG0L6/tCE0q465jdfZ3KqXLz0cvh1XuZNyw35uSfuxTRau6y9VY9f2/mJS6pFQkQY0cMt1qE8abBx3GPRxfnymnRCpp7cYtKmZ9P7sTOieDK5wfeHZTNJZSBsqj1OFVd5d9sPasKuZXU6DpQwoDIpS2ttiPW3bkYUa9B+tx13Y9JvQxGAemI0SnkqoDAlgrEkaRb+a/wBB8cd8PV//AFKe3I++DKakrsPnPFX7PzwUb1GvUIxcgje3nj1WIs3RBUShLbXuO2JzOg3vQ+zOOzOxBmyrOM56T0TGKnY+EAWNvMn1wtr07KOOsNe0d5XZXlXuqQrK5MsaBdzubDf52wp1tIIHPOSf9cTWuw88dpQZXEsHRLMCW1Ek9hYfXBHw5QjVk9Tu/A95jqG3Z+WIdPVw6THs2rYjD/cIFgzmWYRru0b7YkyRAujJ5NistOgR5rl8OX08lOR05NOggc4HbVVrWH7GaChyxWARVaVkzt03soNgbrfj8/8AuPL33+KRx0B9TGK17B9YYJHdWjhUlx/Dbv5/jtgnSWg2IqjnnH49pjYnBJi/Pqmsy2hdxSSyEjxOOEHc7d8ehRG6mBEjoIgpJInhjeU61t4Je34jzxvM5t1Ift1+GJzOxGmc5nHRxPFGgKwRllRRwANvnbHmtdqSX8BO3pG2np/TvPeeMqrNUihYrnUHa7HaJwQp45uOOwN8K0AUbjzzia2eUOgzMRI9UE8CAG3G7C/1x1epei3eB0z69ZDUbgFPefft6N5V2KB9lLcN+eGlPxYsw3DH87zJ9Dhc5k/n+XTZTUy1uWwdSldRJJSgX0G2+kYcnV1h/DbgwAUsV3CTX75039un/wBRxt4q+cjwmjb2czKKfKaP3qAS+BoWmQ2dNPF9t9gLXx5a1hvZLRkDkdj9j8vIx1VWzLlGwfLsZRUopZmVoa22sadJUaub7b3HwwMBpl5ZmH1X3BMixbl6pC1pYnWdWlB6ltaqNuB2v6HFGfSIufE/5My32Ag7fWL4MtoKWZFeSWsmRg0aS2KRkcHSNtj5k4OqJFfjV17V/ubv/ivfPbtM3saxsE/Ye5jCaQsSWJJPJOB2cscscmbBQBgQW0f9C/44rulpIeycUmVmqpKk6QrCRXvsyna/yGKa8i8K6/SVA28GOqSvSoqhT1FKpe9tXTYA+oIBBHre2BLKmrXejeslL3BwDHYWOlgkkp4NThSdC8uebb9zgLc1zqljcfiakmxgGPEEo1mMrvKyqt9TIqgeM83+gO+G1lyPtA52jGfkOgHuRIxWowg5m8rXucRuzKwfWMTmdP/Z"
    text="image"/>
    <SimpleForm
    placeholder="Wpisz tekst"/>
    <ConditionalDisplay
    isVisible="true"/>
    <ListWithObjects
    items={[{name:'test1', value:'cos1'}, {name:'test2', value:'cos2'}]}
    />
    </div>
    );
  }
  export default HomePage;
