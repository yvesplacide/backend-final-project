import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import ROLES from '../config/roles.js';

dotenv.config();

const createAdmin = async () => {
    try {
        // Connexion à la base de données
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connecté à MongoDB');

        // Créer l'administrateur avec TOUS les champs obligatoires
        const admin = await User.create({
            firstName: 'Yves',
            lastName: 'Placide',
            email: 'yvesplacide75@gmail.com',
            password: 'Maman05171409',
            phone: '+2250779545834', // CHAMP OBLIGATOIRE
            profession: 'Administrateur Système', // CHAMP OBLIGATOIRE
            address: 'Siège Social, Abidjan', // CHAMP OBLIGATOIRE
            dateOfBirth: '2002-03-16', // CHAMP OBLIGATOIRE
            birthPlace: 'Abidjan', // CHAMP OBLIGATOIRE
            role: ROLES.ADMIN
        });

        console.log('✅ Administrateur créé avec succès!');
        console.log('📋 Détails:', admin.firstName, admin.lastName, admin.email);
        process.exit(0);
    } catch (error) {
        console.error('❌ Erreur lors de la création de l\'administrateur:', error.message);
        console.error('💡 Assurez-vous que tous les champs obligatoires sont fournis');
        process.exit(1);
    }
};

createAdmin(); 