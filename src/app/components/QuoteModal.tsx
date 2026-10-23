import { X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const emptyForm = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  projectType: '',
  projectDescription: '',
  budget: '',
  timeline: '',
  specifications: '',
  urgency: '',
};

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({ ...emptyForm });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `Demande de devis - ${formData.companyName} - ${formData.projectType}`,
          from_name: formData.contactName,
          reply_to: formData.email,
          Entreprise: formData.companyName,
          Contact: formData.contactName,
          Email: formData.email,
          Téléphone: formData.phone,
          "Type de projet": formData.projectType,
          "Description du projet": formData.projectDescription,
          "Budget estimé": formData.budget || 'Non spécifié',
          "Délai souhaité": formData.timeline,
          "Spécifications techniques": formData.specifications || 'Aucune',
          "Niveau de priorité": formData.urgency,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({ ...emptyForm });
          setSubmitStatus('idle');
          onClose();
        }, 2500);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto border border-border shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-border px-8 py-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-3xl">Demande de devis</h2>
                  <p className="text-muted-foreground mt-1">
                    Remplissez ce formulaire pour recevoir une estimation personnalisée
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                  aria-label="Fermer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Success / Error feedback */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mx-8 mt-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-5 py-4"
                  >
                    <CheckCircle size={20} className="flex-shrink-0" />
                    <p>
                      Votre demande a été envoyée avec succès à <strong>contact@metallik.tech</strong>. Nous vous contacterons très prochainement.
                    </p>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mx-8 mt-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 px-5 py-4"
                  >
                    <AlertCircle size={20} className="flex-shrink-0" />
                    <p>
                      Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement à <strong>contact@metallik.tech</strong>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-8">
                  {/* Section 1: Informations de contact */}
                  <div>
                    <h3 className="text-xl mb-4 text-primary">1. Informations de contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block mb-2">
                          Nom de l'entreprise *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                        />
                      </div>
                      <div>
                        <label htmlFor="contactName" className="block mb-2">
                          Nom du contact *
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2">
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Détails du projet */}
                  <div>
                    <h3 className="text-xl mb-4 text-primary">2. Détails du projet</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="projectType" className="block mb-2">
                          Type de projet *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                        >
                          <option value="">Sélectionner un type de projet</option>
                          <option value="Construction métallique">Construction métallique</option>
                          <option value="Chaudronnerie">Chaudronnerie</option>
                          <option value="Tuyauterie">Tuyauterie</option>
                          <option value="Serrurerie">Serrurerie</option>
                          <option value="Charpente métallique">Charpente métallique</option>
                          <option value="Portails et clôtures">Portails et clôtures</option>
                          <option value="Escaliers métalliques">Escaliers métalliques</option>
                          <option value="Garde-corps">Garde-corps</option>
                          <option value="Prestations de services">Prestations de services</option>
                          <option value="Autre projet personnalisé">Autre projet personnalisé</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="projectDescription" className="block mb-2">
                          Description détaillée du projet *
                        </label>
                        <textarea
                          id="projectDescription"
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Décrivez votre projet, ses objectifs, et tous les détails pertinents..."
                          className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none resize-none bg-input-background"
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="budget" className="block mb-2">
                            Budget estimé
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                          >
                            <option value="">Sélectionner une fourchette</option>
                            <option value="Moins de 500 000 FCFA">Moins de 500 000 FCFA</option>
                            <option value="500 000 - 1 000 000 FCFA">500 000 - 1 000 000 FCFA</option>
                            <option value="1 000 000 - 2 500 000 FCFA">1 000 000 - 2 500 000 FCFA</option>
                            <option value="2 500 000 - 5 000 000 FCFA">2 500 000 - 5 000 000 FCFA</option>
                            <option value="Plus de 5 000 000 FCFA">Plus de 5 000 000 FCFA</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block mb-2">
                            Délai souhaité *
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                          >
                            <option value="">Sélectionner un délai</option>
                            <option value="Urgent (moins d'1 mois)">{"Urgent (moins d'1 mois)"}</option>
                            <option value="1 à 3 mois">1 à 3 mois</option>
                            <option value="3 à 6 mois">3 à 6 mois</option>
                            <option value="Plus de 6 mois">Plus de 6 mois</option>
                            <option value="Flexible">Flexible</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Spécifications techniques */}
                  <div>
                    <h3 className="text-xl mb-4 text-primary">3. Spécifications techniques</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="specifications" className="block mb-2">
                          Spécifications et exigences particulières
                        </label>
                        <textarea
                          id="specifications"
                          name="specifications"
                          value={formData.specifications}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Dimensions, matériaux souhaités, normes à respecter, contraintes spécifiques..."
                          className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none resize-none bg-input-background"
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="urgency" className="block mb-2">
                          Niveau de priorité *
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                        >
                          <option value="">Sélectionner un niveau</option>
                          <option value="Faible - Simple estimation">Faible - Simple estimation</option>
                          <option value="Moyenne - Projet en planification">Moyenne - Projet en planification</option>
                          <option value="Haute - Projet confirmé">Haute - Projet confirmé</option>
                          <option value="Urgente - Démarrage immédiat">Urgente - Démarrage immédiat</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-6 border-t border-border">
                    <button
                      type="button"
                      onClick={onClose}
                      disabled={isSubmitting}
                      className="px-8 py-4 border border-border hover:bg-muted transition-colors disabled:opacity-50"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white px-8 py-4 transition-colors flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader size={18} className="animate-spin" />
                          Envoi en cours...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle size={18} />
                          Demande envoyée !
                        </>
                      ) : (
                        'Envoyer la demande de devis'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
