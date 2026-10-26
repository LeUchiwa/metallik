import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { useQuote } from '../contexts/QuoteContext';

// ---- Images (tout en minuscule) ----
import p1 from '../../imports/p1.png';
import p1_2 from '../../imports/p1-2.png';
import p1_3 from '../../imports/p1-3.png';
import p1_4 from '../../imports/p1-4.png';
import p1_5 from '../../imports/p1-5.png';

import p2_1 from '../../imports/p2-1.png';
import p2_2 from '../../imports/p2-2.png';
import p2_3 from '../../imports/p2-3.png';
import p2_4 from '../../imports/p2-4.png';

import p3_1 from '../../imports/p3-1.png';
import p3_2 from '../../imports/p3-2.png';
import p3_3 from '../../imports/p3-3.png';
import p3_4 from '../../imports/p3-4.png';

import p4_1 from '../../imports/p4-1.png';
import p4_2 from '../../imports/p4-2.png';
import p4_3 from '../../imports/p4-3.png';
import p4_4 from '../../imports/p4-4.png';

import p5_1 from '../../imports/p5-1.png';
import p5_2 from '../../imports/p5-2.png';
import p5_3 from '../../imports/p5-3.png';
import p5_4 from '../../imports/p5-4.png';

import p6_1 from '../../imports/p6-1.png';
import p6_2 from '../../imports/p6-2.png';
import p6_3 from '../../imports/p6-3.png';
import p6_4 from '../../imports/p6-4.png';

import p7_1 from '../../imports/p7-1.png';
import p7_2 from '../../imports/p7-2.png';
import p7_3 from '../../imports/p7-3.png';

import p9_1 from '../../imports/p9-1.png';
import p9_2 from '../../imports/p9-2.png';
import p9_3 from '../../imports/p9-3.png';
import p9_4 from '../../imports/p9-4.png';

import p11_1 from '../../imports/p11-1.png';
import p11_2 from '../../imports/p11-2.png';
import p11_3 from '../../imports/p11-3.png';
import p11_4 from '../../imports/p11-4.png';
// 4-image carousel
function ProjectCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  return (
    <div className="relative h-64 overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} - vue ${current + 1}`}
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        />
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Précédent"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Suivant"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Vue ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const { openQuoteModal } = useQuote();

  const projects = [
    {
      title: 'Hangar métallique de 2000m²',
      category: 'Charpente métallique',
      location: 'Douala',
      date: 'Nov. 2017',
      images: [p1, p1_2, p1_3, p1_4, p1_5],
      description:
        "Préfabrication, Montage, Couverture et Bardage d'un Hangar d'usine de production pour LANDY SHOES SARL.",
    },
    {
      title: 'Hangar métallique de 350m²',
      category: 'Maintenance industrielle',
      location: 'Douala',
      date: 'Juin - Août 2023',
      images: [p2_1, p2_2, p2_3, p2_4],
      description:
        "Préfabrication, Montage, Couverture et Bardage d'un Hangar à usage d'atelier de maintenance pour ADC.",
    },
{
      title: 'Hangar métallique de 1000m²',
      category: 'Maintenance industrielle',
      location: 'Douala',
      date: 'Sept. - Nov. 2021',
      images: [p3_1, p3_2, p3_3, p3_4],
      description:
        "Montage, Couverture et Bardage d’un Hangar métallique de 1000m², de Hauteur 8m à usage d’usine de production pour SWISS AFRICAN COMPANY",
    },
    {
      title: 'Charpentes métalliques de 300m²',
      category: 'Métallerie décorative',
      location: 'EDÉA',
      date: 'Janvier - Mars 2025',
      images: [p4_1, p4_2, p4_3, p4_4],
      description:
        "Préfabrication et Montage des charpentes métalliques pour 300m² de restaurant de 400m² pour l'auditorium.",
    },
    {
      title: 'Hangar métallique de 1800m² (24m x 75m)',
      category: 'Fabrication sur mesure',
      location: 'Douala - Bassa',
      date: 'Juillet - Octobre 2020',
      images: [p5_1, p5_2, p5_3, p5_4],
      description:
        "Préfabrication, Montage, et Couverture d'un Hangar de 1800m² à la zone industrielle Bassa pour FOBS LTD.",
    },
    {
      title: 'Charpente métallique et Mezzanine',
      category: 'Serrurerie',
      location: 'Yaoundé - Zamengoé',
      date: 'Janvier - Juin 2018',
      images: [p6_1, p6_2, p6_3, p6_4],
      description:
        "Préfabrication, Montage, d'une Charpente métallique de 600m² et Mezzanine de 300m² pour CAMTEL.",
    },
    {
      title: 'Hangar métallique de 908m²',
      category: 'Charpente métallique',
      location: 'Douala',
      date: 'Juin - Août 2021',
      images: [p7_1, p7_2, p7_3],
      description:
        "Préfabrication, Montage, et Couverture d'un Hangar métallique de 908m² (26,7m x 34m) pour BOB LOGISTIQUE INTERNATIONAL.",
    },
    {
      title: 'Hangar métallique de 3024m²',
      category: 'Tuyauterie industrielle',
      location: 'Douala',
      date: 'Mars - Juin 2017',
      images: [p9_1, p9_2, p9_3, p9_4],
      description:
        "Montage d'un Hangar métallique de 3024m² à usage d'usine de production pour TAMPICO.",
    },

{
      title: 'Hangar métallique de 2736m²',
      category: 'Tuyauterie industrielle',
      location: 'Douala',
      date: 'Otc. - Jan. 2023',
      images: [p11_1, p11_2, p11_3, p11_4],
      description:
        "Préfabrication, Montage, couverture et bardage d’un Hangar métallique de 2736m²pour LANDY SHOES SARL",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-5xl mb-6">Nos Réalisations</h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Découvrez une sélection de nos projets récents. Chaque réalisation témoigne de notre
          savoir-faire et de notre engagement envers l'excellence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white border border-border hover:border-primary transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="relative overflow-hidden">
                <ProjectCarousel images={project.images} alt={project.title} />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-secondary text-white p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">15+</div>
              <div className="text-gray-300">Années d'expérience</div>
            </div>
            <div>
              <div className="text-5xl mb-2">300+</div>
              <div className="text-gray-300">Projets réalisés</div>
            </div>
            <div>
              <div className="text-5xl mb-2">98%</div>
              <div className="text-gray-300">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-5xl mb-2">30+</div>
              <div className="text-gray-300">Collaborateurs</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
        <div className="bg-primary text-white p-12 text-center">
          <h2 className="text-3xl mb-4">Vous avez un projet similaire ?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Nos experts sont prêts à transformer vos idées en réalité. Demandez votre devis
            personnalisé dès maintenant.
          </p>
          <button
            onClick={openQuoteModal}
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 transition-colors"
          >
            Demander un devis gratuit
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}