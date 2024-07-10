import React, { FC } from 'react';
import './PhotographySubjectList.scss';
import { PhotographySubjectDetails } from '../../Models/PhotographySubjectDetails.model';
import PhotographySubject from '../PhotographySubject/PhotographySubject';

interface PhotographySubjectListProps {}

const PhotographySubjectList: FC<PhotographySubjectListProps> = () => {
  let PhotographySubjectArr=[
    new PhotographySubjectDetails("סמאשקייק"
      ,"צילומי סמאשקייק הם אחד הטרנדים המתוקים והמהנים ביותר בתחום הצילום לילדים. מדובר בצילומים שמבוצעים בדרך כלל לקראת יום ההולדת הראשון של הילד, בהם הילד מקבל עוגת יום הולדת קטנה ונעזב לגלות אותה, לגעת בה, לטעום ממנה ולמעשה אותה."
   
      ,"/img/smashcake/2.jpg"),
    new PhotographySubjectDetails("ניו בורן","666","/img/newborn/IMG_20200327_155041.jpg"),
    new PhotographySubjectDetails("בת מצווה","666","/img/batmitzva/כריכה.jpg"),
    new PhotographySubjectDetails("בר מצווה","666","/img/barmitzva/43.JPG"),
    new PhotographySubjectDetails("ילדים","666","/img/childrens/נתי3.jpg"),
    new PhotographySubjectDetails("משפחה","666","/img/family/IMG-20200513-WA0042.jpg"),
    new PhotographySubjectDetails("חלאקה","666","/img/chalake/15.jpg"),
    new PhotographySubjectDetails("גיל שנה","666","/img/shana/16.jpg"),
    new PhotographySubjectDetails("אוכל","666","/img/food/עוגיות.jpg"),
    new PhotographySubjectDetails("עוגות וברים","666","/img/cacksandbar/IMG_1160.JPG"),
    new PhotographySubjectDetails("צילומי סטילס","666","/img/stils/100.jpg"),
    new PhotographySubjectDetails("עבודות גרפיקה","666","/img/graphic/הזמנה.jpg"),
    new PhotographySubjectDetails("טבע","666","/img/nof/IMG_2835.JPG"),
    new PhotographySubjectDetails("Fashion","666","/img/Fashion/IMG_1774.JPG"),
    new PhotographySubjectDetails("pregnancy","666","/img/pregnancy/IMG_5123.jpg"),
    new PhotographySubjectDetails("עיצובי אלבומים","666","/img/amud/עמוד 1.jpg"),
    
  ]

  return (
  <div>
    <h1>סוגי צילום</h1>
    <div className="PhotographySubjectList">
      
      
      {PhotographySubjectArr.map((i, index) => (
        <div className="PhotographySubjectItem" key={index}>
          <PhotographySubject photographySubjectDetails={i} />
        </div>      ))}
    </div>
    </div>
  );
}

export default PhotographySubjectList;
