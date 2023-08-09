import Item from '@Components/Item';

export default function Shop() {
  return (
    <div className='flex flex-col content-center justify-start bg-white w-100vw'>
      <div className='flex flex-row justify-center w-100vw bg-neutral-100'>
        <div className='flex flex-row flex-wrap content-start w-1000px'>
          <Item
            name='앙념통닭'
            price='21,000'
            img='/Chicken.png'
            category='식품'
          >
            고풍스럽게 튀겨진 양념 입힌 조각난 닭 한마리.
          </Item>
          <Item
            name='후라이드 통닭'
            price='19,000'
            img='/FriedChicken.png'
            category='식품'
          >
            시골풍으로 튀겨진 닭 한마리.
          </Item>
          <Item
            name='iPhone 13 mini'
            price='950,000'
            img='/IPhone13mini_Starlight.png'
            category='전자제품'
          >
            스타라이트 128GB
          </Item>
          <Item
            name='통닭'
            price='10000'
            img='/Chicken.png'
            category='자동차용품'
          >
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
          <Item name='통닭' price='10000' img='/Chicken.png' category='식품'>
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
          <Item name='통닭' price='10000' img='/Chicken.png' category='식품'>
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
          <Item name='통닭' price='10000' img='/Chicken.png' category='식품'>
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
          <Item name='통닭' price='10000' img='/Chicken.png' category='식품'>
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
        </div>
      </div>
    </div>
  );
}
