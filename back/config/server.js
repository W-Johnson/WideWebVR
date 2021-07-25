module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '552b18d7ca5a8ca4ed91aa6bbdcc5034'),
    },
  },
});
