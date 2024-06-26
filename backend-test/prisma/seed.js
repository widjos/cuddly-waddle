const { 
    PromoType,
    Promo
} = require('./data')

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main(){

        await prisma.solution_type.deleteMany()
        await prisma.promo.deleteMany()

        await prisma.$queryRaw`SELECT setval('solution_type_id_type_seq',1,false);`
        await prisma.$queryRaw`SELECT setval('promo_id_promo_seq',1,false);`

        await prisma.solution_type.createMany({
            data: PromoType        
        });
    
        await prisma.promo.createMany({
            data: Promo        
        });

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(
        async () => {
            await prisma.$disconnect();
        }
    );
