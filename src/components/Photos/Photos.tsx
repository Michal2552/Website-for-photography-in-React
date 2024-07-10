import React, { FC, useEffect, useState } from 'react';
import './Photos.scss';
import { useParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Loading from '../Loading/Loading';

interface Photo {
  url: string;
  title: string;
}

const dummyData: { [key: string]: Photo[] } = {
  'סמאשקייק': [
    { url: '/img/smashcake/7.jpg', title: 'סמאשקייק 1' },
    { url: '/img/smashcake/2.jpg', title: 'סמאשקייק 2' },
    { url: '/img/smashcake/קולאג.jpg', title: 'סמאשקייק 1' },
    { url: '/img/smashcake/IMG_5083.jpg', title: 'סמאשקייק 2' },
    { url: '/img/smashcake/IMG_4952.jpg', title: 'סמאשקייק 1' },
    { url: '/img/smashcake/111.jpg', title: 'סמאשקייק 2' },
  ],
  'ניו בורן': [
    { url: '/img/newborn/יאיר 1.jpg', title: 'ניו בורן 1' },
    { url: '/img/newborn/IMG_20200327_155041.jpg', title: 'ניו בורן 2' },
    { url: '/img/newborn/Untitled-2.jpg', title: 'ניו בורן 2' },
  ],
  'בר מצווה': [
    { url: '/img/newborn/יאיר 1.jpg', title: '' },

  ],
  'בת מצווה': [
    { url: '/img/newborn/יאיר 1.jpg', title: 'ניו בורן 1' },

  ],
  'ילדים': [
    { url: '/img/childrens/1.jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/2.jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/4(2).jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/12.jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/33.jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/IMG_6787.jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/IMG_7249.jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/נתי3.jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/נתי8.jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/נתי23.jpg', title: 'ניו בורן 1' },
    { url: '/img/childrens/תמי ויעל.jpg', title: 'ניו בורן 1' },

  ],
  'food': [
    { url: '/img/newborn/יאיר 1.jpg', title: 'ניו בורן 1' },

  ],
  'עיצובי אלבומים': [
    { url: '/img/amud/כריכה.jpg', title:  '' },
    { url: '/img/amud/עמוד 1.jpg', title:  '' },
    { url: '/img/amud/עמוד 3.jpg', title:  '' },
    { url: '/img/amud/עמוד 4.jpg', title:  '' },
    { url: '/img/amud/עמוד 6.jpg', title:  '' },
    { url: '/img/amud/עמוד 7.jpg', title:  '' },
    { url: '/img/amud/עמוד 8.jpg', title:  '' },
    { url: '/img/amud/עמוד 10.jpg', title:  '' },
    { url: '/img/amud/עמוד 11.jpg', title:  '' },
    { url: '/img/amud/עמוד111.jpg', title:  '' },
    { url: '/img/amud/.jpg', title:  '' },
    { url: '/img/amud/.jpg', title:  '' },

  ],
};

const Photos: FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const subjectPhotos = dummyData[id] || [];
      setPhotos(subjectPhotos);
      setLoading(false);
    }
  }, [id]);

  const breakpointColumnsObj = {
    
    1100: 2,
    700: 1,
  };

  return (
    <div className="photos">
      {loading ? (
        <div className="loading"><Loading /></div>  // You can replace this with your Loading component
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default Photos;

