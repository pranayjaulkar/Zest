"use client";

import usePreviewModal from "@/hooks/usePreviewModal";
import Modal from "@/components/ui/modal";
import Gallery from "@/components/gallery/Gallery";
import Info from "@/components/ui/info";

interface PreviewModalProps {}

const PreviewModal: React.FC<PreviewModalProps> = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.close}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:cols-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:cols-span-8 lg:col-span-7">
          <Info product={product}></Info>
        </div>
      </div>
    </Modal>
  );
};
export default PreviewModal;
