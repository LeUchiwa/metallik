import { Link } from 'react-router';
import { ArrowRight, Shield, Cog, Users, Award, Clock, TrendingUp, CheckCircle2, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useQuote } from '../contexts/QuoteContext';

export function Home() {
  const { openQuoteModal } = useQuote();
  const features = [
    {
      icon: Shield,
      title: 'Qualité Garantie',
      description: 'Des normes de qualité strictes et des certifications internationales',
    },
    {
      icon: Cog,
      title: 'Expertise Technique',
      description: 'Plus de 25 ans d\'expérience dans le secteur métallurgique',
    },
    {
      icon: Users,
      title: 'Équipe Qualifiée',
      description: 'Des professionnels certifiés et passionnés par leur métier',
    },
  ];

  const advantages = [
    {
      icon: Award,
      title: 'Certifications professionnelles',
      description: 'Certifiés ISO 9001 et qualifiés selon les normes européennes en vigueur',
    },
    {
      icon: Clock,
      title: 'Respect des délais',
      description: 'Engagement ferme sur les plannings avec un taux de respect de 98%',
    },
    {
      icon: TrendingUp,
      title: 'Innovation continue',
      description: 'Équipements de pointe et technologies de fabrication dernière génération',
    },
    {
      icon: CheckCircle2,
      title: 'Accompagnement complet',
      description: 'De l\'étude de faisabilité à la livraison, nous gérons votre projet de A à Z',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Analyse de vos besoins et définition précise du cahier des charges',
    },
    {
      number: '02',
      title: 'Conception',
      description: 'Élaboration des plans techniques et modélisation 3D de votre projet',
    },
    {
      number: '03',
      title: 'Fabrication',
      description: 'Production en atelier avec contrôle qualité à chaque étape',
    },
    {
      number: '04',
      title: 'Installation',
      description: 'Mise en place sur site et tests de conformité finaux',
    },
  ];

  const testimonials = [
    {
      name: 'M. Hamana Pascal',
      company: 'Directeur Général de Landy Shoes SARL',
      text: 'METALLIK SARL a réalisé nos travaux dans le respect des délais et du cahier des charges. L\'équipe est sérieuse, la qualité de finition est irréprochable et la communication est restée fluide du début à la fin. Je recommande vivement leurs services.',
      rating: 5,
    },
    {
      name: 'M. Kemayou Philippe',
      company: 'Directeur Général de Meddia SARL',
      text: 'Nous avons confié à METALLIK SARL un projet exigeant, et le résultat dépasse nos attentes. Leur professionnalisme, la solidité des ouvrages et leur sens du détail font la différence. C\'est un partenaire de confiance pour notre entreprise.',
      rating: 5,
    },
    {
      name: 'Mme Kadji Odette',
      company: 'Directrice Générale de Faeli SARL',
      text: 'Ce qui m\'a le plus marquée chez METALLIK SARL, c\'est leur écoute et leur réactivité. Ils ont compris notre besoin, proposé des solutions adaptées et livré un travail durable et soigné. Je n\'hésiterai pas à refaire appel à eux.',
      rating: 5,
    },

{
      name: 'M. Tientcheu Jean Claude',
      company: 'Directeur Général de UTC Cameroun',
      text: 'Chez UTC Cameroun, nous exigeons rigueur et fiabilité. METALLIK SARL a su répondre à ces exigences avec un travail de grande qualité, une équipe compétente et un suivi de chantier exemplaire. Une entreprise sur laquelle on peut compter.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-secondary overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1745448797901-2a4c9d9af1c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWx3b3JrJTIwd2VsZGluZ3xlbnwxfHx8fDE3NzMyNTE0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Travail métallurgique"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div 
            className="max-w-2xl text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Excellence en Structures métalliques
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Votre partenaire de confiance pour tous vos projets de fabrication métallique, 
              construction et rénovation industrielle.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 transition-colors"
              >
                Demander un devis
                <ArrowRight size={20} />
              </button>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-secondary px-8 py-4 transition-colors border border-white"
              >
                Découvrir nos services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="text-center p-8 border border-border hover:border-primary transition-colors"
                >
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-primary" size={32} />
                  </motion.div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">Pourquoi choisir METALLIK ?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des avantages concrets qui font la différence sur chacun de vos projets
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 border border-border"
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-primary" size={24} />
                  </motion.div>
                  <h3 className="text-lg mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">Notre processus de travail</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir la réussite de vos projets
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">Ils nous font confiance</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur p-8 border border-white/20"
              >
                <motion.div 
                  className="flex gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 + i * 0.1, duration: 0.3 }}
                    >
                      <Star size={18} className="fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>
                <Quote className="text-primary mb-4" size={32} />
                <p className="text-gray-100 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis
              <ArrowRight size={20} />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-white hover:bg-white/10 px-8 py-4 transition-colors border border-white"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
