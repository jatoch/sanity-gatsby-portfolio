export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb7c1e68f7aa30d38db9741',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pxuzpjgf',
                  apiId: '29d8118d-0442-46f4-ba77-83bc98d02ce4'
                },
                {
                  buildHookId: '5eb7c1e6c2f2d2fb502873cb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-erm91727',
                  apiId: '1d476a53-63bc-4acc-a023-5ca96069bf52'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jatoch/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-erm91727.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
