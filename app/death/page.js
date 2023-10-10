import React from 'react'
import Card from '@/components/Card'
import a from "../../public/img/crow.jpeg";
import b from "../../public/img/iris.png"
const y=[{image1:a,title1:"Passing",
content1:"On 27 July 1890, aged 37, Van Gogh shot himself in the chest with a revolver. The shooting may have taken place in the wheat field in which he had been painting, or in a local barn. The bullet was deflected by a rib and passed through his chest without doing apparent damage to internal organs – possibly stopped by his spine. He was able to walk back to the Auberge Ravoux, where he was attended to by two doctors. One of them, Dr Gachet, served as a war surgeon in 1870 and had extensive knowledge of gunshots. Vincent was possibly attended to during the night by Dr Gachet's son Paul Louis Gachet and the innkeeper, Arthur Ravoux. The following morning, Theo rushed to his brother's side, finding him in good spirits. But within hours Vincent's health began to fail, suffering from an infection resulting from the wound. He died in the early hours of 29 July. According to Theo, Vincent's last words were: 'The sadness will last forever. Van Gogh was buried on 30 July, in the municipal cemetery of Auvers-sur-Oise. The funeral was attended by Theo van Gogh, Andries Bonger, Charles Laval, Lucien Pissarro, Émile Bernard, Julien Tanguy and Paul Gachet, among twenty family members, friends and locals. Theo suffered from syphilis, and his health began to decline further after his brother's death. Weak and unable to come to terms with Vincent's absence, he died on 25 January 1891.'"
,
x:true},
{image1:b,title1:"Legacy",
content1:"After Van Gogh's first exhibitions in the late 1880s, his reputation grew steadily among artists, art critics, dealers and collectors. In 1887, André Antoine hung Van Gogh's alongside works of Georges Seurat and Paul Signac, at the Théâtre Libre in Paris; some were acquired by Julien Tanguy. In 1889, his work was described in the journal Le Moderniste Illustré by Albert Aurier as characterised by 'fire, intensity, sunshine'. Ten paintings were shown at the Société des Artistes Indépendants, in Brussels in January 1890.[281] French president Marie François Sadi Carnot was said to have been impressed by Van Gogh's work. After Van Gogh's death, memorial exhibitions were held in Brussels, Paris, The Hague and Antwerp. His work was shown in several high-profile exhibitions, including six works at Les XX; in 1891 there was a retrospective exhibition in Brussels. Van Gogh's works are among the world's most expensive paintings. Those sold for over US$100 million (today's equivalent) include Portrait of Dr Gachet, Portrait of Joseph Roulin and Irises. The Metropolitan Museum of Art acquired a copy of Wheat Field with Cypresses in 1993 for US$57 million by using funds donated by publisher, diplomat and philanthropist Walter Annenberg. In 2015, L'Allée des Alyscamps sold for US$66.3 million at Sotheby's, New York, exceeding its reserve of US$40 million."
},
];
for(let i=0;i<y.length;i++){
  if(i%2==0){
    y[i].x1=true;
  }
  else{
    y[i].x1=false;
  }
}
function page() {
  return (
    <body className='bg-neutral-900 font-extralight'>
      <div className='w-screen h-[500px] bg-cover mr-6 rounded-md flex justify-center items-center' 
      style={{
        backgroundImage: `url('img/wheatfield.jpeg')`, height:"430px",}}>
      <div className='bg-[#46588a00] h-1/3 w-2/3 flex justify-center items-center text-white rounded-md text-8xl tracking-widest font-extralight'>Death</div>
      </div>
      <div className='py-6 font-extralight'>
      {y.map((card) => (
          <Card
          key={card.title1}
          image={card.image1}
        title={card.title1}
        content={card.content1}
        x={card.x1}
          />
        ))}
        </div>
    </body>
  )
}

export default page