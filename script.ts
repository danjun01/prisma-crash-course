import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({})

async function main() {
  const user = await prisma.user.findMany({
    where: {
      AND: [
        {email: { startsWith: "roy" }},
        {name: "Roy"}
      ]
    },
  })
  console.log(user);
}

main()
  .catch(e => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });