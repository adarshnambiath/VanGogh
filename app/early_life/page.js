import React from 'react';
import Card from '@/components/Card';
import a from "../../public/img/vincent.jpeg";
import b from "../../public/img/skull.png";
import c from "../../public/img/paris.jpeg";
const y=[{image1:a,title1:"Childhood",
content1:"Vincent Willem van Gogh was born on 30 March 1853 in Groot-Zundert, in the predominantly Catholic province of North Brabant in the Netherlands.[24] He was the oldest surviving child of Theodorus van Gogh (1822–1885), a minister of the Dutch Reformed Church, and his wife, Anna Cornelia Carbentus (1819 to 1907). Van Gogh was given the name of his grandfather and of a brother stillborn exactly a year before his birth. Van Gogh's mother was a rigid and religious woman who emphasized the importance of family to the point of claustrophobia for those around her. Van Gogh was a serious and thoughtful child. He was taught at home by his mother and a governess, and in 1860, was sent to the village school. In 1864, he was placed in a boarding school at Zevenbergen, where he felt abandoned, and he campaigned to come home. His interest in art began at a young age. He was encouraged to draw as a child by his mother, and his early drawings are expressive, but do not approach the intensity of his later work. In July 1869, Van Gogh's uncle Cent obtained a position for him at the art dealers Goupil & Cie in The Hague. This was a happy time for Van Gogh; he was successful at work and, at 20, was earning more than his father. Theo's wife, Jo Van Gogh-Bonger, later remarked that this was the best year of Vincent's life."
,
x:true},
{image1:b,title1:"Nuenen and Antwerp",
content1:"In September 1883, Van Gogh moved to Drenthe in the northern Netherlands. In December driven by loneliness, he went to live with his parents, then in Nuenen, North Brabant. In Nuenen, Van Gogh focused on painting and drawing. Working outside and very quickly, he completed sketches and paintings of weavers and their cottages. Van Gogh also completed The Parsonage Garden at Nuenen. Van Gogh painted several groups of still lifes in 1885. During his two-year stay in Nuenen, he completed numerous drawings and watercolours and nearly 200 oil paintings. His palette consisted mainly of sombre earth tones, particularly dark brown, and showed no sign of the vivid colours that distinguished his later work. In August his work was publicly exhibited for the first time, in the shop windows of the dealer Leurs in The Hague. He moved to Antwerp that November and rented a room above a paint dealer's shop in the rue des Images. He lived in poverty and ate poorly, preferring to spend the money Theo sent on painting materials and models. Bread, coffee and tobacco became his staple diet. n Antwerp he applied himself to the study of colour theory and spent time in museums—particularly studying the work of Peter Paul Rubens—and broadened his palette to include carmine, cobalt blue and emerald green."
,
x:true},
{image1:c,title1:"Paris",
content1:"Van Gogh moved to Paris in March 1886 where he shared Theo's rue Laval apartment in Montmartre and studied at Fernand Cormon's studio. In Paris, Vincent painted portraits of friends and acquaintances, still life paintings, views of Le Moulin de la Galette, scenes in Montmartre, Asnières and along the Seine. After seeing the portrait of Adolphe Monticelli at the Galerie Delareybarette, Van Gogh adopted a brighter palette and a bolder attack, particularly in paintings such as his Seascape at Saintes-Maries (1888). Conflicts arose between the brothers. At the end of 1886 Theo found living with Vincent to be 'almost unbearable'. By early 1887, they were again at peace, and Vincent had moved to Asnières, a northwestern suburb of Paris, where he got to know Signac. He adopted elements of Pointillism, a technique in which a multitude of small coloured dots are applied to the canvas so that when seen from a distance they create an optical blend of hues. The style stresses the ability of complementary colours including blue and orange to form vibrant contrasts. While in Asnières Van Gogh painted parks, restaurants and the Seine, including Bridges across the Seine at Asnières. In November 1887, Theo and Vincent befriended Paul Gauguin who had just arrived in Paris."
,
x:true},
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
        backgroundImage: `url('/img/seascape.jpeg')`, height:"430px",}}>
      <div className='bg-[#46588a00] h-1/3 w-2/3 flex justify-center items-center text-white rounded-md text-[10vw] tracking-widest font-extralight'>Early Life</div>
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