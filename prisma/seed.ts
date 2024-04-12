import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.movie.upsert({
    where: { title: 'Poor Things' },
    update: {},
    create: {
      title: 'Poor Things',
      description:
        "An account of the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter",
      releaseDate: new Date(2023, 1, 9),
      genre: ["Drama", "Romance", "Comedy"]
    },
  });

  const post2 = await prisma.movie.upsert({
    where: { title: "Roadhouse" },
    update: {},
    create: {
      title: "Roadhouse",
      description:
        'Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.',
      releaseDate: new Date(2024, 3, 8),
      genre: ["Action", "Thriller"]
    },
  });

  console.log({ post1, post2 });

  const post3 = await prisma.genre.upsert({
    where: { name: "Action" },
    update: {},
    create: {
        name: "Action"
    }
  })

  const post4 = await prisma.genre.upsert({
    where: { name: "Drama" },
    update: {},
    create: {
        name: "Drama",
    }
    })
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });