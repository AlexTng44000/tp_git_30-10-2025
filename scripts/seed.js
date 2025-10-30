import dotenv from 'dotenv';
import { connectDB, disconnectDB } from '../src/config/database.js';
import { RequestType } from '../src/models/RequestType.js';

dotenv.config();

const data = [
    { code: 'TECH_ISSUE', name: 'Problème technique', description: 'Incident technique', priority: 'high', category: 'Technique', estimatedResponseTime: 4 },
    { code: 'BILLING_Q', name: 'Question de facturation', description: 'Facturation', priority: 'medium', category: 'Billing', estimatedResponseTime: 24 },
    { code: 'ACCOUNT_CHANGE', name: 'Modification de compte', description: 'Changement de données', priority: 'medium', category: 'Compte', estimatedResponseTime: 12 },
    { code: 'FEATURE_REQ', name: 'Demande de fonctionnalité', description: 'Amélioration produit', priority: 'low', category: 'Produit', estimatedResponseTime: 72 },
    { code: 'COMPLAINT', name: 'Réclamation', description: 'Satisfaction client', priority: 'critical', category: 'Support', estimatedResponseTime: 2 }
];

async function run() {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/support_api';
    await connectDB(uri);
    await RequestType.deleteMany({});
    await RequestType.insertMany(data);
    await disconnectDB();
    console.log('Seed done');
}

run();
