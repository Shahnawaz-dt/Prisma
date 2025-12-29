import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


async function main () {
    // const user = await prisma.user.create({ data: 
    //     { 
    //         name: "Kyle",
    //         email: "kyle@example.com"
    //  } })
    // console.log(user)
    

    

    const createMany = await prisma.user.createMany({
        data: [
            { name: 'Alice', email: 'alice@example.com' },
            { name: 'Bob', email: 'bob@example.com' },
            { name: 'Charlie', email: 'charlie@example.com' },
        ],
        skipDuplicates: true, // Optional: won't crash if an email already exists
});
    const users = await prisma.user.findMany ()
    console.log (users)
    // console.log(`Created ${createMany.count} users.`);              
}

main ()
.catch(e => {
console.error (e.message)
})
.finally(async () => {
await prisma.$disconnect()
})