import { PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.livro.findMany({
        orderBy: { titulo: 'asc' }
    });
}