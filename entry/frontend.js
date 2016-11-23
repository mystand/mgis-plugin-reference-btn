import ReferenceBtnComponent from '../components/ReferenceBtn'

export default {
  name: 'Справка',
  options: [{
      key: 'admin',
      label: 'Ссылка на руководство для администратора',
      type: 'string'
    },
    {
      key: 'manger',
      label: 'Ссылка на руководство для менеджера',
      type: 'string'
    },
    {
      key: 'default',
      label: 'Руководство для незарегистрированного пользователя',
      type: 'string'
    }
  ],
  connects: {
    components: [
      { component: ReferenceBtnComponent, position: 'clientMenu' },
    ]
  }
}