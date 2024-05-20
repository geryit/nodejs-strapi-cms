module.exports = () => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_eudd88cKD2TAP9NqrMJ098WhCXbH/bkr3vasmbm",
      apiToken: "WgIDpbDL0tSzii3KEHIoYCGh",
      appFilter: "geryit-admin2",
      teamFilter: "team_rMefstvfq2arTW8P8q4nn0IB",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
