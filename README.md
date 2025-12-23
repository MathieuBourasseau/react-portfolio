# 👨‍💻 Portfolio - Mathieu Bourasseau

![Project Status](https://img.shields.io/badge/Status-En_Développement-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> **Note aux recruteurs :** Ce portfolio a été conçu et développé entièrement par mes soins pour présenter mes compétences dans le cadre de ma recherche d'**alternance en développement web**.

## 🔗 Démo en ligne
👉 **[Voir le portfolio en ligne](https://react-portfolio-five-iota-58.vercel.app/)**

---

## 📝 À propos
Ce projet est une Single Page Application (SPA) moderne servant de vitrine à mon profil professionnel. Il regroupe mes réalisations, mon parcours académique et professionnel, ainsi que mes compétences techniques.

L'objectif technique était de créer une interface **fluide**, **typée** et **performante**, en utilisant les dernières normes de l'écosystème React.

### 🌟 Fonctionnalités clés
* **Navigation Fluide :** Transition entre les sections (Projets, Compétences, Parcours, Contact).
* **Formulaire de Contact fonctionnel :** Intégration avec EmailJS et validation via React Hook Form.
* **Design Responsive :** Interface adaptée aux mobiles, tablettes et desktops.
* **Animations :** Utilisation de Framer Motion pour des micro-interactions soignées.
* **Optimisation des images :** Utilisation du composant `next/image` pour les performances.

---

## 🛠 Stack Technique

Ce projet a été construit avec une architecture moderne axée sur la maintenabilité et la performance.

### Cœur
* ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React.js** : Bibliothèque principale pour l'UI.
* ![Next JS](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white) **Next.js** : Utilisé pour l'architecture du projet, le routing et l'optimisation des assets.
* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript** : Pour un code robuste et fortement typé (Interfaces, Types personnalisés).

### Style & UI
* ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS** : Pour un styling utilitaire rapide et responsive.
* ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) **Framer Motion** : Pour les animations d'entrée et de transition.

### Outils & Formulaire
* **React Hook Form** : Gestion performante des formulaires.
* **EmailJS** : Service d'envoi d'emails côté client (sans backend complexe).
* **Sonner** : Gestion des notifications (Toasts).
* **React Icons** : Bibliothèque d'icônes vectorielles.

---

## 📂 Structure du projet

L'architecture suit les bonnes pratiques Next.js / React :

```bash
/src
  ├── components/    # Composants réutilisables (Navbar, Cards, Form...)
  ├── types/         # Définitions TypeScript (Interfaces globales)
  ├── app/           # Pages et Layout (Next.js App Router)
  ├── public/        # Assets statiques (Images, CV...)
  └── styles/        # Configuration Tailwind
