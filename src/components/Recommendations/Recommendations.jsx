import React from "react";
import "./Recommendations.css";

const recommendationsData = [
  {
    name: "Shireen Pilay",
    title: "Head of Sales for ADR-Oracle SA",
    text: "I am writing a recommendation for Zaher Dirani. I had the privilege of having Zaher as part of my Software team in Nokia. He is a dedicated, committed, and hardworking individual. Zaher is a very experienced and skilled person. He was my key support go-to person when reporting to me. He is a very knowledgeable, great presenter and does his homework and research before any customer meeting. I admired Zaher's passion and drive to wanting to make a difference in everything he gets involved in. His determination and drive will definitely make him successful and he is a true asset to any company. Best of luck Zaher and good luck in your career."
  },
  {
    name: "Jacques Rahi",
    title: "Key Account Director/ Sales Director Nokia Networks",
    text: "To whom it may concern, I have known Zaher for almost a decade and managed him directly during his duties as account manager for applications and analytics. I was always amazed by Zaher's positive attitude, high work ethics, commitment to over achieve and delivering high quality output. All this on top of a world class technical knowledge that makes Zaher an asset for every technical sales team he joins. I strongly recommend Zaher and please don't hesitate to consider me when asking for references about Zaher."
  },
  {
    name: "Christophe Landemaine",
    title: "Business Development Manager, Emerging Products, Europe Market at Nokia",
    text: "I had the chance to work closely with Zaher on Cognitive Networking Solutions (Self-Organizing Network) Business development and pre-sales activities for MEA region (digital transformation projects), he is very professional, very hard-working and very well structured in his work. His enthusiastic style and friendly nature are appreciated by customers and Nokia colleagues. He always has a very positive attitude, he is very open, very supportive and cooperative, even under challenging circumstances. Zaher has outstanding communications and presentations skills, with a strong business drive, continuously focusing on customers’ needs and how to bring value to customers. "
  },
  {
    name: "Sundarraj R from Bangalore",
    title: "Product Manager",
    text: "Zaher is a bold character of note. He makes great 1st impressions and keep on delivering. He has the gifting and flamboyancy too make any complex solution looks simple with his unique style that audiences love. He supported me in technical sales management role on many occasions that was well received by the customers. He is loved by the customer and his followed colleagues and always have time to make real connections. He’s a diligent hard worker and a very capable sales manager with a lot of technical skills and understanding, and I’m sure he’ll be as successful in any position Sales requires a natural skill in dealing with people and knowing the right thing to say, and this was perhaps where Zaher set himself apart the most. Customers simply loved him and he was able to connect with them in a meaningful way. His skills, and the results he achieved, make sure that he comes with the highest recommendation."
  },
  {
    name: "Christo Erasmus",
    title: "Sales Manager",
    text: "Zaher is a bold character of note. He makes great 1st impressions and keep on delivering. He has the gifting and flamboyancy too make any complex solution looks simple with his unique style that audiences love. He supported me in technical sales management role on many occasions that was well received by the customers. He is loved by the customer and his followed colleagues and always have time to make real connections. He’s a diligent hard worker and a very capable sales manager with a lot of technical skills and understanding, and I’m sure he’ll be as successful in any position Sales requires a natural skill in dealing with people and knowing the right thing to say, and this was perhaps where Zaher set himself apart the most. Customers simply loved him and he was able to connect with them in a meaningful way. His skills, and the results he achieved, make sure that he comes with the highest recommendation."
  }
];

function Recommendations() {
  return (
    <div className="recommendations-container">
      <h1 className="h1-design">Recommendations</h1>
      <div className="recommendation-cards">
        {recommendationsData.map((recommendation, index) => (
          <RecommendationCard key={index} {...recommendation} />
        ))}
      </div>
    </div>
  );
}

function RecommendationCard({ name, title, date, text }) {
  return (
    <div className="recommendation-card">
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Recommendations;
