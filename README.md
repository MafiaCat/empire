# 🏴‍☠️ Empire Illicite - Idle Tycoon v2.0

Un jeu de gestion d'empire illicite amélioré avec de nombreuses fonctionnalités et corrections de bugs.

## 🎮 Comment jouer

Ouvrez simplement `index.html` dans votre navigateur pour commencer à jouer!

## ✨ Nouvelles fonctionnalités (v2.0)

### 📊 Dashboard
- Vue d'ensemble complète de votre empire
- Statistiques en temps réel (cash, plants, stock, production)
- Résumé de toutes vos propriétés

### 🗺️ Carte interactive (NOUVEAU v2.1)
- **Carte virtuelle de la ville**: Explorez une carte avec zoom/dézoom
- **Positionnement géographique**: Les propriétés sont placées selon leur type
  - Centre-ville: Propriétés urbaines et luxueuses
  - Banlieue: Maisons et fermes
  - Périphérie: Grandes exploitations agricoles
- **Achat en un clic**: Cliquez sur une propriété pour l'acheter directement
- **Indicateurs visuels**:
  - 🔴 Rouge = Propriété disponible à l'achat
  - 🟢 Vert = Propriété déjà possédée
- **Contrôles**:
  - Zoom: Boutons +/- ou molette de souris
  - Déplacement: Glissez avec la souris
  - Reset: Bouton pour revenir à la vue initiale
- **Tooltips**: Survolez une propriété pour voir son nom, prix et bonus
- **Décor urbain**: Routes, bâtiments et parcs pour l'immersion

### 🔔 Système de notifications
- Notifications toast pour tous les événements importants
- Feedback visuel pour chaque action
- Messages de succès, d'avertissement et d'erreur

### 🌱 Système de plantation amélioré
- **File d'attente**: Plantez plusieurs graines d'un coup
- **Bouton "Planter 10"**: Plantez 10 graines rapidement
- **Bouton "Récolter tout"**: Récoltez tous les plants mûrs en un clic
- **Compteurs en temps réel**: Voyez combien de plants sont en plantation/croissance
- **Barres de progression**: Visualisez l'avancement de la plantation et croissance

### 💰 Fonctionnalités de vente
- **Bouton "Acheter Max"**: Achetez le maximum de graines possible
- **Bouton "Vendre tout"**: Vendez tout votre stock en un clic
- **Prix du marché dynamique**: Le prix fluctue automatiquement

### 🤝 Améliorations dealers
- Affichage du taux de vente automatique
- Affichage du bonus d'armes en pourcentage
- Les dealers vendent automatiquement votre stock

### ₿ Crypto améliorée
- Affichage de la valeur de chaque crypto possédée
- Valeur totale du portefeuille crypto
- Graphiques en temps réel sans fuite mémoire

## 🐛 Bugs corrigés

### Bugs critiques
- ✅ **Bug createChart**: Correction de la syntaxe JS (manquait `data:`)
- ✅ **Plantation multiple**: Fix du système de plantation x10
- ✅ **Fuites mémoire**: Destruction correcte des instances Chart.js
- ✅ **Décompte des graines**: Les graines sont maintenant correctement déduites

### Améliorations de logique
- ✅ File d'attente pour la plantation
- ✅ Botanistes plantent automatiquement
- ✅ Barres de progression précises
- ✅ Production calculée correctement

## 🎯 Mécaniques de jeu

### Progression
1. **Débuter**: Livrez des pizzas pour gagner de l'argent initial ($10/livraison)
2. **Acheter des graines**: Achetez des graines ($10/graine)
3. **Planter**: Plantez dans vos propriétés (5 secondes par graine)
4. **Croissance**: Attendez que les plants poussent (10 secondes de base)
5. **Récolter**: Récoltez les plants mûrs pour obtenir du stock
6. **Vendre**: Vendez votre stock sur le marché (prix fluctuant)

### Améliorations
- **Botanistes** ($2,000): Plantent automatiquement
- **Lampes UV** ($3,000): Accélèrent la croissance de 20% par lampe
- **Dealers** ($1,000): Vendent automatiquement 0.5g/s
- **Armes** ($2,000): Augmentent l'efficacité des dealers de 30% par niveau

### Propriétés
- 🏠 **Petit studio miteux** (gratuit): Capacité 50 plants
- 🏪 **Local Abandonné** ($5,000): +500 plants
- 🏙️ **Petit Appartement** ($25,000): +1,000 plants
- 🏡 **Maison avec Jardin** ($100,000): +5,000 plants
- 🌲 **Corps de Ferme Caché** ($500,000): +10,000 plants
- 🌳 **Grosse Ferme Cachée** ($2,000,000): +50,000 plants
- 🏭 **Exploitation Géante** ($10,000,000): +100,000 plants

### Investissements
- 🏎️ **Voitures de luxe**: Augmentent la vitesse de livraison
- 🎨 **Œuvres d'art**: Évitent les enquêtes et augmentent les ventes
- 💍 **Bijoux**: Bonus sur les prix de vente

### Crypto-monnaies
- ₿ **Bitcoin**: Investissement à long terme
- Ξ **Ethereum**: Fluctuations moyennes
- 🐶 **Dogecoin**: Volatile mais amusant

## 🔧 Optimisations techniques

- Réduction de la fréquence d'update de l'UI (1x/seconde)
- Destruction des anciens graphiques Chart.js
- Meilleure gestion des timers
- Code plus modulaire et maintenable
- Gestion correcte de la mémoire

## 🎨 Améliorations visuelles

- Nouveau design pour les notifications
- Animations plus fluides
- Meilleure organisation des boutons
- Couleurs plus contrastées
- Interface plus intuitive

## 💾 Sauvegarde

Le jeu sauvegarde automatiquement toutes les 10 secondes dans le localStorage du navigateur.

## 🎮 Contrôles

### Bouton Admin
Un bouton admin est disponible dans le profil pour ajouter $1,000,000 instantanément (pour tester le jeu).

### Reset
Vous pouvez réinitialiser complètement la partie depuis l'onglet Profil.

## 📝 Notes techniques

- Utilise Chart.js 2.9.4 pour les graphiques
- Sauvegarde dans localStorage
- Responsive design (adapté mobile et desktop)
- Pas de dépendances serveur (jeu 100% client-side)

## 🚀 Prochaines améliorations possibles

- [ ] Système d'achievements/succès
- [ ] Événements aléatoires (raids, enquêtes, etc.)
- [ ] Mode prestige/reset avec bonus
- [ ] Plus de types de cultures
- [ ] Système de réputation
- [ ] Mini-jeux
- [ ] Système de gang/clan

---

Développé avec ❤️ pour l'apprentissage du développement de jeux idle!
