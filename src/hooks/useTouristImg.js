import { useEffect, useState } from 'react';

function useTouristImg(destination) {
  const [imgURL, setImgURL] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setImgURL(`https://astraea-project.s3-us-west-2.amazonaws.com/${destination}/tourist.jpg`)
        }, 2000);
        
    })
  return imgURL;
}

export default useTouristImg;