export default {
  widgets: [
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
                  buildHookId: '5eb18a42268b39d6f690488e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-video-studio-xcbqzq71',
                  apiId: '293ff499-611f-409e-84c0-a94a32204d6c'
                },
                {
                  buildHookId: '5eb18a42f08678066f0cf9cc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-video-web',
                  apiId: '5c21f378-bbb2-4535-9579-a2fe2a0adcc2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-kitchen-video',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-video-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
