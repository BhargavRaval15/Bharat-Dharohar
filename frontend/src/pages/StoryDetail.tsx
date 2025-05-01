import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock database of stories
const storiesData = [
  {
    id: 1,
    title: "The Legend of Taj Mahal",
    excerpt: "The epic love story behind the creation of one of the world's most beautiful monuments.",
    fullContent: `
      <p>The Taj Mahal stands as one of the most recognizable structures in the world, but behind its pristine white marble façade lies a story of profound love and devastating loss that continues to captivate people across the globe.</p>
      
      <h3>A Love Story Begins</h3>
      <p>In 1607, Prince Khurram (later known as Shah Jahan) was strolling through the Meena Bazaar when he first glimpsed Arjumand Banu Begum, a beautiful Persian princess. It was love at first sight for the 14-year-old prince. Though they were betrothed shortly after their meeting, they would wait five years before marrying in 1612.</p>
      
      <p>Arjumand became Shah Jahan's third wife and was given the title Mumtaz Mahal, meaning "Jewel of the Palace." Unlike many political marriages of the time, their union was one of genuine devotion. Mumtaz was not only Shah Jahan's beloved companion but also his trusted political advisor and confidante.</p>
      
      <h3>A Tragic Loss</h3>
      <p>Mumtaz accompanied Shah Jahan throughout his travels and military campaigns, even while pregnant. In 1631, while giving birth to their 14th child, Mumtaz Mahal died due to complications. On her deathbed, she extracted two promises from the emperor: that he would not remarry, and that he would build her a magnificent tomb.</p>
      
      <p>Shah Jahan was devastated by her death. Contemporary court chronicles note that the emperor's hair turned gray almost overnight, and he went into secluded mourning for an entire year.</p>
      
      <h3>The Ultimate Monument to Love</h3>
      <p>True to his promise, Shah Jahan began constructing the Taj Mahal in 1632 on the southern bank of the Yamuna River in Agra. The name "Taj Mahal" is believed to be derived from Mumtaz Mahal's name.</p>
      
      <p>The emperor spared no expense, employing over 20,000 workers and more than 1,000 elephants to transport materials. The finest architects, stone-cutters, calligraphers, and artisans were brought from across India and Central Asia. The main building was completed in 1643, while the surrounding gardens and additional buildings took another five years to finish.</p>
      
      <h3>A Poetic Design</h3>
      <p>The Taj Mahal embodies the exquisite refinement of Mughal art and architecture. Its perfect symmetry, the luminous marble that appears to change color with the daylight, and the intricate inlay work featuring precious and semi-precious stones all contribute to its timeless beauty.</p>
      
      <p>The central dome, rising to a height of 73 meters, is surrounded by four smaller domes. The entire structure sits on a raised platform and is framed by four minarets. The Quranic inscriptions on the archways and the delicate floral inlays reflect both Islamic influences and native Indian decorative elements.</p>
      
      <h3>Shah Jahan's Final Years</h3>
      <p>In a cruel twist of fate, Shah Jahan was deposed by his son Aurangzeb in 1658 and imprisoned in Agra Fort. For the last eight years of his life, he could only gaze at the Taj Mahal across the river – the monument to his beloved wife that had consumed much of the royal treasury.</p>
      
      <p>After his death in 1666, Shah Jahan was buried beside Mumtaz in the Taj Mahal, disrupting the perfect symmetry of the original design but uniting the couple for eternity.</p>
      
      <h3>Legacy</h3>
      <p>Today, the Taj Mahal attracts millions of visitors annually who come to marvel at what is widely considered the most beautiful building in the world. Beyond its architectural significance, it stands as an enduring symbol of eternal love – a marble poem written by an emperor for his beloved.</p>
      
      <p>The Taj Mahal was designated a UNESCO World Heritage Site in 1983, and in 2007 it was declared one of the New Seven Wonders of the World. But perhaps its greatest accolade remains the simple description offered by the poet Rabindranath Tagore, who called it "a teardrop on the cheek of time."</p>
    `,
    image: "https://www.thoughtco.com/thmb/9fI6s2I0a_yTThyuQyQfzmvbqLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg",
    category: "Historical",
    readTime: "6 min",
    author: "Rajiv Sharma",
    publishDate: "January 12, 2023",
    relatedStories: [2, 4, 5]
  },
  {
    id: 2,
    title: "Ramayana: The Journey of Prince Rama",
    excerpt: "The timeless epic that continues to shape Indian values and cultural identity.",
    fullContent: "Full content of Ramayana story...",
    image: "https://www.holidify.com/images/cmsuploads/compressed/Screenshot2020-05-21at8.28.23AM_20200521082852.png",
    category: "Mythology",
    readTime: "8 min",
    author: "Priya Patel",
    publishDate: "March 27, 2023",
    relatedStories: [1, 6]
  },
  {
    id: 3,
    title: "The Dancing Girl of Mohenjodaro",
    excerpt: "The mystery behind one of the earliest known bronze sculptures from the Indus Valley Civilization.",
    fullContent: "Full content of Dancing Girl story...",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dancing_girl_of_Mohenjo-daro.jpg/1200px-Dancing_girl_of_Mohenjo-daro.jpg",
    category: "Ancient History",
    readTime: "5 min",
    author: "Anand Mehta",
    publishDate: "February 5, 2023",
    relatedStories: [4, 5]
  },
  {
    id: 4,
    title: "Kalinga War: The Transformation of Emperor Ashoka",
    excerpt: "How one of history's bloodiest battles led to the spread of Buddhism and a philosophy of non-violence.",
    fullContent: "Full content of Kalinga War story...",
    image: "https://www.worldhistory.org/img/r/p/500x600/14669.jpg",
    category: "Historical",
    readTime: "7 min",
    author: "Vikram Singh",
    publishDate: "April 18, 2023",
    relatedStories: [1, 3]
  },
  {
    id: 5,
    title: "The Sacred Rivers of India",
    excerpt: "Exploring the spiritual significance of India's seven sacred rivers and their place in culture.",
    fullContent: "Full content of Sacred Rivers story...",
    image: "https://gumlet.assettype.com/swarajya%2F2019-01%2Fa1dc46cf-7304-4d0b-8af1-2afad5f9d662%2FGettyImages_907732840.jpg",
    category: "Culture",
    readTime: "6 min",
    author: "Lakshmi Nair",
    publishDate: "May 2, 2023",
    relatedStories: [1, 3]
  },
  {
    id: 6,
    title: "Mahabharata: The Great War of Dharma",
    excerpt: "The philosophical teachings and moral dilemmas from India's greatest epic.",
    fullContent: "Full content of Mahabharata story...",
    image: "https://static.toiimg.com/photo/102108181.cms",
    category: "Mythology",
    readTime: "9 min",
    author: "Karan Malhotra",
    publishDate: "June 14, 2023",
    relatedStories: [2, 4]
  }
];

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState<any>(null);
  const [relatedStories, setRelatedStories] = useState<any[]>([]);
  
  useEffect(() => {
    // Find the story with the matching id
    const storyId = Number(id);
    const foundStory = storiesData.find(s => s.id === storyId);
    
    if (foundStory) {
      setStory(foundStory);
      
      // Get related stories
      const related = storiesData.filter(s => foundStory.relatedStories.includes(s.id));
      setRelatedStories(related);
    }
  }, [id]);
  
  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Story not found</h1>
          <p className="mb-6">The story you're looking for doesn't seem to exist.</p>
          <Link 
            to="/stories" 
            className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Back to Stories
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-black/50">
          <img 
            src={story.image} 
            alt={story.title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-5xl mx-auto px-4 py-20 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              {story.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">{story.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <span>By {story.author}</span>
              <span>•</span>
              <span>{story.publishDate}</span>
              <span>•</span>
              <span>{story.readTime} read</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: story.fullContent }}
        />
        
        {/* Share Section */}
        <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6 my-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <span className="font-medium">Share this story:</span>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedStories.map(relStory => (
                <article 
                  key={relStory.id} 
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative overflow-hidden aspect-[5/3]">
                    <img 
                      src={relStory.image} 
                      alt={relStory.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 dark:bg-black/70 rounded-full text-xs font-medium">
                        {relStory.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {relStory.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {relStory.excerpt}
                    </p>
                    <Link 
                      to={`/stories/${relStory.id}`} 
                      className="text-primary font-medium text-sm hover:underline inline-flex items-center"
                    >
                      Read full story
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default StoryDetail; 