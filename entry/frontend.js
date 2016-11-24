import ReferenceBtnComponent from '../components/ReferenceBtn'

export default {
  name: 'Справка',
  options: [{
      key: 'ADMIN',
      label: 'Ссылка на руководство для администратора',
      type: 'string'
    },
    {
      key: 'EDITOR',
      label: 'Ссылка на руководство для менеджера',
      type: 'string'
    },
    {
      key: 'VIEWER',
      label: 'Ссылка на руководство пользователя',
      type: 'string'
    }
  ],
  connects: {
    components: [
      { component: ReferenceBtnComponent, position: 'clientMenu' }
    ]
  }
}