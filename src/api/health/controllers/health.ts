export default {
  async check(ctx) {
    try {
      // Vérifier la connexion à la base de données
      await strapi.db.connection.raw('SELECT 1');
      
      ctx.body = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV,
        database: 'connected'
      };
    } catch (error) {
      ctx.status = 503;
      ctx.body = {
        status: 'error',
        message: 'Health check failed',
        error: error.message
      };
    }
  },
};