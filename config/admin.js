module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0b22f60b1fc641d93ad57e47581dff60'),
  },
});
