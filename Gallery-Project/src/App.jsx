import axios from 'axios';
import { useEffect, useState } from 'react';
import FeedCard from './FeedCard'
import Pagination from './Pagination';

const App = () => {

const [imageData, setImageData] = useState([])
const [index, setIndex] = useState(1)
const [loading, setLoading] = useState(false);


async function getData() {
setLoading(true)
try {
  const response = await axios.get(
    `https://picsum.photos/v2/list?page=${index}&limit=5`,
  );
  setImageData(response.data);
  console.log(response.data);
} catch (error) {
  console.log(error);
} finally {
  setLoading(false)
}
  
}


useEffect(()=>{
  getData()
},[index])


// const data = imageData.map(function (elm) {
//   return <img src={elm.download_url} />;
// });

  return (
    <>
      { loading ? (
        <h2 className='h-full bg-black text-white'>Loading...</h2>
      ) : (
        imageData.map((elm, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-wrap lg:flex-nowrap justify-center gap-6 p-6"
            >
              <FeedCard
                image={elm.download_url}
                author={elm.author}
                url={elm.url}
              />
            </div>
          );
        })
      )}
      <Pagination index={index} setIndex={setIndex} />
    </>
  );
}

export default App
