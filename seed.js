import { PrismaClient } from "@prisma/client";
import bcrypt from "@bcrypt"
const prisma = new PrismaClient();

async function main() {
    let i = 0;
    const nameArray = [
    "Muhammad", "Ahmed",
    "Ali", "Omar",
    "Hassan", "Youssef", 
    "Michael", "Alaa",
    "Nour", "Fayez",
    "Liam", "Noah",
    "Olivia", "Esmail",
    "Adam", "Otamendi",
    "Ethan", "Sebastian",
    "Ishaaq", "Benjamin"
    ];


    for (i; i <= 20; i++) {
        let indexOne = Math.floor(Math.random * 20)
        let indexTwo = Math.floor(Math.random * 20)
        if (indexOne !== indexTwo) {
            let name = `${nameArray[indexOne]} + " " + ${nameArray[indexTwo]} `
            let email = `${nameArray[indexOne]} + "_" + ${nameArray[indexTwo]} + ${indexTwo}${indexOne} + "@gmail.com"`
            let username = `${nameArray[indexOne]} + "_" + ${nameArray[indexTwo]} + ${indexTwo}${indexOne}`
            let password = bcrypt.hash(username, 10)
            await prisma.create({
                data: {
                    name: name,
                    username: username,
                    email: email,
                    password: password,
                }
            });
        }
    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})