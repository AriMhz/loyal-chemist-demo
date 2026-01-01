import serviceSurgical from '../assets/service-surgical.png';
import serviceDiagnostic from '../assets/service-diagnostic.png';
import serviceFurniture from '../assets/service-furniture.png';

const availableImages = [serviceSurgical, serviceDiagnostic, serviceFurniture];

const getRandomImage = (id) => availableImages[id % availableImages.length];

// Helper to duplicate products for demo density
const baseProducts = [
    // Surgical
    {
        id: 1,
        name: "Surgical Scissors (Stainless Steel)",
        category: "Surgical",
        image: getRandomImage(1),
        description: "High-grade stainless steel surgical scissors.",
        price: 450,
        originalPrice: 600,
        discount: 25,
        rating: 4.5
    },
    {
        id: 7,
        name: "Precision Forceps",
        category: "Surgical",
        image: getRandomImage(7),
        description: "Precision medical forceps.",
        price: 350,
        originalPrice: 420,
        discount: 17,
        rating: 4.4
    },
    {
        id: 11,
        name: "Scalpel Handle #3",
        category: "Surgical",
        image: getRandomImage(11),
        description: "Professional scalpel handle.",
        price: 250,
        originalPrice: 300,
        discount: 16,
        rating: 4.6
    },
    {
        id: 12,
        name: "Retractor Set",
        category: "Surgical",
        image: getRandomImage(12),
        description: "Self-retaining retractor set.",
        price: 1200,
        originalPrice: 1500,
        discount: 20,
        rating: 4.8
    },
    {
        id: 13,
        name: "Needle Holder",
        category: "Surgical",
        image: getRandomImage(13),
        description: "Mayo-Hegar needle holder.",
        price: 550,
        originalPrice: 700,
        discount: 21,
        rating: 4.5
    },
    {
        id: 14,
        name: "Surgical Tray",
        category: "Surgical",
        image: getRandomImage(14),
        description: "Stainless steel instrument tray.",
        price: 300,
        originalPrice: 400,
        discount: 25,
        rating: 4.3
    },
    {
        id: 15,
        name: "Hemostat Forceps",
        category: "Surgical",
        image: getRandomImage(15),
        description: "Curved hemostat forceps.",
        price: 380,
        originalPrice: 450,
        discount: 15,
        rating: 4.4
    },
    {
        id: 16,
        name: "Suture Kit",
        category: "Surgical",
        image: getRandomImage(16),
        description: "Complete practice suture kit.",
        price: 800,
        originalPrice: 1000,
        discount: 20,
        rating: 4.7
    },

    // Diagnostics
    {
        id: 2,
        name: "Digital Thermometer",
        category: "Diagnostics",
        image: getRandomImage(2),
        description: "Accurate digital thermometer for rapid readings.",
        price: 225,
        originalPrice: 250,
        discount: 10,
        rating: 4.8
    },
    {
        id: 5,
        name: "Digital BP Monitor",
        category: "Diagnostics",
        image: getRandomImage(5),
        description: "Digital blood pressure monitor.",
        price: 1800,
        originalPrice: 2470,
        discount: 27,
        rating: 4.6
    },
    {
        id: 9,
        name: "Pulse Oximeter",
        category: "Diagnostics",
        image: getRandomImage(9),
        description: "Finger pulse oximeter for SpO2.",
        price: 1200,
        originalPrice: 1800,
        discount: 33,
        rating: 4.7
    },
    {
        id: 17,
        name: "Stethoscope",
        category: "Diagnostics",
        image: getRandomImage(17),
        description: "High acoustic sensitivity stethoscope.",
        price: 2500,
        originalPrice: 3000,
        discount: 16,
        rating: 4.9
    },
    {
        id: 18,
        name: "Glucometer Kit",
        category: "Diagnostics",
        image: getRandomImage(18),
        description: "Blood glucose monitoring system.",
        price: 1500,
        originalPrice: 2000,
        discount: 25,
        rating: 4.5
    },
    {
        id: 19,
        name: "Nebulizer Machine",
        category: "Diagnostics",
        image: getRandomImage(19),
        description: "Compressor nebulizer for respiratory care.",
        price: 3200,
        originalPrice: 4000,
        discount: 20,
        rating: 4.8
    },
    {
        id: 20,
        name: "Fetal Doppler",
        category: "Diagnostics",
        image: getRandomImage(20),
        description: "Handheld fetal heart rate monitor.",
        price: 4500,
        originalPrice: 5500,
        discount: 18,
        rating: 4.6
    },
    {
        id: 21,
        name: "Otoscope Set",
        category: "Diagnostics",
        image: getRandomImage(21),
        description: "Diagnostic otoscope set.",
        price: 2800,
        originalPrice: 3500,
        discount: 20,
        rating: 4.4
    },

    // Furniture
    {
        id: 3,
        name: "Adjustable Hospital Bed",
        category: "Furniture",
        image: getRandomImage(3),
        description: "Fully adjustable hydraulic hospital bed.",
        price: 25000,
        originalPrice: 28000,
        discount: 11,
        rating: 5.0
    },
    {
        id: 6,
        name: "LED Examination Light",
        category: "Furniture",
        image: getRandomImage(6),
        description: "LED examination light with adjustable arm.",
        price: 4500,
        originalPrice: 5000,
        discount: 10,
        rating: 4.7
    },
    {
        id: 10,
        name: "Wheelchair (Standard)",
        category: "Furniture",
        image: getRandomImage(10),
        description: "Foldable standard wheelchair.",
        price: 8500,
        originalPrice: 9500,
        discount: 11,
        rating: 4.8
    },
    {
        id: 22,
        name: "Overbed Table",
        category: "Furniture",
        image: getRandomImage(22),
        description: "Adjustable height overbed table.",
        price: 3500,
        originalPrice: 4200,
        discount: 16,
        rating: 4.3
    },
    {
        id: 23,
        name: "IV Stand",
        category: "Furniture",
        image: getRandomImage(23),
        description: "Stainless steel IV fluid stand.",
        price: 1800,
        originalPrice: 2200,
        discount: 18,
        rating: 4.5
    },
    {
        id: 24,
        name: "Patient Stretcher",
        category: "Furniture",
        image: getRandomImage(24),
        description: "Emergency patient stretcher trolley.",
        price: 15000,
        originalPrice: 18000,
        discount: 16,
        rating: 4.9
    },
    {
        id: 25,
        name: "Bedside Locker",
        category: "Furniture",
        image: getRandomImage(25),
        description: "Metal bedside cabinet with drawer.",
        price: 4200,
        originalPrice: 5000,
        discount: 16,
        rating: 4.2
    },
    {
        id: 26,
        name: "Examination Couch",
        category: "Furniture",
        image: getRandomImage(26),
        description: "Padded examination couch.",
        price: 7500,
        originalPrice: 9000,
        discount: 16,
        rating: 4.6
    },

    // Disposables
    {
        id: 4,
        name: "Sterile Surgical Gown",
        category: "Disposables",
        image: getRandomImage(4),
        description: "Sterile, disposable surgical gowns.",
        price: 150,
        originalPrice: 200,
        discount: 25,
        rating: 4.2
    },
    {
        id: 8,
        name: "Latex-Free Gloves (Box)",
        category: "Disposables",
        image: getRandomImage(8),
        description: "Latex-free examination gloves.",
        price: 850,
        originalPrice: 1000,
        discount: 15,
        rating: 4.9
    },
    {
        id: 27,
        name: "Face Masks (50 Pcs)",
        category: "Disposables",
        image: getRandomImage(27),
        description: "3-ply medical face masks.",
        price: 250,
        originalPrice: 400,
        discount: 37,
        rating: 4.8
    },
    {
        id: 28,
        name: "Syringes 5ml (100 Pcs)",
        category: "Disposables",
        image: getRandomImage(28),
        description: "Disposable sterile syringes.",
        price: 600,
        originalPrice: 800,
        discount: 25,
        rating: 4.7
    },
    {
        id: 29,
        name: "Cotton Roll",
        category: "Disposables",
        image: getRandomImage(29),
        description: "Absorbent surgical cotton roll.",
        price: 350,
        originalPrice: 450,
        discount: 22,
        rating: 4.5
    },
    {
        id: 30,
        name: "Bandage Roll",
        category: "Disposables",
        image: getRandomImage(30),
        description: "Cotton crepe bandage roll.",
        price: 120,
        originalPrice: 150,
        discount: 20,
        rating: 4.4
    },
    {
        id: 31,
        name: "IV Cannula",
        category: "Disposables",
        image: getRandomImage(31),
        description: "Disposable IV cannula.",
        price: 45,
        originalPrice: 60,
        discount: 25,
        rating: 4.3
    },
    {
        id: 32,
        name: "Alcohol Swabs",
        category: "Disposables",
        image: getRandomImage(32),
        description: "Sterile alcohol prep pads.",
        price: 200,
        originalPrice: 300,
        discount: 33,
        rating: 4.8
    }
];

// Generate more products for density
const generateMoreProducts = () => {
    let allProducts = [...baseProducts];
    let newId = 100;

    // Duplicate twice
    for (let i = 0; i < 2; i++) {
        baseProducts.forEach(p => {
            allProducts.push({
                ...p,
                id: newId++,
                name: `${p.name} ${i === 0 ? 'Pro' : 'Plus'}`, // Variant names
                image: getRandomImage(newId),
                price: p.price + (i + 1) * 50
            });
        });
    }
    return allProducts;
};

export const products = generateMoreProducts();
