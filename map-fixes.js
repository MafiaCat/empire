// FONCTIONS DE CARTE COMPLÈTES - À intégrer dans index.html

function createCityElements(container) {
    container.innerHTML = ''; // Vider le contenu précédent

    // Zone centre-ville (gris clair)
    const downtown = document.createElement('div');
    downtown.className = 'city-element downtown';
    downtown.style.left = '800px';
    downtown.style.top = '800px';
    downtown.style.width = '400px';
    downtown.style.height = '400px';
    container.appendChild(downtown);

    // Créer des routes principales (jaune, style Google Maps)
    const roads = [
        { x: 960, y: 0, width: 80, height: 2000, highway: true }, // Route verticale principale
        { x: 0, y: 960, width: 2000, height: 80, highway: true }, // Route horizontale principale
        { x: 600, y: 0, width: 40, height: 2000 }, // Route secondaire
        { x: 1400, y: 0, width: 40, height: 2000 }, // Route secondaire
        { x: 0, y: 600, width: 2000, height: 40 }, // Route secondaire
        { x: 0, y: 1400, width: 2000, height: 40 }  // Route secondaire
    ];

    roads.forEach(road => {
        const roadEl = document.createElement('div');
        roadEl.className = road.highway ? 'city-element road highway' : 'city-element road';
        roadEl.style.left = road.x + 'px';
        roadEl.style.top = road.y + 'px';
        roadEl.style.width = road.width + 'px';
        roadEl.style.height = road.height + 'px';
        container.appendChild(roadEl);
    });

    // Créer des bâtiments dans le centre-ville
    const buildings = [
        { x: 850, y: 850, w: 50, h: 80 },
        { x: 950, y: 850, w: 60, h: 70 },
        { x: 1050, y: 850, w: 55, h: 90 },
        { x: 1150, y: 850, w: 45, h: 75 },
        { x: 850, y: 1050, w: 50, h: 60 },
        { x: 950, y: 1050, w: 60, h: 55 },
        { x: 1050, y: 1050, w: 55, h: 70 },
        { x: 1150, y: 1050, w: 45, h: 65 },
    ];

    buildings.forEach(building => {
        const buildingEl = document.createElement('div');
        buildingEl.className = 'city-element building';
        buildingEl.style.left = building.x + 'px';
        buildingEl.style.top = building.y + 'px';
        buildingEl.style.width = building.w + 'px';
        buildingEl.style.height = building.h + 'px';
        container.appendChild(buildingEl);
    });

    // Créer des parcs (vert)
    const parks = [
        { x: 200, y: 200, size: 150 },
        { x: 1650, y: 200, size: 130 },
        { x: 200, y: 1650, size: 140 },
        { x: 700, y: 700, size: 80 },
        { x: 1220, y: 1220, size: 90 }
    ];

    parks.forEach(park => {
        const parkEl = document.createElement('div');
        parkEl.className = 'city-element park';
        parkEl.style.left = park.x + 'px';
        parkEl.style.top = park.y + 'px';
        parkEl.style.width = park.size + 'px';
        parkEl.style.height = park.size + 'px';
        parkEl.style.borderRadius = '8px';
        container.appendChild(parkEl);
    });

    // Créer des forêts pour les fermes (vert foncé)
    const forests = [
        { x: 1500, y: 150, size: 250 }, // Forêt nord-est (pour farm-small)
        { x: 50, y: 1550, size: 300 }, // Forêt sud-ouest (pour farm-large)
        { x: 1700, y: 1700, size: 250 } // Forêt sud-est (pour huge-farm)
    ];

    forests.forEach(forest => {
        const forestEl = document.createElement('div');
        forestEl.className = 'city-element forest';
        forestEl.style.left = forest.x + 'px';
        forestEl.style.top = forest.y + 'px';
        forestEl.style.width = forest.size + 'px';
        forestEl.style.height = forest.size + 'px';
        forestEl.style.borderRadius = '50%';
        container.appendChild(forestEl);
    });

    // Créer une rivière (bleu)
    const waterEl = document.createElement('div');
    waterEl.className = 'city-element water';
    waterEl.style.left = '400px';
    waterEl.style.top = '0';
    waterEl.style.width = '80px';
    waterEl.style.height = '800px';
    waterEl.style.borderRadius = '40px';
    container.appendChild(waterEl);
}

function createPropertyMarkers(container) {
    // Supprimer les anciens marqueurs
    container.querySelectorAll('.property-marker').forEach(m => m.remove());

    // Créer les marqueurs pour les propriétés ayant une position x,y
    purchasableAssets.filter(a => a.x && a.y).forEach(asset => {
        const marker = document.createElement('div');
        marker.className = 'property-marker';
        marker.dataset.assetId = asset.id;

        const isOwned = state.assets[asset.id] && state.assets[asset.id].owned;
        if (isOwned) {
            marker.classList.add('owned');
        }

        marker.style.left = asset.x + 'px';
        marker.style.top = asset.y + 'px';

        marker.innerHTML = `<div class="property-icon">${asset.icon}</div>`;

        // Événement de clic pour ouvrir le modal
        marker.onclick = () => {
            openPropertyModal(asset);
        };

        container.appendChild(marker);
    });

    // Créer les marqueurs POI (garage, musée, bijouterie)
    mapPOI.forEach(poi => {
        const marker = document.createElement('div');
        marker.className = 'property-marker poi';
        marker.dataset.poiId = poi.id;

        // Vérifier si tous les items du POI sont possédés
        const allOwned = poi.items.every(item => state.assets[item.id] && state.assets[item.id].owned);
        if (allOwned) {
            marker.classList.add('owned');
        }

        marker.style.left = poi.x + 'px';
        marker.style.top = poi.y + 'px';

        marker.innerHTML = `<div class="property-icon">${poi.icon}</div>`;

        // Événement de clic pour ouvrir le modal du POI
        marker.onclick = () => {
            openPOIModal(poi);
        };

        container.appendChild(marker);
    });
}

function openPropertyModal(asset) {
    const modal = el('propertyModal');
    const modalIcon = el('modalIcon');
    const modalTitle = el('modalTitle');
    const modalPrice = el('modalPrice');
    const modalDescription = el('modalDescription');
    const modalBonus = el('modalBonus');
    const modalItems = el('modalItems');
    const modalActions = el('modalActions');

    modalIcon.textContent = asset.icon;
    modalTitle.textContent = asset.name;
    modalDescription.textContent = asset.description;

    const isOwned = state.assets[asset.id] && state.assets[asset.id].owned;

    if (isOwned) {
        modalPrice.textContent = '✓ Possédée';
        modalPrice.style.color = 'var(--accent)';
        modalBonus.style.display = 'block';
    } else {
        modalPrice.textContent = fmt(asset.price);
        modalPrice.style.color = 'var(--primary)';
        modalBonus.style.display = 'none';
    }

    // Afficher le bonus
    let bonusText = '';
    if (asset.type === 'plantLimit') {
        bonusText = `<strong>Bonus:</strong> +${asset.bonus} plants de capacité`;
    } else if (asset.type === 'deliverySpeed') {
        bonusText = `<strong>Bonus:</strong> +${asset.bonus * 100}% de vitesse de livraison`;
    } else if (asset.type === 'credibility') {
        bonusText = `<strong>Bonus:</strong> +${asset.bonus * 100}% de crédibilité`;
    } else if (asset.type === 'avoidInvestigation') {
        bonusText = `<strong>Bonus:</strong> +${asset.bonus * 100}% d'éviter les enquêtes`;
    } else if (asset.type === 'salesBonus') {
        bonusText = `<strong>Bonus:</strong> +${asset.bonus * 100}% sur les prix de vente`;
    }
    modalBonus.innerHTML = bonusText;

    // Pas d'items à afficher pour une propriété simple
    modalItems.innerHTML = '';

    // Actions
    modalActions.innerHTML = '';
    if (!isOwned) {
        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Acheter ' + fmt(asset.price);
        buyBtn.className = 'primary';
        buyBtn.onclick = () => {
            handleMapPropertyPurchase(asset.id);
            modal.classList.remove('active');
        };
        modalActions.appendChild(buyBtn);
    }

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Fermer';
    closeBtn.onclick = () => {
        modal.classList.remove('active');
    };
    modalActions.appendChild(closeBtn);

    modal.classList.add('active');
}

function openPOIModal(poi) {
    const modal = el('propertyModal');
    const modalIcon = el('modalIcon');
    const modalTitle = el('modalTitle');
    const modalPrice = el('modalPrice');
    const modalDescription = el('modalDescription');
    const modalBonus = el('modalBonus');
    const modalItems = el('modalItems');
    const modalActions = el('modalActions');

    modalIcon.textContent = poi.icon;
    modalTitle.textContent = poi.name;
    modalDescription.textContent = poi.description;
    modalPrice.textContent = '';
    modalBonus.style.display = 'none';

    // Afficher les items disponibles dans ce POI
    modalItems.innerHTML = '';
    poi.items.forEach(item => {
        const isOwned = state.assets[item.id] && state.assets[item.id].owned;

        const itemEl = document.createElement('div');
        itemEl.className = isOwned ? 'modal-item owned' : 'modal-item';

        let bonusText = '';
        if (item.type === 'deliverySpeed') {
            bonusText = `+${item.bonus * 100}% vitesse`;
        } else if (item.type === 'credibility') {
            bonusText = `+${item.bonus * 100}% crédibilité`;
        } else if (item.type === 'avoidInvestigation') {
            bonusText = `+${item.bonus * 100}% discrétion`;
        } else if (item.type === 'salesBonus') {
            bonusText = `+${item.bonus * 100}% vente`;
        }

        itemEl.innerHTML = `
            <div class="modal-item-icon">${item.icon}</div>
            <div class="modal-item-info">
                <h4>${item.name}</h4>
                <div class="price">${fmt(item.price)}</div>
                <div class="bonus">${bonusText}</div>
                ${isOwned ? '<div class="owned-badge">✓ Possédé</div>' : ''}
            </div>
            ${!isOwned ? `<button class="primary" onclick="handleMapPropertyPurchase('${item.id}'); updateMapMarkers(); updateUI();">Acheter</button>` : ''}
        `;

        modalItems.appendChild(itemEl);
    });

    // Actions
    modalActions.innerHTML = '';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Fermer';
    closeBtn.onclick = () => {
        modal.classList.remove('active');
    };
    modalActions.appendChild(closeBtn);

    modal.classList.add('active');
}

// Fermer le modal en cliquant sur X ou en dehors
document.addEventListener('DOMContentLoaded', () => {
    const modal = el('propertyModal');
    const modalClose = el('modalClose');

    if (modalClose) {
        modalClose.onclick = () => {
            modal.classList.remove('active');
        };
    }

    if (modal) {
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        };
    }
});
