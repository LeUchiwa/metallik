import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser'; // 👈 Import d'EmailJS

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Correspondance avec les variables de ton template EmailJS Contact
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone || 'Non renseigné',
      subject: formData.subject,
      message: formData.message,
      to_email: 'contact@metallik.tech', // Optionnel si défini dans le template
    };

    // 👇 METTRE TES CLÉS ICI (Service ID et Clé Publique sont les mêmes, seul le Template ID change)
    emailjs
      .send(
        "service_4svzcfn",          // 👈 Le même Service ID que pour le devis
        "template_u0gq1qc", // 👈 Le NOUVEAU Template ID pour la page contact
        templateParams,
        "3K2uqLe07ozLJVCXD"          // 👈 Ta clé publique
      )
      .then(() => {
        alert('Votre message a été envoyé avec succès !');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        alert("Une erreur est survenue lors de l'envoi.");
        console.error("Erreur EmailJS:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-5xl mb-6">Contactez-nous</h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Notre équipe est à votre écoute pour répondre à toutes vos questions et vous 
          accompagner dans la réalisation de vos projets métallurgiques.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl mb-6">Informations de contact</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">+237 693 38 55 62</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@metallik.tech</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      Douala - Yassa<br />
                      Cameroun
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1">Horaires d'ouverture</h3>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 8h00 - 18h00<br />
                      Samedi - Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 border border-border">
              <h2 className="text-2xl mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email *
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none bg-input-background"
                    >
                      <option value="">Sélectionner un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="info">Demande d'information</option>
                      <option value="projet">Nouveau projet</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none resize-none bg-input-background"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="h-96 border border-border overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8659847276244!2d9.8019!3d3.9772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTgnMzguMCJOIDnCsDQ4JzA3LjAiRQ!5e0!3m2!1sfr!2scm!4v1620000000000!5m2!1sfr!2scm"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation METALLIK"
          ></iframe>
        </div>
      </div>
    </div>
  );
}