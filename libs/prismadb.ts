import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

/* Prevents from crashing saves the instance in globalThis and it will not be effected when hot re-loading =>
   to many Prisma Clients instances are actively running  */

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
