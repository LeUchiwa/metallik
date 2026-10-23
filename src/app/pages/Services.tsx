import { Wrench, Building2, Factory, Hammer, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { useQuote } from '../contexts/QuoteContext';

// ---- Images ----
import fab1 from '../../imports/fab1.png';
import fab2 from '../../imports/fab2.png';
import tuyau1 from '../../imports/tuyau1.jpg';
import tuyau2 from '../../imports/tuyau2.jpg';
import chaudro1 from '../../imports/chaudro1.jpg';
import chaudro2 from '../../imports/chaudro2.jpg';
import charpente1 from '../../imports/charpente1.jpg';
import charpente2 from '../../imports/charpente2.jpg';
import metal from '../../imports/metal.png';
import serrurie1 from '../../imports/serrurie1.png';
import serrurie2 from '../../imports/serrurie2.png';
import maintenance1 from '../../imports/maintenance1.png';
import maintenance2 from '../../imports/maintenance2.png';

// Reusable 2-image carousel for each service
function ServiceCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  return (
    <div className="relative overflow-hidden h-[400px] group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} - vue ${current + 1}`}
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Image précédente"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Image suivante"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Vue ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const { openQuoteModal } = useQuote();

  const services = [
    {
      icon: Wrench,
      title: 'Fabrication sur mesure',
      description:
        'Conception et fabrication de pièces métalliques sur mesure selon vos spécifications précises.',
      images: [fab1, fab2],
      features: [
        'Découpe laser de précision',
        'Pliage et formage',
        'Soudure TIG/MIG/MAG',
        'Traitement de surface',
      ],
    },
    {
      icon: Building2,
      title: 'Charpente & Hangars métalliques',
      description:
        'Construction de structures métalliques robustes pour bâtiments industriels et commerciaux.',
      images: [charpente1, charpente2],
      features: [
        'Ossature métallique',
        'Poutres et colonnes',
        'Bardage métallique',
        'Calcul de structures',
      ],
    },
    {
      icon: Wrench,
      title: 'Tuyauterie industrielle',
      description:
        'Réalisation de réseaux de tuyauterie sur mesure : transport de fluides, vapeur, gaz, produits chimiques. Montage, soudure et tests d’étanchéité.',
      images: [tuyau1, tuyau2],
      features: [
        'Tuyauterie acier inox / carbone',
        'Soudure industrielle (TIG, ARC)',
        'Tests d’étanchéité et pression',
        'Installation sur site',
      ],
    },
    {
      icon: Wrench,
      title: 'Chaudronnerie',
      description: 'Conception et réalisation de divers ouvrages chaudronnés.',
      images: [chaudro1, chaudro2],
      features: ['Cuves', 'Bacs métalliques', 'Silos', 'etc...'],
    },
    {
      icon: Factory,
      title: 'Maintenance industrielle',
      description:
        'Entretien et réparation de vos équipements et installations métalliques.',
      images: [maintenance1, maintenance2],
      features: [
        'Diagnostic et expertise',
        'Réparation de structures',
        'Renforcement métallique',
        'Contrats de maintenance',
      ],
    },
    {
      icon: Hammer,
      title: 'Serrurerie & Métallerie',
      description:
        "Création d'ouvrages métalliques décoratifs et fonctionnels pour tous types de projets.",
      images: [serrurie1, serrurie2],
      features: [
        'Garde-corps et rampes',
        'Portails et clôtures',
        'Escaliers métalliques',
        'Mobilier sur mesure',
      ],
    },
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl mb-6">Nos Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          METALLIK propose une gamme complète de services métallurgiques adaptés aux besoins des
          professionnels et des particuliers. Notre expertise couvre tous les aspects de la
          fabrication et de la transformation métallique.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                isEven ? '' : 'lg:grid-flow-dense'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Carousel column */}
              <motion.div
                className={isEven ? '' : 'lg:col-start-2'}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="overflow-hidden shadow-md">
                  <ServiceCarousel images={service.images} alt={service.title} />
                </div>
              </motion.div>

              {/* Text column */}
              <motion.div
                className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-primary" size={32} />
                </motion.div>
                <h2 className="text-3xl mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                        whileHover={{ scale: 3 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          className="bg-secondary text-white p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {"Besoin d'un service spécifique ?"}
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Nos experts sont à votre disposition pour étudier tout projet personnalisé.
          </motion.p>
          <motion.button
            onClick={openQuoteModal}
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demander un devis
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}