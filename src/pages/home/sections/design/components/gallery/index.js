import React, { useState, useCallback } from 'react';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import designImgs from '../../../../../../data/designImgs';

import './styles.sass';

export const GraphicDesignGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Gallery photos={designImgs} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal id="graphic-design-modal" onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={designImgs.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};
