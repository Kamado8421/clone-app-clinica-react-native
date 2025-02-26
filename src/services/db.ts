import { PrismaClient } from '@prisma/client/react-native';
import { reactiveHooksExtension } from '@prisma/react-native';

const baseClient = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export const prismaClient = baseClient.$extends(reactiveHooksExtension());

export async function initializeDB() {
    try {
        baseClient.$applyPendingMigrations();
    } catch (error) {
        console.log('PRISMA ERROR: ', error);
        throw new Error('Falid Initialized');
    }
}