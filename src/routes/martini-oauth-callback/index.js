/**
 * @param {import('express').Application} app
 */
export function mrAdminRoute(app) {
  app.use('/martini-admin-oauth/callback', async (req, res) => {
    const code = req.query.code;

    if (!code || typeof code !== 'string') return res.end('Parameter "code" is missing.');

    res.type('html');
    res.send(`
    <div>You are now connected to GitHub!</div>
    <script>window.opener.postMessage('${code}', '*')</script>`);
  });
}
