import ReferenceBtnComponent from '../components/ReferenceBtn'

export default {
  name: 'Справка',
  options: [],
  connects: {
    components: [
      { component: ReferenceBtnComponent, position: 'clientMenu' },
    ]
  }
}