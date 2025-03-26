export default {
    schema: "./utils/schema.jsx", // Ensure this path is correct
    out: "./drizzle",                // Folder where migration files are generated
    dialect: "postgresql",
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_qfZkt3iG0ync@ep-noisy-wave-a85vy7ef-pooler.eastus2.azure.neon.tech/SpendWise?sslmode=require'
  }
  };