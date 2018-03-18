import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Milk',
    avatar_url: 'https://img1.cgtrader.com/items/717115/a69ed5d165/milk-carton-3d-model-obj-fbx-blend.png',
  },
  {
    name: 'Cereal',
    avatar_url: 'https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/c/o/compressed_19110101_hbo_strawberry_cereal.jpg',
  },
  {
    name: 'Lays',
    avatar_url: 'https://www.fritolay.com/images/default-source/blue-bag-image/lays-classic.png?sfvrsn=bd1e563a_2',
  },
  {
    name: 'Milk',
    avatar_url: 'https://img1.cgtrader.com/items/717115/a69ed5d165/milk-carton-3d-model-obj-fbx-blend.png',
  },
]

renderRow (rowData, sectionID) {
    {
    return (
      <ListItem
        roundAvatar
        key={sectionID}
        title={rowData.name}
        subtitle={rowData.subtitle}
        avatar={{uri:rowData.avatar_url}}
      />
    )
  }
  
  render () {
    return (
      <List>
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />
      </List>
    )
  }}