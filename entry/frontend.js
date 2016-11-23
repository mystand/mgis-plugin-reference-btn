import ReferenceBtnComponent from '../components/ReferenceBtn'

export default {
  name: 'Справка',
  options: [
    { key: 'layerKey', label: 'Справка', type: 'button', options: 'layers' }
  ],
  connects: {
    components: [
      { component: ReferenceBtnComponent, position: 'clientMenu' },
    ]
  }
}