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
                  buildHookId: '611e8e869d61342a183fcebd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vt299mbk',
                  apiId: '610be219-5b66-4b9e-b202-1ccdaa502823'
                },
                {
                  buildHookId: '611e8e86bf67342ecec1dc4e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4fuc57cu',
                  apiId: 'c3697fcb-ab0f-4040-9427-2f115bc6bf46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kylemaxwellcollins/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4fuc57cu.netlify.app',
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
