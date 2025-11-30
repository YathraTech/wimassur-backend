// import type { Core } from '@strapi/strapi';

// Debug: Afficher les variables d'environnement au démarrage
console.log('=== DEBUGGING ENVIRONMENT VARIABLES ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('ADMIN_JWT_SECRET exists:', !!process.env.ADMIN_JWT_SECRET);
console.log('ADMIN_JWT_SECRET length:', process.env.ADMIN_JWT_SECRET?.length || 0);
console.log('API_TOKEN_SALT exists:', !!process.env.API_TOKEN_SALT);
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
console.log('APP_KEYS exists:', !!process.env.APP_KEYS);
console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log('DATABASE_URL value:', process.env.DATABASE_URL?.substring(0, 30) + '...');
console.log('DATABASE_CLIENT:', process.env.DATABASE_CLIENT);
console.log('=====================================');

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
