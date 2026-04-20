'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Community.module.css';

interface CommunityItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Community({ items }: { items: CommunityItem[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
  };

  return (
    <section className={styles.community} id="community">
      <div className={styles.container}>
        <h2 className="section-title">Community Work</h2>
        
        <div className={styles.grid}>
          {items.map((item) => (
            <div 
              key={item.id} 
              className={styles.card}
              onClick={() => openLightbox(item.image)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className={styles.lightbox} onClick={closeLightbox}>
            <button className={styles.closeBtn} onClick={closeLightbox}>&times;</button>
            <Image
              src={currentImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className={styles.lightboxImage}
            />
          </div>
        )}
      </div>
    </section>
  );
}