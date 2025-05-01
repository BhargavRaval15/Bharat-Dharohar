import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-2">
                Bharat Heritage
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">About Us</h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Preserving and celebrating India's rich cultural tapestry through digital innovation.
              </p>
            </div>
            
            <Card className="mb-8 overflow-hidden border-0 shadow-lg">
              <CardContent className="pt-6 px-6 md:px-8 pb-6">
                <h2 className="text-2xl font-serif font-bold mb-4 heading-decoration">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Bharat Dharohar is dedicated to preserving, celebrating, and sharing the rich cultural heritage of India. 
                  Our platform serves as a digital sanctuary for the diverse traditions, art forms, monuments, and historical 
                  narratives that have shaped the Indian subcontinent for millennia.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive to create an inclusive community where enthusiasts, scholars, and curious minds can explore, 
                  learn, and contribute to the collective knowledge about India's cultural tapestry.
                </p>
              </CardContent>
            </Card>

            {/* Art Forms Section */}
            <Card className="mb-8 overflow-hidden border-0 shadow-lg">
              <CardContent className="pt-6 px-6 md:px-8 pb-6">
                <h2 className="text-2xl font-serif font-bold mb-4 heading-decoration">Traditional Art Forms</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      India's artistic traditions are as diverse as its landscapes, with each region developing unique 
                      styles that reflect local culture, history, and beliefs. From the intricate miniature paintings 
                      of Rajasthan to the bold Madhubani art of Bihar, these creative expressions tell stories of gods, 
                      heroes, everyday life, and cosmic truths.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our platform showcases the following traditional art forms:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                      <li>Madhubani Painting (Bihar)</li>
                      <li>Warli Art (Maharashtra)</li>
                      <li>Pattachitra (Odisha)</li>
                      <li>Tanjore Painting (Tamil Nadu)</li>
                      <li>Miniature Painting (Rajasthan)</li>
                      <li>Kalamkari (Andhra Pradesh)</li>
                    </ul>
                    <div className="pt-2">
                      <Link 
                        to="/explore" 
                        className="px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors inline-block"
                      >
                        Explore Art Forms
                      </Link>
                    </div>
                  </div>
                  <div className="animated-border p-4">
                    <img 
                      src="https://static.toiimg.com/thumb/msid-70476197,width-1280,height-720,resizemode-4/70476197.jpg" 
                      alt="Traditional Indian Art" 
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 overflow-hidden border-0 shadow-lg">
              <CardContent className="pt-6 px-6 md:px-8 pb-6">
                <h2 className="text-2xl font-serif font-bold mb-4 heading-decoration">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium mb-2 font-serif">Curated Heritage Catalog</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Discover monuments, art forms, festivals, and cultural practices from across 
                      India, documented with historical context and significance.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium mb-2 font-serif">Community Forum</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Connect with fellow heritage enthusiasts, share experiences, and participate in 
                      discussions about India's cultural treasures.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium mb-2 font-serif">Festival Calendar</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Stay updated with India's diverse festivals and celebrations happening throughout 
                      the year across different regions.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium mb-2 font-serif">Educational Resources</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Access articles, documentaries, and interactive content to deepen your understanding 
                      of India's heritage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 overflow-hidden border-0 shadow-lg">
              <CardContent className="pt-6 px-6 md:px-8 pb-6">
                <h2 className="text-2xl font-serif font-bold mb-4 heading-decoration">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We envision a world where India's cultural heritage is not only preserved for future generations 
                  but is also accessible to people globally. By leveraging digital technology, we aim to create an 
                  immersive experience that transcends geographical boundaries and brings the essence of Bharat's 
                  heritage to a global audience.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="pt-6 px-6 md:px-8 pb-6">
                <h2 className="text-2xl font-serif font-bold mb-4 heading-decoration">Join Us</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Whether you're a history enthusiast, a cultural expert, or simply curious about India's heritage, 
                  we welcome you to join our community. Contribute your knowledge, share your experiences, or simply 
                  explore the wonders of Bharat's rich cultural legacy.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Together, we can ensure that the traditions, wisdom, and artistry of countless generations continue 
                  to inspire and educate for years to come.
                </p>
                
                <div className="mt-8 text-center">
                  <Link 
                    to="/signup" 
                    className="px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors"
                  >
                    Join Our Community
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Quote Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-saffron/5 to-india-green/5">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic font-medium text-gray-700 dark:text-gray-200">
              "A nation's culture resides in the hearts and in the soul of its people."
              <cite className="block mt-4 text-base not-italic">— Mahatma Gandhi</cite>
            </blockquote>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
} 