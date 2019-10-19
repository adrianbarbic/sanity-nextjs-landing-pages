export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5daae34e0d6c720a9264aa3e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i2qof1i7',
                  apiId: '209325ed-e101-449a-a5e9-419b4b7dec45'
                },
                {
                  buildHookId: '5daae34ead9e631ecd4b1dd5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j9c8fyfw',
                  apiId: '4245db65-c8af-4349-b7a6-e0e7d55daea4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adrianbarbic/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j9c8fyfw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
