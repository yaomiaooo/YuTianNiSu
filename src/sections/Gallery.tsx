import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { X, ZoomIn } from 'lucide-react';
import { BASE_URL } from '../config';

const artworks = [
  {
    id: 1,
    title: '大公鸡',
    description: '玉田泥塑最具代表性的作品之一，色彩艳丽，造型生动，寓意吉祥如意。',
    image: 'images/yutian-rooster.webp',
    category: '动物',
  },
  {
    id: 2,
    title: '骑毛驴走娘家',
    description: '吴玉成代表作，入选文化部"中国民间艺术一绝大展"，展现民俗风情。',
    image: 'images/yutian-figures.jpg',
    category: '人物',
  },
  {
    id: 3,
    title: '小狮子滚绣球',
    description: '刘广田代表作，动态造型展现民俗风情，内置苇笛可发出清脆声响。',
    image: 'images/yutian-tiger.jpg',
    category: '动物',
  },
  {
    id: 4,
    title: '麒麟送子',
    description: '传统吉祥题材，寓意多子多福，色彩层次丰富，仅绿色就分出三种层次。',
    image: 'images/yutian-family.jpg',
    category: '神话',
  },
  {
    id: 5,
    title: '泥塑制作工艺',
    description: '艺人正在精心制作泥塑，从取土到成品，每一步都凝聚着匠心。',
    image: 'images/yutian-making.jpg',
    category: '工艺',
  },
  {
    id: 6,
    title: '传统泥塑作品',
    description: '玉田泥塑作品色彩鲜艳，千姿百态，融汇于形似、神似之间。',
    image: 'images/yutian-nisu-1.jpg',
    category: '传统',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);

  return (
    <section id="gallery" className="section-padding bg-primary-bg">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary-gold text-sm tracking-widest uppercase mb-4 block">
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold 
                         text-primary-gold mb-4">
              代表作品
            </h2>
            <p className="text-text-light/60 max-w-2xl mx-auto">
              从传统经典到现代创新
              <br />
              每一件作品都承载着匠人的心血与智慧
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <ScrollReveal key={artwork.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-square rounded-xl overflow-hidden 
                         cursor-pointer bg-[#3d1515]/30"
                onClick={() => setSelectedImage(artwork)}
              >
                {/* Image */}
                <img
                  src={'/YuTianNiSu/' + artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                           group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/20 
                              to-transparent opacity-60 group-hover:opacity-90 
                              transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-primary-gold/80 text-xs uppercase tracking-wider mb-2">
                    {artwork.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-primary-gold mb-2 
                               group-hover:text-accent-gold transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-text-light/60 text-sm line-clamp-2 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {artwork.description}
                  </p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full 
                              bg-primary-gold/20 flex items-center justify-center
                              opacity-0 group-hover:opacity-100 
                              transition-all duration-300 group-hover:scale-110">
                  <ZoomIn className="w-5 h-5 text-primary-gold" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 
                     bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full 
                       bg-primary-gold/20 flex items-center justify-center
                       hover:bg-primary-gold/40 transition-colors z-10"
            >
              <X className="w-6 h-6 text-primary-gold" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={BASE_URL + selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              
              {/* Caption */}
              <div className="mt-6 text-center">
                <span className="text-primary-gold/60 text-sm uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-primary-gold mt-2">
                  {selectedImage.title}
                </h3>
                <p className="text-text-light/70 mt-2 max-w-lg mx-auto">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
