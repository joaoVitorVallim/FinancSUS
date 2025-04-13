import { MercadoPagoConfig } from 'mercadopago';
import { config } from 'dotenv';

config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

export const validateCollectorId = async (collectorId) => {
    try {
		
        const user = await client.user.get({ id: collectorId });
        
        return user && user.id === collectorId;
    } catch (error) {
        console.error('Erro ao validar Collector ID:', error);
        return false;
    }
};