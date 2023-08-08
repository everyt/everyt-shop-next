import Header from '@Components/Header';
import Item from '@Components/Item';

export default function Shop() {
  return (
    <div className='w-100vw bg-white flex flex-col justify-start content-center'>
      <div className='w-100vw bg-neutral-100 flex flex-row justify-center'>
        <div className='w-1000px flex flex-row content-start flex-wrap'>
          <Item
            name='앙념통닭'
            price='21000'
            img='/Chicken.png'
            category='식품'
          >
            고풍스럽게 튀겨진 양념 입힌 조각난 닭 한마리.
          </Item>
          <Item
            name='후라이드 통닭'
            price='10000'
            img='/FriedChicken.png'
            category='식품'
          >
            시골풍으로 튀겨진 닭 한마리.
          </Item>
          <Item
            name='통닭'
            price='10000'
            img='/Chicken.png'
            category='식품'
          >
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
          <Item
            name='통닭'
            price='10000'
            img='/Chicken.png'
            category='식품'
          >
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
          <Item
            name='통닭'
            price='10000'
            img='/Chicken.png'
            category='식품'
          >
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
          <Item
            name='통닭'
            price='10000'
            img='/Chicken.png'
            category='식품'
          >
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
          <Item
            name='통닭'
            price='10000'
            img='/Chicken.png'
            category='식품'
          >
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
          <Item
            name='통닭'
            price='10000'
            img='/Chicken.png'
            category='식품'
          >
            고풍스럽게 튀겨진 조각난 닭 한마리.
          </Item>
        </div>
      </div>
    </div>
  );
}
